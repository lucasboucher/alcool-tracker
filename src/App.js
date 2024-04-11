import { useEffect, useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';

import UseLevel from './sections/UseLevel';
import Glasses from './sections/Glasses';
import Header from './sections/Header';
import Footer from './sections/Footer';
import ScreenTooWide from './sections/ScreenTooWide';

import AddGlass from './components/AddGlass';
import ModalLayout from './components/Modal';
import AddGlassModal from './components/Modal/AddGlassModal';
import DeleteGlassModal from './components/Modal/DeleteGlassModal';
import ProfileModal from './components/Modal/ProfileModal';
import ResetModal from './components/Modal/ResetModal';

import { getData, setData, resetData, getBac } from './utils/helpers';

function App() {
  const [consumption, setConsumption] = useState(getData('consumption') || []);
  const [myBloodAlcoholLevel, setMyBloodAlcoholLevel] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [isAddGlassOpen, setIsAddGlassOpen] = useState(false);
  const [isDeleteGlassOpen, setIsDeleteGlassOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isResetOpen, setIsResetOpen] = useState(false);
  const [selectedDeleteIndexGlass, setSelectedDeleteIndexGlass] = useState(null);

  useEffect(() => {
    if (!isModal) {
      setIsAddGlassOpen(false);
      setIsDeleteGlassOpen(false);
      setIsProfileOpen(false);
      setIsResetOpen(false);
    }
  }, [isModal]);

  useEffect(() => {
    if (isAddGlassOpen || isDeleteGlassOpen || isProfileOpen || isResetOpen) {
      setIsModal(true);
    }
  }, [isAddGlassOpen, isDeleteGlassOpen, isProfileOpen, isResetOpen]);

  useEffect(() => {
    if (!getData('weight')) {
      setIsProfileOpen(true);
    }
  }, []);

  useEffect(() => {
    setData('consumption', consumption);
  }, [consumption]);

  useEffect(() => {
    getData('gender') &&
      getData('weight') &&
      setMyBloodAlcoholLevel(getBac(consumption, getData('gender'), getData('weight')));
  }, [consumption]);

  const deleteGlass = () => {
    const newConsumption = [...consumption];
    newConsumption.splice(selectedDeleteIndexGlass, 1);
    setConsumption(newConsumption);
    setIsDeleteGlassOpen(false);
    setIsModal(false);
  };

  const onModalLayoutClick = () => {
    if (getData('weight')) {
      setIsModal(false);
    }
  };

  const handleReset = () => {
    resetData();
    setConsumption([]);
    setIsResetOpen(false);
    setIsProfileOpen(true);
  };

  return (
    <main className="min-h-screen px-4 pt-8 text-white">
      <div className="md:hidden">
        <Header className="mb-6" />
        <UseLevel bloodAlcoholLevel={myBloodAlcoholLevel} className="mb-6" />
        <Glasses
          consumption={consumption}
          setSelectedDeleteIndexGlass={setSelectedDeleteIndexGlass}
          setIsDeleteGlassOpen={setIsDeleteGlassOpen}
          className="mb-6"
        />
        <Footer
          onProfileClick={() => setIsProfileOpen(true)}
          onResetClick={() => setIsResetOpen(true)}
          className="pb-24"
        />
        <AddGlass onClick={() => setIsAddGlassOpen(true)} />
        <ModalLayout onClick={onModalLayoutClick} isModal={isModal} />
        <AddGlassModal
          closeModal={() => setIsModal(false)}
          isAddGlassOpen={isAddGlassOpen}
          setConsumption={setConsumption}
        />
        <DeleteGlassModal
          closeModal={() => setIsModal(false)}
          isDeleteGlassOpen={isDeleteGlassOpen}
          onButtonClick={() => deleteGlass()}
          selectedGlassDate={isDeleteGlassOpen && consumption[selectedDeleteIndexGlass].date}
        />
        <ProfileModal closeModal={() => setIsModal(false)} isProfileOpen={isProfileOpen} />
        <ResetModal
          closeModal={() => setIsModal(false)}
          isResetOpen={isResetOpen}
          onButtonClick={() => handleReset()}
        />
      </div>
      <ScreenTooWide />
      <ScrollRestoration />
    </main>
  );
}

export default App;
