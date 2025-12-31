import { formatTime } from '../../../utils/helpers';

import Modal from '..';

function DeleteGlassModal({ closeModal, onSubmit, selectedGlassDate }) {
  const selectedGlassStringDate = formatTime(selectedGlassDate);

  return (
    <Modal onClick={closeModal}>
      <h2 className="mb-3 font-crucial text-xl" id="modalLabel">
        Supprimer un verre
      </h2>
      <p className="mb-4">
        Voulez-vous <span className="text-light-red11">supprimer</span> ce verre bu à{' '}
        <span className="font-bold">{selectedGlassStringDate}</span> ?
      </p>
      <button
        onClick={onSubmit}
        className="bg-light-amber3 text-light-amber11 active:bg-light-amber4 flex w-full justify-center rounded-lg py-4 font-semibold uppercase transition-colors duration-200 ease-out"
      >
        Valider
      </button>
    </Modal>
  );
}

export default DeleteGlassModal;
