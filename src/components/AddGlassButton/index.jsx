import { motion } from 'framer-motion';

import { PlusCircle as PlusCircleIcon } from 'iconoir-react';

function AddGlassButton({ onClick }) {
  return (
    <motion.button
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.2 },
      }}
      onClick={onClick}
      className="fixed bottom-4 left-4 right-4 z-10 flex justify-center rounded-lg bg-gradient-to-r from-main to-main-2 py-4 font-semibold uppercase text-dark-1 shadow-2xl"
    >
      <PlusCircleIcon className="mr-1" aria-hidden="true" role="presentation" />
      Ajouter un verre
    </motion.button>
  );
}

export default AddGlassButton;
