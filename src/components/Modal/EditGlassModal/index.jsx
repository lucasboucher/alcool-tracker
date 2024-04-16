import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { getData, getDate, getNow, formatTime, getCalories } from '../../../utils/helpers';
import { dropIn } from '../../../utils/consts';

import Backdrop from '../../Backdrop';
import Tooltip from '../../Tooltip';
import { Xmark as XmarkIcon } from 'iconoir-react';
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
    setVolume(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleAlcoholContentChange = (e) => {
    setAlcoholContent(e.target.value);
  };

  const handleSubmit = () => {
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
    <Backdrop onClick={closeModal}>
      <motion.div
        className="fixed bottom-0 left-0 right-0 z-10 rounded-t-2xl bg-white px-4 py-8 text-dark-1"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <XmarkIcon
          className="absolute right-4 top-4 cursor-pointer text-red opacity-50 transition-opacity duration-200 ease-out active:opacity-100"
          onClick={closeModal}
        />
        <div className="mb-3 flex items-center">
          <h2 className="font-crucial text-xl">
            {selectedGlassIndex !== null ? 'Modifier ce' : 'Ajouter un'} verre
          </h2>
          {selectedGlassIndex !== null && (
            <Tooltip
              trigger="kcal"
              content={`Ce verre équivaut environ à ${calories} kcal.`}
              className="ml-2"
            />
          )}
        </div>
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
            onClick={handleSubmit}
            className="flex w-full justify-center rounded-lg bg-dark-1 py-4 font-semibold uppercase text-white active:bg-dark-3"
          >
            Valider
          </button>
          {selectedGlassIndex !== null && (
            <button
              onClick={onDeleteClick}
              className="active:bg-red-2 ml-2 rounded-lg bg-red px-4 transition duration-200 ease-out"
            >
              <BinMinusInIcon className="text-white" />
            </button>
          )}
        </div>
      </motion.div>
    </Backdrop>
  );
}

export default EditGlassModal;
