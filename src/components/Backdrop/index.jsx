function Backdrop({ onClick, children }) {
  return (
    <div
      onClick={onClick}
      className="fixed bottom-0 left-0 right-0 top-0 z-10 cursor-pointer bg-dark-1 bg-opacity-80"
    >
      {children}
    </div>
  );
}

export default Backdrop;
