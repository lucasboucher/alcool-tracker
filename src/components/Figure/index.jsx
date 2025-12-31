import { useEffect } from 'react';
import { useMotionValue, useTransform, animate, motion } from 'framer-motion';

import { InfoCircle as InfoCircleIcon } from 'iconoir-react';

function Figure({ number, text, openHealthModal, isHealthModalOpen, bloodAlcoholLevel }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return latest.toFixed(2);
  });

  useEffect(() => {
    animate(count, number, { duration: 2, ease: 'easeOut' });
  }, [count, number]);

  return (
    <div className="relative flex w-full flex-col justify-center rounded bg-amber2 px-2 py-4">
      {openHealthModal && (
        <button
          onClick={openHealthModal}
          aria-label="Mon état de santé"
          className={`absolute right-1 top-1 rounded p-3 text-amber11 transition duration-200 ease-out active:animate-none active:bg-amber4 ${isHealthModalOpen ? 'bg-amber5' : 'bg-amber3'}`}
        >
          <InfoCircleIcon
            role="presentation"
            className={bloodAlcoholLevel > 0.2 ? 'animate-pulse' : ''}
          />
        </button>
      )}
      <motion.p className="mb-1 font-crucial text-4xl">{rounded}</motion.p>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
}

export default Figure;
