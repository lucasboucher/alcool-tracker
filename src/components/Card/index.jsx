import { cloneElement } from 'react';
import { motion } from 'motion/react';

import { Xmark as XMarkIcon } from 'iconoir-react';

function Card({
  time,
  centilitersVolume,
  alcoholContent,
  icon,
  onCardClick,
  onDeleteClick,
  isSelected,
}) {
  const iconWithProps = cloneElement(icon, {
    className: 'mb-1',
    height: 32,
    width: 32,
    role: 'img',
  });

  return (
    <motion.div
      className={`relative cursor-pointer rounded transition-colors duration-200 ease-out active:bg-amber4 ${isSelected ? 'bg-amber4' : 'bg-amber3'}`}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.2 },
      }}
      tabIndex={-1}
    >
      <button
        onClick={onCardClick}
        className="flex h-32 min-w-32 flex-col items-center justify-end pb-4"
      >
        {iconWithProps}
        <span>
          <span className="font-bold">{centilitersVolume}</span>cl à{' '}
          <span className="font-bold">{alcoholContent}</span>°
        </span>
      </button>
      <div className="pointer-events-none absolute top-0 flex w-full items-center justify-between">
        <div className="ml-3 text-sm font-medium">{time}</div>
        <button
          onClick={onDeleteClick}
          aria-label="Supprimer ce verre"
          className="group pointer-events-auto rounded p-3 text-white transition duration-200 ease-out"
          onPointerDownCapture={(e) => e.stopPropagation()}
        >
          <XMarkIcon className="text-amber11 group-active:text-amber12" role="presentation" />
        </button>
      </div>
    </motion.div>
  );
}

export default Card;
