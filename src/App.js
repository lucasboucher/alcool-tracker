import { useEffect, useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import UseLevel from './sections/UseLevel';
import Glasses from './sections/Glasses';
import Header from './sections/Header';
import Navigation from './sections/Navigation';
import ViewportTooWide from './sections/ViewportTooWide';

import AddGlassButton from './components/AddGlassButton';
import AddGlassModal from './components/Modal/AddGlassModal';
import DeleteGlassModal from './components/Modal/DeleteGlassModal';
import ProfileModal from './components/Modal/ProfileModal';
import ResetModal from './components/Modal/ResetModal';
import HealthModal from './components/Modal/HealthModal';

import { getData, setData, resetData, getBac } from './utils/helpers';

function App() {
  const [consumption, setConsumption] = useState(getData('consumption') || []);
  const [myBloodAlcoholLevel, setMyBloodAlcoholLevel] = useState(0);
  const [selectedGlassIndex, setSelectedGlassIndex] = useState(null);
  const [isAddGlassModalOpen, setIsAddGlassModalOpen] = useState(false);
  const [isDeleteGlassModalOpen, setIsDeleteGlassModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isHealthModalOpen, setIsHealthModalOpen] = useState(false);

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
    newConsumption.splice(selectedGlassIndex, 1);
    setConsumption(newConsumption);
    setSelectedGlassIndex(null);
    setIsDeleteGlassModalOpen(false);
  };

  const handleReset = () => {
    resetData();
    setMyBloodAlcoholLevel(0);
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

  useEffect(() => {
    const refreshedConsumption = getData('consumption');
    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    refreshedConsumption.forEach((glass, index) => {
      const glassDate = new Date(glass.date);
      if (glassDate <= yesterdayDate) {
        refreshedConsumption.splice(index, 1);
        setConsumption(refreshedConsumption);
      }
    });
  }, []);

  return (
    <main className="min-h-screen px-4 pt-8 text-white">
      <div className="md:hidden">
        <Header className="mb-6" />
        <UseLevel
          bloodAlcoholLevel={myBloodAlcoholLevel}
          openHealthModal={() => setIsHealthModalOpen(true)}
          isHealthModalOpen={isHealthModalOpen}
          className="mb-6"
        />
        <Glasses
          consumption={consumption}
          selectedGlassIndex={selectedGlassIndex}
          setSelectedGlassIndex={setSelectedGlassIndex}
          openDeleteGlassModal={() => setIsDeleteGlassModalOpen(true)}
          openAddGlassModal={() => setIsAddGlassModalOpen(true)}
          isAddGlassModalOpen={isAddGlassModalOpen}
          className="mb-12"
        />
        <Navigation
          onProfileButtonClick={() => setIsProfileModalOpen(true)}
          onResetButtonClick={() => setIsResetModalOpen(true)}
          className="pb-24"
        />
        <AddGlassButton onClick={() => setIsAddGlassModalOpen(true)} />
        <AnimatePresence>
          {isAddGlassModalOpen && (
            <AddGlassModal
              closeModal={() => setIsAddGlassModalOpen(false)}
              setConsumption={setConsumption}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isDeleteGlassModalOpen && (
            <DeleteGlassModal
              closeModal={() => {
                setIsDeleteGlassModalOpen(false);
                setSelectedGlassIndex(null);
              }}
              onSubmit={() => deleteGlass()}
              selectedGlassDate={consumption[selectedGlassIndex].date}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isProfileModalOpen && (
            <ProfileModal closeModal={() => isProfileDefined() && setIsProfileModalOpen(false)} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isResetModalOpen && (
            <ResetModal
              closeModal={() => setIsResetModalOpen(false)}
              onSubmit={() => handleReset()}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isHealthModalOpen && (
            <HealthModal
              closeModal={() => setIsHealthModalOpen(false)}
              bloodAlcoholLevel={myBloodAlcoholLevel}
            />
          )}
        </AnimatePresence>
      </div>
      <ViewportTooWide />
      <ScrollRestoration />
    </main>
  );
}

export default App;
