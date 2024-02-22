import React, { useState } from 'react';

import { Xmark as XmarkIcon } from 'iconoir-react';
import { getData, setData } from '../../../utils/helpers';

function ProfileModal({ closeModal, isProfileOpen }) {
  const [weight, setWeight] = useState(getData('weight') || '');
  const [temporaryLicense, setTemporaryLicense] = useState(getData('temporaryLicense') || false);
  const [error, setError] = useState('');

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleTemporaryLicenseChange = (e) => {
    setTemporaryLicense(e.target.checked);
  };

  const handleSubmit = () => {
    if (weight && weight > 0) {
      setError('');
      setData('weight', weight);
      setData('temporaryLicense', temporaryLicense);
      closeModal();
    } else {
      setError('Vous ne pouvez pas laisser ce champ vide ou nulle.');
    }
  };

  return (
    <div
      className={`${!isProfileOpen && 'hidden'} fixed bottom-0 left-0 right-0 z-10 rounded-t-2xl bg-white px-4 py-8 text-dark-1`}
    >
      {getData('weight') && (
        <XmarkIcon
          className="absolute right-4 top-4 text-red opacity-50 transition-opacity active:opacity-100"
          onClick={closeModal}
        />
      )}
      <h2 className="mb-3 font-crucial text-xl">Modifier mon profil</h2>
      <p className="mb-2">
        Vous <span className="font-bold">devez</span> renseigner votre profil avec votre poids pour
        calculer le taux et si vous êtes un permis probatoire pour évaluer votre capacité à
        conduire.
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
            value={weight}
            onChange={handleWeightChange}
          />
          <span className="absolute right-2 rounded bg-grey px-3 py-1 text-dark-1">kg</span>
        </div>
        {error && <p className="mt-1 text-red">{error}</p>}
      </div>
      <div className="mb-4 flex flex-col">
        <label className="mb-1 text-sm font-semibold uppercase" htmlFor="temporaryLicense">
          Mon permis
        </label>
        <div>
          <input
            type="checkbox"
            id="temporaryLicense"
            checked={temporaryLicense}
            onChange={handleTemporaryLicenseChange}
          />
          <label className="ml-1" htmlFor="temporaryLicense">
            Je suis permis probatoire
          </label>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="flex w-full justify-center rounded-lg bg-dark-1 py-4 font-semibold uppercase text-white active:bg-dark-3"
      >
        Valider
      </button>
    </div>
  );
}

export default ProfileModal;
