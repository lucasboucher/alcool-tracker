import { PlusCircle as PlusCircleIcon } from 'iconoir-react';

function AddGlass({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="active:bg-main-2 fixed bottom-4 left-4 right-4 flex justify-center rounded-lg bg-main py-4 font-semibold uppercase text-dark-1"
      >
        <PlusCircleIcon className="mr-1" />
        Ajouter un verre
      </button>
    </>
  );
}

export default AddGlass;
