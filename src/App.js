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

import { bloodAlcoholLevel } from './utils/consts';
import { consumption } from './utils/consts';
import DeleteGlassModal from './components/Modal/DeleteGlassModal';

function App() {
  const [myConsumption, setMyConsumption] = useState(consumption);
  const [myBloodAlcoholLevel, setMyBloodAlcoholLevel] = useState(bloodAlcoholLevel);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isAddGlassOpen, setIsAddGlassOpen] = useState(false);
  const [isDeleteGlassOpen, setIsDeleteGlassOpen] = useState(false);
  const [selectedDeleteIndexGlass, setSelectedDeleteIndexGlass] = useState(null);

  useEffect(() => {
    if (!isModal) {
      setIsAddGlassOpen(false);
      setIsDeleteGlassOpen(false);
    }
  }, [isModal]);

  useEffect(() => {
    if (isAddGlassOpen || isDeleteGlassOpen) {
      setIsModal(true);
    }
  }, [isAddGlassOpen, isDeleteGlassOpen]);

  // test for blood alcohol level state
  useEffect(() => {
    setMyBloodAlcoholLevel(myConsumption.length * 0.15);
  }, [myConsumption]);

  const deleteGlass = () => {
    const newConsumption = [...myConsumption];
    newConsumption.splice(selectedDeleteIndexGlass, 1);
    console.log(selectedDeleteIndexGlass);
    setMyConsumption(newConsumption);
    setIsDeleteGlassOpen(false);
    setIsModal(false);
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
              myConsumption={myConsumption}
              setSelectedDeleteIndexGlass={setSelectedDeleteIndexGlass}
              setIsDeleteGlassOpen={setIsDeleteGlassOpen}
              className="mb-6"
            />
          </>
        ) : (
          <LearnMore className="mb-8" />
        )}
        <Footer className="pb-20" />
        <AddGlass onClick={() => setIsAddGlassOpen(true)} />
        <ModalLayout onClick={() => setIsModal(false)} isModal={isModal} />
        <AddGlassModal
          closeModal={() => setIsModal(false)}
          isAddGlassOpen={isAddGlassOpen}
          setMyConsumption={setMyConsumption}
        />
        <DeleteGlassModal
          closeModal={() => setIsModal(false)}
          isDeleteGlassOpen={isDeleteGlassOpen}
          onButtonClick={() => deleteGlass()}
          selectedGlassTime={isDeleteGlassOpen && myConsumption[selectedDeleteIndexGlass].time}
        />
      </div>
      <ScreenTooWide />
    </main>
  );
}

export default App;
