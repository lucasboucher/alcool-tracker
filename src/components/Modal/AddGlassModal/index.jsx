import { getNow } from '../../../utils/helpers';

function AddGlassModal({ isAddGlassOpen }) {
  const now = getNow();

  return (
    <div
      className={`${!isAddGlassOpen && 'hidden'} fixed bottom-0 left-0 right-0 z-10 rounded-t-2xl bg-white px-4 py-8 text-dark-1`}
    >
      <h2 className="mb-3 font-crucial text-xl">Ajouter un verre</h2>
      <div className="mb-2 flex">
        <div className="mr-2 w-full">
          <label className="mb-1 text-sm font-semibold uppercase" htmlFor="volume">
            Volume
          </label>
          <input
            className="h-12 w-full border pl-2"
            type="number"
            id="volume"
            inputMode="numeric"
            defaultValue={0}
          />
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold uppercase" htmlFor="time">
            Heure
          </label>
          <input className="h-12 w-24 border pl-2" type="time" id="time" defaultValue={now} />
        </div>
      </div>
      <div>
        <label className="mb-1 text-sm font-semibold uppercase" htmlFor="alcoholContent">
          Teneur
        </label>
        <input
          className="h-12 w-full border pl-2"
          type="number"
          id="alcoholContent"
          inputMode="decimal"
          defaultValue={0}
        />
      </div>
    </div>
  );
}

export default AddGlassModal;
