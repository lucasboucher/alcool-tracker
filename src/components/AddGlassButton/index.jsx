import { PlusCircle as PlusCircleIcon } from 'iconoir-react';

function AddGlassButton({ onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="fixed bottom-4 left-4 right-4 flex justify-center rounded-lg bg-main py-4 font-semibold uppercase text-dark-1 active:bg-main-2"
      >
        <PlusCircleIcon className="mr-1" />
        Ajouter un verre
      </button>
    </>
  );
}

export default AddGlassButton;
