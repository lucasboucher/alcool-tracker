import { getNow } from '../../../utils/helpers';

import { Xmark as XmarkIcon } from 'iconoir-react';

function AddGlassModal({ onClose, isAddGlassOpen }) {
  const now = getNow();

  return (
    <div
      className={`${!isAddGlassOpen && 'hidden'} fixed bottom-0 left-0 right-0 z-10 rounded-t-2xl bg-white px-4 py-8 text-dark-1`}
    >
      <XmarkIcon
        className="absolute right-4 top-4 text-red opacity-50 transition-opacity active:opacity-100"
        onClick={onClose}
      />
      <h2 className="mb-3 font-crucial text-xl">Ajouter un verre</h2>
      <div className="mb-2 flex">
        <div className="mr-2 w-full">
          <label className="mb-1 text-sm font-semibold uppercase" htmlFor="volume">
            Volume
          </label>
          <div className="relative flex items-center">
            <input
              className="h-12 w-full border pl-2"
              type="number"
              id="volume"
              inputMode="numeric"
              placeholder="0"
            />
            <span className="bg-grey absolute right-2 rounded px-3 py-1 text-dark-1">cl</span>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold uppercase" htmlFor="time">
            Heure
          </label>
          <input className="h-12 w-24 border pl-2" type="time" id="time" defaultValue={now} />
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-1 text-sm font-semibold uppercase" htmlFor="alcoholContent">
          Teneur
        </label>
        <div className="relative flex items-center">
          <input
            className="h-12 w-full border pl-2"
            type="number"
            id="alcoholContent"
            inputMode="decimal"
            placeholder="0"
          />
          <span className="bg-grey absolute right-2 rounded px-3 py-1 text-dark-1">°</span>
        </div>
      </div>
      <button className="flex w-full justify-center rounded-lg bg-dark-1 py-4 font-semibold uppercase text-white active:bg-dark-3">
        Valider
      </button>
    </div>
  );
}

export default AddGlassModal;
