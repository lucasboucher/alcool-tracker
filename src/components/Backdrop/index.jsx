import { useEffect } from 'react';
import { motion } from 'framer-motion';

function Backdrop({ onClick, children }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <motion.div
        onClick={onClick}
        className="fixed bottom-0 left-0 right-0 top-0 cursor-pointer bg-dark-1 bg-opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      ></motion.div>
      {children}
    </>
  );
}

export default Backdrop;
