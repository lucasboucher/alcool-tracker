import React, { useState } from 'react';

import { getData, getDate, getNow, formatTime, getCalories } from '../../../utils/helpers';

import Modal from '..';
import CaloriesTooltip from '../../CaloriesTooltip';
import { BinMinusIn as BinMinusInIcon } from 'iconoir-react';

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
                  className="border-light-sand7 h-12 w-full rounded border pl-2 outline-none"
                  type="number"
                  id="volume"
                  inputMode="numeric"
                  placeholder="0"
                  value={volume}
                  onChange={handleVolumeChange}
                />
                <span className="bg-light-sand2 pointer-events-none absolute right-2 rounded px-3 py-1 text-light-sand12">
                  cl
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-semibold uppercase" htmlFor="time">
                Heure
              </label>
              <input
                className="border-light-sand7 flex h-12 w-24 cursor-pointer justify-center rounded border outline-none"
                type="time"
                id="time"
                value={time}
                onChange={handleTimeChange}
              />
            </div>
          </div>
          {volumeError && <p className="text-light-red11 mt-1">{volumeError}</p>}
        </div>
        <div className="mb-4">
          <label className="mb-1 text-sm font-semibold uppercase" htmlFor="alcoholContent">
            Teneur
          </label>
          <div className="relative flex items-center">
            <input
              className="border-light-sand7 h-12 w-full rounded border pl-2  outline-none"
              type="number"
              id="alcoholContent"
              inputMode="decimal"
              placeholder="0"
              value={alcoholContent}
              onChange={handleAlcoholContentChange}
            />
            <span className="bg-light-sand2 pointer-events-none absolute right-2 rounded px-3 py-1 text-light-sand12">
              °
            </span>
          </div>
          {alcoholContentError && <p className="text-light-red11 mt-1">{alcoholContentError}</p>}
        </div>
        <div className="flex">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-light-amber3 text-light-amber11 active:bg-light-amber4 flex w-full justify-center rounded-lg py-4 font-semibold uppercase transition-colors duration-200 ease-out"
          >
            Valider
          </button>
          {selectedGlassIndex !== null && (
            <button
              type="button"
              onClick={(e) => onDeleteClick(e)}
              aria-label="Supprimer ce verre"
              className="bg-light-red3 active:bg-light-red4 ml-2 rounded-lg px-4 transition-colors duration-200 ease-out"
            >
              <BinMinusInIcon className="text-light-red11" role="presentation" />
            </button>
          )}
        </div>
      </form>
    </Modal>
  );
}

export default EditGlassModal;
