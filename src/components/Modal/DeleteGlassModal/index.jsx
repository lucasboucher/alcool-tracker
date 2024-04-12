import { formatTime } from '../../../utils/helpers';

import { Xmark as XmarkIcon } from 'iconoir-react';
import Backdrop from '../../Backdrop';

function DeleteGlassModal({ closeModal, onSubmit, selectedGlassDate }) {
  const selectedGlassStringDate = formatTime(selectedGlassDate);

  return (
    <Backdrop onClick={closeModal}>
      <div
        className="fixed bottom-0 left-0 right-0 z-10 cursor-auto rounded-t-2xl bg-white px-4 py-8 text-dark-1"
        onClick={(e) => e.stopPropagation()}
      >
        <XmarkIcon
          className="absolute right-4 top-4 cursor-pointer text-red opacity-50 transition-opacity duration-200 ease-out active:opacity-100"
          onClick={closeModal}
        />
        <h2 className="mb-3 font-crucial text-xl">Supprimer un verre</h2>
        <p className="mb-4">
          Voulez-vous <span className="text-red">supprimer</span> ce verre bu à{' '}
          <span className="font-bold">{selectedGlassStringDate}</span> ?
        </p>
        <button
          onClick={onSubmit}
          className="flex w-full justify-center rounded-lg bg-dark-1 py-4 font-semibold uppercase text-white active:bg-dark-3"
        >
          Valider
        </button>
      </div>
    </Backdrop>
  );
}

export default DeleteGlassModal;
