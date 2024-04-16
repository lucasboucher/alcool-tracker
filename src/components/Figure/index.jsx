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
    <div className="relative flex w-full flex-col justify-center rounded bg-dark-2 px-2 py-4">
      {openHealthModal && (
        <button
          onClick={openHealthModal}
          className={`absolute right-1 top-1 rounded p-1 text-white transition duration-200 ease-out active:bg-dark-3 active:opacity-100 ${isHealthModalOpen && 'bg-dark-3 opacity-100'} ${bloodAlcoholLevel > 0.2 ? 'animate-pulse' : 'opacity-50'}`}
        >
          <InfoCircleIcon height={20} width={20} />
        </button>
      )}
      <motion.p className="mb-1 font-crucial text-4xl">{rounded}</motion.p>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
}

export default Figure;
