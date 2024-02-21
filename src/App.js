import { useEffect, useState } from 'react';

import UseLevel from './sections/UseLevel';
import Glasses from './sections/Glasses';
import Header from './sections/Header';
import Footer from './sections/Footer';
import ScreenTooWide from './sections/ScreenTooWide';
import LearnMore from './sections/LearnMore';

import AddGlass from './components/AddGlass';

import { bloodAlcoholLevel } from './utils/consts';
import { consumption } from './utils/consts';

function App() {
  const [myConsumption, setMyConsumption] = useState(consumption);
  const [myBloodAlcoholLevel, setMyBloodAlcoholLevel] = useState(bloodAlcoholLevel);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  // test for blood alcohol level state
  useEffect(() => {
    setMyBloodAlcoholLevel((currentValue) => currentValue - bloodAlcoholLevel / 7);
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
          <LearnMore className="mb-6" />
        )}
        <Footer className="pb-20" />
        <AddGlass />
      </div>
      <div className="hidden min-h-screen flex-col items-center justify-center px-16 md:flex">
        <ScreenTooWide />
      </div>
    </main>
  );
}

export default App;
