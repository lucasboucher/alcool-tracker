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
        className="flex w-full justify-center rounded-lg bg-light-amber3 py-4 font-semibold uppercase text-light-amber12 transition-colors duration-200 ease-out active:bg-light-amber4"
      >
        Valider
      </button>
    </Modal>
  );
}

export default DeleteGlassModal;
