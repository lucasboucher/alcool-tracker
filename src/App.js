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

function App() {
  const [myConsumption, setMyConsumption] = useState(consumption);
  const [myBloodAlcoholLevel, setMyBloodAlcoholLevel] = useState(bloodAlcoholLevel);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isAddGlassOpen, setIsAddGlassOpen] = useState(false);

  useEffect(() => {
    if (!isModal) {
      setIsAddGlassOpen(false);
    }
  }, [isModal]);

  useEffect(() => {
    if (isAddGlassOpen) {
      setIsModal(true);
    }
  }, [isAddGlassOpen]);

  // test for blood alcohol level state
  useEffect(() => {
    setMyBloodAlcoholLevel(myConsumption.length * 0.15);
  }, [myConsumption]);

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
              setMyConsumption={setMyConsumption}
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
      </div>
      <div className="hidden min-h-screen flex-col items-center justify-center px-16 md:flex">
        <ScreenTooWide />
      </div>
    </main>
  );
}

export default App;
