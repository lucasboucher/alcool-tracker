import { motion } from 'motion/react';

import { PlusCircle as PlusCircleIcon } from 'iconoir-react';

function AddGlassButton({ onClick }) {
  return (
    <div>
      <motion.button
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.2 },
        }}
        onClick={onClick}
        className="fixed bottom-4 left-4 right-4 z-10 flex justify-center rounded-lg bg-light-amber9 py-4 font-semibold uppercase text-light-sand12 shadow-2xl transition-colors duration-200 ease-out active:bg-light-amber10"
      >
        <PlusCircleIcon className="mr-1" aria-hidden="true" role="presentation" />
        Ajouter un verre
      </motion.button>
      <div className="fixed right-0 top-[calc(100%-4px)] z-10 aspect-square w-screen bg-amber1" />
    </div>
  );
}

export default AddGlassButton;
