import Modal from '..';
import { Xmark as XmarkIcon } from 'iconoir-react';

function ResetModal({ closeModal, onSubmit }) {
  return (
    <Modal onClick={closeModal}>
      <button
        onClick={closeModal}
        aria-label="Fermer la modale"
        className="absolute right-1 top-1 cursor-pointer p-3 text-red opacity-50 transition-opacity duration-200 ease-out active:opacity-100"
      >
        <XmarkIcon role="presentation" />
      </button>
      <h2 className="mb-3 font-crucial text-xl" id="modalLabel">
        Réinitialiser l'application
      </h2>
      <p className="mb-4">
        Voulez-vous <span className="text-red">supprimer</span> toutes les données ?
      </p>
      <button
        onClick={onSubmit}
        className="flex w-full justify-center rounded-lg bg-dark-1 py-4 font-semibold uppercase text-white transition-colors duration-200 ease-out active:bg-dark-3"
      >
        Valider
      </button>
    </Modal>
  );
}

export default ResetModal;
