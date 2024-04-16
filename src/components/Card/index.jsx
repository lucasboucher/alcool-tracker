import { cloneElement } from 'react';
import { motion } from 'framer-motion';

import { Xmark as XmarkIcon } from 'iconoir-react';

function Card({ time, centilitersVolume, alcoholContent, onDeleteClick, icon, isSelected }) {
  const iconWithProps = cloneElement(icon, { className: 'mb-1', height: 32, width: 32 });

  return (
    <motion.div
      className={`flex min-h-32 min-w-32 cursor-pointer flex-col rounded p-2 transition-colors duration-200 ease-out active:bg-dark-2 ${isSelected ? 'bg-dark-2' : 'bg-dark-3'}`}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex items-center justify-between text-sm font-medium">
        <div className="p-1">{time}</div>
        <button
          className={`group rounded p-1 text-white transition duration-200 ease-out active:bg-dark-3 active:opacity-100 ${false && 'bg-dark-3 opacity-100'}`}
          onClick={onDeleteClick}
        >
          <XmarkIcon
            height={20}
            width={20}
            className="text-red opacity-50 transition-opacity duration-200 ease-out group-active:opacity-100"
          />
        </button>
      </div>
      <div className="flex grow flex-col items-center justify-center">
        {iconWithProps}
        <p>
          <span className="font-bold">{centilitersVolume}</span>cl à{' '}
          <span className="font-bold">{alcoholContent}</span>°
        </p>
      </div>
    </motion.div>
  );
}

export default Card;
