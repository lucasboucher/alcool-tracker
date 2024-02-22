import { Xmark as XmarkIcon } from 'iconoir-react';

function ProfileModal({ closeModal, isProfileOpen }) {
  return (
    <div
      className={`${!isProfileOpen && 'hidden'} fixed bottom-0 left-0 right-0 z-10 rounded-t-2xl bg-white px-4 py-8 text-dark-1`}
    >
      <XmarkIcon
        className="absolute right-4 top-4 text-red opacity-50 transition-opacity active:opacity-100"
        onClick={closeModal}
      />
      <h2 className="mb-3 font-crucial text-xl">Modifier mon profil</h2>
      <p className="mb-2">
        Il est obligatoire de renseigner votre profil avec votre poids pour calculer le taux ou si
        vous êtes un permis probatoire pour évaluer votre capacité à conduire.
      </p>
      <div className="mb-3">
        <label className="mb-1 text-sm font-semibold uppercase" htmlFor="alcoholContent">
          Mon poids
        </label>
        <div className="relative flex items-center">
          <input
            className="h-12 w-full border pl-2"
            type="number"
            id="alcoholContent"
            inputMode="decimal"
            placeholder="0"
          />
          <span className="bg-grey absolute right-2 rounded px-3 py-1 text-dark-1">kg</span>
        </div>
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1 text-sm font-semibold uppercase" htmlFor="temporaryLicense">
          Mon permis
        </label>
        <div>
          <input type="checkbox" id="temporaryLicense" />
          <label className="ml-1" htmlFor="temporaryLicense">
            Je suis permis probatoire
          </label>
        </div>
      </div>
      <button className="flex w-full justify-center rounded-lg bg-dark-1 py-4 font-semibold uppercase text-white active:bg-dark-3">
        Valider
      </button>
    </div>
  );
}

export default ProfileModal;
