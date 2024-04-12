import { useEffect, useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';

import UseLevel from './sections/UseLevel';
import Glasses from './sections/Glasses';
import Header from './sections/Header';
import Footer from './sections/Footer';
import ViewportTooWide from './sections/ViewportTooWide';

import AddGlassButton from './components/AddGlassButton';
import AddGlassModal from './components/Modal/AddGlassModal';
import DeleteGlassModal from './components/Modal/DeleteGlassModal';
import ProfileModal from './components/Modal/ProfileModal';
import ResetModal from './components/Modal/ResetModal';

import { getData, setData, resetData, getBac } from './utils/helpers';

function App() {
  const [consumption, setConsumption] = useState(getData('consumption') || []);
  const [myBloodAlcoholLevel, setMyBloodAlcoholLevel] = useState(0);
  const [selectedDeleteIndexGlass, setSelectedDeleteIndexGlass] = useState(null);
  const [isAddGlassModalOpen, setIsAddGlassModalOpen] = useState(false);
  const [isDeleteGlassModalOpen, setIsDeleteGlassModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  useEffect(() => {
    isProfileDefined() || setIsProfileModalOpen(true);
  }, []);

  useEffect(() => {
    setData('consumption', consumption);
    isProfileDefined() &&
      setMyBloodAlcoholLevel(getBac(consumption, getData('gender'), getData('weight')));
  }, [consumption]);

  const deleteGlass = () => {
    const newConsumption = [...consumption];
    newConsumption.splice(selectedDeleteIndexGlass, 1);
    setConsumption(newConsumption);
    setIsDeleteGlassModalOpen(false);
  };

  const handleReset = () => {
    resetData();
    setConsumption([]);
    setIsResetModalOpen(false);
    setIsProfileModalOpen(true);
  };

  const isProfileDefined = () => {
    if (getData('weight') && getData('gender')) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <main className="min-h-screen px-4 pt-8 text-white">
      <div className="md:hidden">
        <Header className="mb-6" />
        <UseLevel bloodAlcoholLevel={myBloodAlcoholLevel} className="mb-6" />
        <Glasses
          consumption={consumption}
          setSelectedDeleteIndexGlass={setSelectedDeleteIndexGlass}
          setIsDeleteGlassModalOpen={setIsDeleteGlassModalOpen}
          className="mb-6"
        />
        <Footer
          onProfileButtonClick={() => setIsProfileModalOpen(true)}
          onResetButtonClick={() => setIsResetModalOpen(true)}
          className="pb-24"
        />
        <AddGlassButton onClick={() => setIsAddGlassModalOpen(true)} />
        {isAddGlassModalOpen && (
          <AddGlassModal
            closeModal={() => setIsAddGlassModalOpen(false)}
            setConsumption={setConsumption}
          />
        )}
        {isDeleteGlassModalOpen && (
          <DeleteGlassModal
            closeModal={() => setIsDeleteGlassModalOpen(false)}
            onSubmit={() => deleteGlass()}
            selectedGlassDate={consumption[selectedDeleteIndexGlass].date}
          />
        )}
        {isProfileModalOpen && (
          <ProfileModal closeModal={() => isProfileDefined() && setIsProfileModalOpen(false)} />
        )}
        {isResetModalOpen && (
          <ResetModal
            closeModal={() => setIsResetModalOpen(false)}
            onSubmit={() => handleReset()}
          />
        )}
      </div>
      <ViewportTooWide />
      <ScrollRestoration />
    </main>
  );
}

export default App;
