import { useEffect, useState, useMemo } from 'react';
import { AnimatePresence } from 'motion/react';

import UseLevel from './sections/UseLevel';
import Glasses from './sections/Glasses';
import Header from './sections/Header';
import Navigation from './sections/Navigation';
import ViewportTooWide from './sections/ViewportTooWide';

import AddGlassButton from './components/AddGlassButton';
import EditGlassModal from './components/Modal/EditGlassModal';
import DeleteGlassModal from './components/Modal/DeleteGlassModal';
import ProfileModal from './components/Modal/ProfileModal';
import ResetModal from './components/Modal/ResetModal';
import HealthModal from './components/Modal/HealthModal';

import { getData, setData, resetData, getBac } from './utils/helpers';

function App() {
  const [consumption, setConsumption] = useState(getData('consumption') || []);
  const [selectedGlassIndex, setSelectedGlassIndex] = useState(null);
  const [isEditGlassModalOpen, setIsEditGlassModalOpen] = useState(false);
  const [isDeleteGlassModalOpen, setIsDeleteGlassModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(() => {
    const isProfileDefined = () => {
      if (getData('weight') && getData('gender')) {
        return true;
      } else {
        return false;
      }
    };
    return !isProfileDefined();
  });
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isHealthModalOpen, setIsHealthModalOpen] = useState(false);

  const isProfileDefined = () => {
    if (getData('weight') && getData('gender')) {
      return true;
    } else {
      return false;
    }
  };

  const myBloodAlcoholLevel = useMemo(() => {
    if (isProfileDefined()) {
      return getBac(consumption, getData('gender'), getData('weight'));
    }
    return 0;
  }, [consumption]);

  useEffect(() => {
    setData('consumption', consumption);
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
    setConsumption([]);
    setIsResetModalOpen(false);
    setIsProfileModalOpen(true);
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
    <div className="min-h-screen px-4 pt-8">
      <nav aria-label="Navigation d'accessibilité">
        <a href="#main-content" className="sr-only inline-block min-h-6 min-w-6 focus:not-sr-only">
          Aller au contenu principal
        </a>
      </nav>
      <main id="main-content">
        <div className="md:hidden">
          <AddGlassButton onClick={() => setIsEditGlassModalOpen(true)} />
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
            openEditGlassModal={() => setIsEditGlassModalOpen(true)}
            openDeleteGlassModal={() => setIsDeleteGlassModalOpen(true)}
            isEditGlassModalOpen={isEditGlassModalOpen}
            className="mb-12"
          />
          <Navigation
            onProfileButtonClick={() => setIsProfileModalOpen(true)}
            onResetButtonClick={() => setIsResetModalOpen(true)}
            className="pb-24"
          />
          <AnimatePresence>
            {isEditGlassModalOpen && (
              <EditGlassModal
                closeModal={() => {
                  setIsEditGlassModalOpen(false);
                  setSelectedGlassIndex(null);
                }}
                setConsumption={setConsumption}
                selectedGlassIndex={selectedGlassIndex}
                onDeleteClick={(e) => {
                  e.preventDefault();
                  setIsEditGlassModalOpen(false);
                  setIsDeleteGlassModalOpen(true);
                }}
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
      </main>
    </div>
  );
}

export default App;
