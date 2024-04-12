import { motion } from 'framer-motion';

function Backdrop({ onClick, children }) {
  return (
    <motion.div
      onClick={onClick}
      className="fixed bottom-0 left-0 right-0 top-0 z-10 cursor-pointer bg-dark-1 bg-opacity-80"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
