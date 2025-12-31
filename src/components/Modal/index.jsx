import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

import { Xmark as XmarkIcon } from 'iconoir-react';

const modalVariantsAnimation = {
  hidden: {
    y: '100%',
  },
  visible: {
    y: '0',
    transition: {
      duration: 0.4,
      type: 'spring',
      bounce: 0,
    },
  },
  exit: {
    y: '100%',
    transition: {
      duration: 0.4,
      type: 'spring',
      bounce: 0,
    },
  },
};

function Modal({ onClick, children, closable = true }) {
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

    if (firstElement) {
      firstElement.focus();
    }

    const trapFocus = (e) => {
      if (e.key !== 'Tab') {
        return;
      }

      if (!firstElement || !lastElement) {
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
        className="fixed bottom-0 left-0 right-0 top-0 z-10 cursor-pointer bg-blackA6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      />
      <aside ref={modalRef} aria-labelledby="modalLabel">
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-10 rounded-t-2xl bg-light-sand1 px-4 py-8 text-light-sand12"
          variants={modalVariantsAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {closable && (
            <button
              onClick={onClick}
              aria-label="Fermer la modale"
              className="absolute right-1 top-1 cursor-pointer p-3 text-light-red11 transition-colors duration-200 ease-out active:text-light-red12"
            >
              <XmarkIcon role="presentation" />
            </button>
          )}
          {children}
        </motion.div>
      </aside>
    </>
  );
}

export default Modal;
