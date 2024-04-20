import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import { alchoholHealth, modalVariantsAnimation } from '../../../utils/consts';

import Backdrop from '../../Backdrop';
import { Xmark as XmarkIcon } from 'iconoir-react';

function HealthModal({ closeModal, bloodAlcoholLevel }) {
  const levelRef = useRef(null);
  const controls = useAnimation();

  let bacPercent = 0.01 + (0.89 - 0.01) * (bloodAlcoholLevel / 3);
  bacPercent = Math.min(bacPercent, 0.89);
  bacPercent = Math.max(bacPercent, 0.01);

  let state;
  if (bloodAlcoholLevel < 0.2) {
    state = 0;
  } else if (bloodAlcoholLevel >= 0.2 && bloodAlcoholLevel < 0.5) {
    state = 1;
  } else if (bloodAlcoholLevel >= 0.5 && bloodAlcoholLevel < 1) {
    state = 2;
  } else if (bloodAlcoholLevel >= 1 && bloodAlcoholLevel < 2) {
    state = 3;
  } else if (bloodAlcoholLevel >= 2 && bloodAlcoholLevel < 3) {
    state = 4;
  } else {
    state = 5;
  }
  const health = alchoholHealth[state];

  useEffect(() => {
    if (levelRef.current) {
      const levelHeight = levelRef.current.getBoundingClientRect().height;
      const targetY = levelHeight * bacPercent;

      controls.start({
        y: targetY,
        transition: { delay: 0.4, duration: 0.4, ease: 'easeOut' },
      });
    }
  }, [controls, bacPercent]);

  return (
    <Backdrop onClick={closeModal}>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-10 rounded-t-2xl bg-white px-4 py-8 text-dark-1"
        variants={modalVariantsAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          onClick={closeModal}
          aria-label="Fermer la modale"
          className="absolute right-1 top-1 cursor-pointer p-3 text-red opacity-50 transition-opacity duration-200 ease-out active:opacity-100"
        >
          <XmarkIcon role="presentation" />
        </button>
        <h2 className="mb-3 font-crucial text-xl" id="modalLabel">
          Mon état de santé
        </h2>
        <div className="flex gap-10">
          <div>
            <h3 className="font-bold">{health.title}</h3>
            <ul className="list-square pl-5">
              {health.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div
            ref={levelRef}
            className="relative min-h-full w-1 rounded-full bg-gradient-to-b from-green via-main to-red"
          >
            <motion.span
              className="absolute right-[-4px] bg-white font-bold italic"
              animate={controls}
            >
              {bloodAlcoholLevel.toFixed(2)}
            </motion.span>
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default HealthModal;
