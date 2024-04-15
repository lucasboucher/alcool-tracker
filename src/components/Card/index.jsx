import { cloneElement } from 'react';
import { motion } from 'framer-motion';

import { Xmark as XmarkIcon } from 'iconoir-react';

function Card({ time, centilitersVolume, alcoholContent, onClick, icon, isSelected }) {
  const iconWithProps = cloneElement(icon, { className: 'mb-1', height: 32, width: 32 });

  return (
    <motion.button
      className={`card flex min-h-32 min-w-32 cursor-pointer flex-col rounded p-2 transition-colors duration-200 ease-out active:bg-dark-2 ${isSelected ? 'bg-dark-2' : 'bg-dark-3'}`}
      onClick={onClick}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex w-full justify-between text-sm font-medium">
        {time}
        <XmarkIcon
          height={24}
          width={24}
          className="card__delete text-red opacity-50 transition-opacity duration-200 ease-out"
        />
      </div>
      <div className="flex w-full grow flex-col items-center justify-center">
        {iconWithProps}
        <p>
          <span className="font-bold">{centilitersVolume}</span>cl à{' '}
          <span className="font-bold">{alcoholContent}</span>°
        </p>
      </div>
    </motion.button>
  );
}

export default Card;
