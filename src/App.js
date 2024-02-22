import { useEffect, useState } from 'react';

import UseLevel from './sections/UseLevel';
import Glasses from './sections/Glasses';
import Header from './sections/Header';
import Footer from './sections/Footer';
import ScreenTooWide from './sections/ScreenTooWide';
import LearnMore from './sections/LearnMore';

import AddGlass from './components/AddGlass';
import ModalLayout from './components/Modal';
import AddGlassModal from './components/Modal/AddGlassModal';
import DeleteGlassModal from './components/Modal/DeleteGlassModal';
import ProfileModal from './components/Modal/ProfileModal';

import { getData, setData } from './utils/helpers';

function App() {
  const [consumption, setConsumption] = useState(getData('consumption') || []);
  const [myBloodAlcoholLevel, setMyBloodAlcoholLevel] = useState(0);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isAddGlassOpen, setIsAddGlassOpen] = useState(false);
  const [isDeleteGlassOpen, setIsDeleteGlassOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [selectedDeleteIndexGlass, setSelectedDeleteIndexGlass] = useState(null);

  useEffect(() => {
    if (!isModal) {
      setIsAddGlassOpen(false);
      setIsDeleteGlassOpen(false);
      setIsProfileOpen(false);
    }
  }, [isModal]);

  useEffect(() => {
    if (isAddGlassOpen || isDeleteGlassOpen || isProfileOpen) {
      setIsModal(true);
    }
  }, [isAddGlassOpen, isDeleteGlassOpen, isProfileOpen]);

  useEffect(() => {
    if (!getData('weight')) {
      setIsProfileOpen(true);
    }
  }, []);

  useEffect(() => {
    setData('consumption', consumption);
  }, [consumption]);

  // test for blood alcohol level state
  useEffect(() => {
    setMyBloodAlcoholLevel(consumption.length * 0.15);
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

  return (
    <main className="min-h-screen px-4 pt-8 text-white">
      <div className="md:hidden">
        <Header
          className="mb-6"
          isLearnMoreOpen={isLearnMoreOpen}
          setIsLearnMoreOpen={setIsLearnMoreOpen}
        />
        {!isLearnMoreOpen ? (
          <>
            <UseLevel bloodAlcoholLevel={myBloodAlcoholLevel} className="mb-6" />
            <Glasses
              consumption={consumption}
              setSelectedDeleteIndexGlass={setSelectedDeleteIndexGlass}
              setIsDeleteGlassOpen={setIsDeleteGlassOpen}
              className="mb-6"
            />
          </>
        ) : (
          <LearnMore className="mb-8" />
        )}
        <Footer onProfileClick={() => setIsProfileOpen(true)} className="pb-20" />
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
          selectedGlassTime={isDeleteGlassOpen && consumption[selectedDeleteIndexGlass].time}
        />
        <ProfileModal closeModal={() => setIsModal(false)} isProfileOpen={isProfileOpen} />
      </div>
      <ScreenTooWide />
    </main>
  );
}

export default App;
