import { useState } from 'react';

import { getData, setData } from '../../../utils/helpers';

import Modal from '..';
import { Female as FemaleIcon, Male as MaleIcon, Check as CheckIcon } from 'iconoir-react';

function ProfileModal({ closeModal }) {
  const [weight, setWeight] = useState(() => getData('weight') || '');
  const [gender, setGender] = useState(() => getData('gender') || 'female');
  const [temporaryLicense, setTemporaryLicense] = useState(
    () => getData('temporaryLicense') || false,
  );
  const [error, setError] = useState('');

  const handleWeightChange = (e) => {
    setWeight(Number(e.target.value));
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleTemporaryLicenseChange = (e) => {
    setTemporaryLicense(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <Modal onClick={closeModal} closable={getData('weight') && true}>
      <h2 className="mb-3 font-crucial text-xl" id="modalLabel">
        Modifier mon profil
      </h2>
      <p className="mb-2">
        Vous <span className="font-bold">devez</span> renseigner votre profil avec votre poids pour
        calculer le taux et si vous êtes un permis probatoire pour évaluer votre capacité à
        conduire.
      </p>
      <form>
        <div className="mb-3">
          <fieldset>
            <legend className="mb-1 text-sm font-semibold uppercase">Mon sexe</legend>
            <ul className="flex gap-2">
              <li className="w-full focus-within:ring-2 focus-within:ring-blue">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="peer sr-only"
                  onChange={handleGenderChange}
                  checked={gender === 'female'}
                />
                <label
                  htmlFor="female"
                  className="flex h-12 cursor-pointer items-center justify-center rounded border border-light-sand6 text-light-sand12 opacity-50 transition-all duration-200 ease-out peer-checked:border-light-sand7 peer-checked:opacity-100"
                >
                  <span className="mr-1 font-medium">Femme</span>
                  <FemaleIcon aria-hidden="true" role="presentation" />
                </label>
              </li>
              <li className="w-full focus-within:ring-2 focus-within:ring-blue">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="peer sr-only"
                  onChange={handleGenderChange}
                  checked={gender === 'male'}
                />
                <label
                  htmlFor="male"
                  className="flex h-12 cursor-pointer items-center justify-center rounded border border-light-sand6 text-light-sand12 opacity-50 transition-all duration-200 ease-out peer-checked:border-light-sand7 peer-checked:opacity-100"
                >
                  <span className="mr-1 font-medium">Homme</span>
                  <MaleIcon aria-hidden="true" role="presentation" />
                </label>
              </li>
            </ul>
          </fieldset>
        </div>
        <div className="mb-3">
          <label className="mb-1 text-sm font-semibold uppercase" htmlFor="weight">
            Mon poids
          </label>
          <div className="relative flex items-center">
            <input
              className="h-12 w-full rounded border border-light-sand7 pl-2 outline-none"
              type="number"
              id="weight"
              inputMode="decimal"
              placeholder="0"
              value={weight}
              onChange={handleWeightChange}
            />
            <span className="pointer-events-none absolute right-2 rounded bg-light-sand3 px-3 py-1 text-light-sand12">
              kg
            </span>
          </div>
          {error && <p className="mt-1 text-light-red11">{error}</p>}
        </div>
        <div className="mb-4">
          <p className="mb-1 text-sm font-semibold uppercase">Mon permis</p>
          <label
            htmlFor="temporaryLicense"
            className="inline-flex cursor-pointer focus-within:ring-2 focus-within:ring-blue"
          >
            <input
              type="checkbox"
              id="temporaryLicense"
              checked={temporaryLicense}
              onChange={handleTemporaryLicenseChange}
              className="peer sr-only"
            />
            <span className="flex size-6 items-center justify-center rounded border border-light-sand7 transition duration-200 ease-out peer-checked:border-none peer-checked:bg-blue peer-checked:shadow-[0_4px_12px_-4px] peer-checked:shadow-blue">
              <CheckIcon
                width={20}
                height={20}
                className="text-white"
                aria-hidden="true"
                role="presentation"
              />
            </span>
            <span className="ml-2">Je suis permis probatoire</span>
          </label>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="flex w-full justify-center rounded-lg bg-light-amber3 py-4 font-semibold uppercase text-light-amber11 transition-colors duration-200 ease-out active:bg-light-amber4"
        >
          Valider
        </button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
