import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { getData, setData } from '../../../utils/helpers';
import { dropIn } from '../../../utils/consts';

import Backdrop from '../../Backdrop';
import { Xmark as XmarkIcon } from 'iconoir-react';
import { Female as FemaleIcon } from 'iconoir-react';
import { Male as MaleIcon } from 'iconoir-react';
import { Check as CheckIcon } from 'iconoir-react';

function ProfileModal({ closeModal }) {
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('female');
  const [temporaryLicense, setTemporaryLicense] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setWeight(getData('weight') || '');
    setGender(getData('gender') || 'female');
    setTemporaryLicense(getData('temporaryLicense') || false);
    setError('');
  }, []);

  const handleWeightChange = (e) => {
    setWeight(Number(e.target.value));
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleTemporaryLicenseChange = (e) => {
    setTemporaryLicense(e.target.checked);
  };

  const handleSubmit = () => {
    if (weight && weight >= 0) {
      setError('');
      setData('weight', weight);
      setData('gender', gender);
      setData('temporaryLicense', temporaryLicense);
      closeModal();
    } else {
      setError('Ce champ doit être un nombre non vide et non nulle.');
    }
  };

  return (
    <Backdrop onClick={closeModal}>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-10 cursor-auto rounded-t-2xl bg-white px-4 py-8 text-dark-1"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {getData('weight') && (
          <XmarkIcon
            className="absolute right-4 top-4 cursor-pointer text-red opacity-50 transition-opacity duration-200 ease-out active:opacity-100"
            onClick={closeModal}
          />
        )}
        <h2 className="mb-3 font-crucial text-xl">Modifier mon profil</h2>
        <p className="mb-2">
          Vous <span className="font-bold">devez</span> renseigner votre profil avec votre poids
          pour calculer le taux et si vous êtes un permis probatoire pour évaluer votre capacité à
          conduire.
        </p>
        <div className="mb-3">
          <p className="mb-1 text-sm font-semibold uppercase">Mon sexe</p>
          <ul className="flex gap-2">
            <li className="w-full">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="peer hidden"
                onChange={handleGenderChange}
                checked={gender === 'female'}
              />
              <label
                htmlFor="female"
                className="flex h-12 cursor-pointer items-center justify-center rounded border border-dark-1 text-dark-1 opacity-25 transition-opacity duration-200 ease-out peer-checked:opacity-100"
              >
                <span className="mr-1 font-medium">Femme</span>
                <FemaleIcon />
              </label>
            </li>
            <li className="w-full">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="peer hidden"
                onChange={handleGenderChange}
                checked={gender === 'male'}
              />
              <label
                htmlFor="male"
                className="flex h-12 cursor-pointer items-center justify-center rounded border border-dark-1 text-dark-1 opacity-25 transition-opacity duration-200 ease-out peer-checked:opacity-100"
              >
                <span className="mr-1 font-medium">Homme</span>
                <MaleIcon />
              </label>
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <label className="mb-1 text-sm font-semibold uppercase" htmlFor="weight">
            Mon poids
          </label>
          <div className="relative flex items-center">
            <input
              className="h-12 w-full rounded border pl-2 outline-none"
              type="number"
              id="weight"
              inputMode="decimal"
              placeholder="0"
              value={weight}
              onChange={handleWeightChange}
            />
            <span className="pointer-events-none absolute right-2 rounded bg-grey px-3 py-1 text-dark-1">
              kg
            </span>
          </div>
          {error && <p className="mt-1 text-red">{error}</p>}
        </div>
        <div className="mb-4">
          <p className="mb-1 text-sm font-semibold uppercase" htmlFor="temporaryLicense">
            Mon permis
          </p>
          <label htmlFor="temporaryLicense" className="inline-flex cursor-pointer">
            <input
              type="checkbox"
              id="temporaryLicense"
              checked={temporaryLicense}
              onChange={handleTemporaryLicenseChange}
              className="peer hidden"
            />
            <div className="flex h-6 w-6 items-center justify-center rounded border transition-colors duration-200 ease-out peer-checked:border-none peer-checked:bg-blue">
              <CheckIcon width={20} height={20} className="text-white" />
            </div>
            <span className="ml-2">Je suis permis probatoire</span>
          </label>
        </div>
        <button
          onClick={handleSubmit}
          className="flex w-full justify-center rounded-lg bg-dark-1 py-4 font-semibold uppercase text-white active:bg-dark-3"
        >
          Valider
        </button>
      </motion.div>
    </Backdrop>
  );
}

export default ProfileModal;
