function Modal({ isModal, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${!isModal && 'hidden'} fixed bottom-0 left-0 right-0 top-0 z-10 bg-dark-1 opacity-80`}
    ></div>
  );
}

export default Modal;
