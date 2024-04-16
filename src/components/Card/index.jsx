import { cloneElement } from 'react';
import { motion } from 'framer-motion';

import { XmarkCircle as XMarkCircleIcon } from 'iconoir-react';

function Card({
  time,
  centilitersVolume,
  alcoholContent,
  icon,
  onCardClick,
  onDeleteClick,
  isSelected,
  isDeleteSelected,
}) {
  const iconWithProps = cloneElement(icon, { className: 'mb-1', height: 32, width: 32 });

  return (
    <motion.div
      onClick={onCardClick}
      className={`flex min-h-32 min-w-32 cursor-pointer flex-col rounded p-2 transition-colors duration-200 ease-out active:bg-dark-2 ${isSelected ? 'bg-dark-2' : 'bg-dark-3'}`}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.2 },
      }}
    >
      <div className="flex items-center justify-between text-sm font-medium">
        <div className="p-1">{time}</div>
        <button
          className={`rounded p-1 text-white transition duration-200 ease-out active:bg-dark-3 active:opacity-100 ${isDeleteSelected ? 'bg-dark-3 opacity-100' : 'opacity-50'}`}
          onClick={onDeleteClick}
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          <XMarkCircleIcon height={20} width={20} className="text-red" />
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
