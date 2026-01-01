import { AnimatePresence } from 'motion/react';
import { useRegisterSW } from 'virtual:pwa-register/react';

import Modal from '..';

function UpdateAppModal() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(_r) {
      console.log('Service Worker registered');
    },
    onRegisterError(error) {
      console.log('Error while registering the Service Worker', error);
    },
  });

  const close = () => {
    setNeedRefresh(false);
  };

  const handleUpdate = () => {
    updateServiceWorker(true);
  };

  return (
    <AnimatePresence>
      {needRefresh && (
        <Modal onClick={close}>
          <h2 className="mb-3 font-crucial text-xl" id="modalLabel">
            Mise à jour disponible
          </h2>
          <p className="mb-4">Une nouvelle version de l'application est disponible.</p>
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="flex-1 rounded-lg bg-light-amber3 py-4 font-semibold uppercase text-light-amber12 transition-colors duration-200 ease-out active:bg-light-amber4"
            >
              Mettre à jour
            </button>
            <button
              onClick={close}
              className="flex-1 rounded-lg border border-light-amber6 py-4 font-semibold uppercase text-light-amber11 transition-colors duration-200 ease-out active:bg-light-amber4"
            >
              Plus tard
            </button>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
}

export default UpdateAppModal;
