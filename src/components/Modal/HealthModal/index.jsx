import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';

import { alchoholHealth } from '../../../utils/consts';

import Modal from '..';

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
    <Modal onClick={closeModal}>
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
          className="relative min-h-full w-1 rounded-full bg-gradient-to-b from-green9 via-amber9 to-red9"
        >
          <motion.span
            className="absolute right-[-4px] bg-white font-bold italic"
            animate={controls}
          >
            {bloodAlcoholLevel.toFixed(2)}
          </motion.span>
        </div>
      </div>
    </Modal>
  );
}

export default HealthModal;
