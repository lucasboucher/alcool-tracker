function AddGlassModal({ isAddGlassOpen }) {
  return (
    <div
      className={`${!isAddGlassOpen && 'hidden'} fixed bottom-0 left-0 right-0 z-10 rounded-t-2xl bg-white px-4 py-8 text-dark-1`}
    >
      <h2 className="mb-3 font-crucial text-xl">Ajouter un verre</h2>
      <div className="mb-2">
        <label className="mb-1 text-sm font-semibold uppercase" htmlFor="glass">
          Volume
        </label>
        <input className="h-12 w-full border" />
      </div>
      <div>
        <label className="mb-1 text-sm font-semibold uppercase" htmlFor="glass">
          Teneur
        </label>
        <input className="h-12 w-full border" />
      </div>
    </div>
  );
}

export default AddGlassModal;
