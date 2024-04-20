import { motion } from 'framer-motion';

import { formatTime } from '../../../utils/helpers';
import { modalVariantsAnimation } from '../../../utils/consts';

import Backdrop from '../../Backdrop';
import { Xmark as XmarkIcon } from 'iconoir-react';

function DeleteGlassModal({ closeModal, onSubmit, selectedGlassDate }) {
  const selectedGlassStringDate = formatTime(selectedGlassDate);

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
          Supprimer un verre
        </h2>
        <p className="mb-4">
          Voulez-vous <span className="text-red">supprimer</span> ce verre bu à{' '}
          <span className="font-bold">{selectedGlassStringDate}</span> ?
        </p>
        <button
          onClick={onSubmit}
          className="flex w-full justify-center rounded-lg bg-dark-1 py-4 font-semibold uppercase text-white transition-colors duration-200 ease-out active:bg-dark-3"
        >
          Valider
        </button>
      </motion.div>
    </Backdrop>
  );
}

export default DeleteGlassModal;
