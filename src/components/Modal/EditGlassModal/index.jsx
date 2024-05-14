import React, { useState } from 'react';

import { getData, getDate, getNow, formatTime, getCalories } from '../../../utils/helpers';

import Modal from '..';
import CaloriesTooltip from '../../CaloriesTooltip';
import { Xmark as XmarkIcon, BinMinusIn as BinMinusInIcon } from 'iconoir-react';

function EditGlassModal({ closeModal, setConsumption, selectedGlassIndex, onDeleteClick }) {
  const consumption = getData('consumption');
  const selectedGlass = consumption[selectedGlassIndex];
  const calories =
    selectedGlassIndex !== null
      ? getCalories(selectedGlass.centilitersVolume, selectedGlass.alcoholContent)
      : 0;

  const [volumeError, setVolumeError] = useState('');
  const [alcoholContentError, setAlcoholContentError] = useState('');
  const [volume, setVolume] = useState(
    selectedGlassIndex !== null ? selectedGlass.centilitersVolume : '',
  );
  const [time, setTime] = useState(
    selectedGlassIndex !== null ? formatTime(new Date(selectedGlass.date)) : getNow(),
  );
  const [alcoholContent, setAlcoholContent] = useState(
    selectedGlassIndex !== null ? selectedGlass.alcoholContent : '',
  );

  const handleVolumeChange = (e) => {
    if (e.target.value > 999) {
      setVolume(999);
    } else {
      setVolume(e.target.value);
    }
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleAlcoholContentChange = (e) => {
    if (e.target.value > 100) {
      setAlcoholContent(100);
    } else {
      setAlcoholContent(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!volume || volume <= 0) {
      setVolumeError('Vous ne pouvez pas laisser ce champ vide ou nulle.');
    }
    if (!alcoholContent || alcoholContent <= 0) {
      setAlcoholContentError('Vous ne pouvez pas laisser ce champ vide ou nulle.');
    }
    if (volume && volume > 0 && alcoholContent && alcoholContent > 0) {
      setConsumption((prevState) => {
        const consumption = [...prevState];
        selectedGlassIndex !== null
          ? (consumption[selectedGlassIndex] = {
              date: getDate(time),
              centilitersVolume: volume,
              alcoholContent: alcoholContent,
            })
          : consumption.push({
              date: getDate(time),
              centilitersVolume: volume,
              alcoholContent: alcoholContent,
            });
        consumption.sort((a, b) => new Date(b.date) - new Date(a.date));
        return consumption;
      });
      closeModal();
    }
  };

  return (
    <Modal onClick={closeModal}>
      <button
        onClick={closeModal}
        aria-label="Fermer la modale"
        className="absolute right-1 top-1 cursor-pointer p-3 text-red opacity-50 transition-opacity duration-200 ease-out active:opacity-100"
      >
        <XmarkIcon role="presentation" />
      </button>
      <div className="mb-3 flex items-center">
        <h2 className="font-crucial text-xl" id="modalLabel">
          {selectedGlassIndex !== null ? 'Modifier ce' : 'Ajouter un'} verre
        </h2>
        {selectedGlassIndex !== null && (
          <CaloriesTooltip value={calories} selectedGlassIndex={selectedGlassIndex} />
        )}
      </div>
      <form>
        <div className="mb-2">
          <div className="flex">
            <div className="mr-2 w-full">
              <label className="mb-1 text-sm font-semibold uppercase" htmlFor="volume">
                Volume
              </label>
              <div className="relative flex items-center">
                <input
                  className="h-12 w-full rounded border pl-2 outline-none"
                  type="number"
                  id="volume"
                  inputMode="numeric"
                  placeholder="0"
                  value={volume}
                  onChange={handleVolumeChange}
                />
                <span className="pointer-events-none absolute right-2 rounded bg-grey px-3 py-1 text-dark-1	">
                  cl
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold uppercase" htmlFor="time">
                Heure
              </label>
              <input
                className="flex h-12 w-24 cursor-pointer justify-center rounded border outline-none"
                type="time"
                id="time"
                value={time}
                onChange={handleTimeChange}
              />
            </div>
          </div>
          {volumeError && <p className="mt-1 text-red">{volumeError}</p>}
        </div>
        <div className="mb-4">
          <label className="mb-1 text-sm font-semibold uppercase" htmlFor="alcoholContent">
            Teneur
          </label>
          <div className="relative flex items-center">
            <input
              className="h-12 w-full rounded border pl-2  outline-none"
              type="number"
              id="alcoholContent"
              inputMode="decimal"
              placeholder="0"
              value={alcoholContent}
              onChange={handleAlcoholContentChange}
            />
            <span className="pointer-events-none absolute right-2 rounded bg-grey px-3 py-1 text-dark-1	">
              °
            </span>
          </div>
          {alcoholContentError && <p className="mt-1 text-red">{alcoholContentError}</p>}
        </div>
        <div className="flex">
          <button
            type="submit"
            onClick={handleSubmit}
            className="flex w-full justify-center rounded-lg bg-dark-1 py-4 font-semibold uppercase text-white transition-colors duration-200 ease-out active:bg-dark-3"
          >
            Valider
          </button>
          {selectedGlassIndex !== null && (
            <button
              onClick={onDeleteClick}
              aria-label="Supprimer ce verre"
              className="ml-2 rounded-lg bg-red px-4 transition-colors duration-200 ease-out active:bg-red-2"
            >
              <BinMinusInIcon className="text-white" role="presentation" />
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
}

export default EditGlassModal;
