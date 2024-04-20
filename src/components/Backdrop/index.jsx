import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function Backdrop({ onClick, children }) {
  const modalRef = useRef();

  useEffect(() => {
    const preventScroll = (e) => e.preventDefault();

    document.body.style.overflow = 'hidden';
    document.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  useEffect(() => {
    const focusableModalElements = modalRef.current.querySelectorAll(
      'button, input[type="radio"], input[type="number"], input[type="checkbox"], input[type="time"]',
    );
    const firstElement = focusableModalElements[0];
    const lastElement = focusableModalElements[focusableModalElements.length - 1];

    firstElement.focus();

    const trapFocus = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        return;
      }

      if (!modalRef.current.contains(document.activeElement)) {
        firstElement.focus();
        e.preventDefault();
      } else if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
  }, []);

  useEffect(() => {
    const escapeModal = (e) => {
      if (e.key !== 'Escape') {
        return;
      }

      onClick();
    };

    document.addEventListener('keydown', escapeModal);
    return () => document.removeEventListener('keydown', escapeModal);
  }, [onClick]);

  return (
    <>
      <motion.div
        onClick={onClick}
        className="fixed bottom-0 left-0 right-0 top-0 z-10 cursor-pointer bg-dark-1 bg-opacity-80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      ></motion.div>
      <aside ref={modalRef} aria-labelledby="modalLabel">
        {children}
      </aside>
    </>
  );
}

export default Backdrop;
