import React, { useEffect, useState } from 'react';

import { Xmark as XmarkIcon } from 'iconoir-react';

import { getDate, getNow } from '../../../utils/helpers';
import Backdrop from '../../Backdrop';

function AddGlassModal({ closeModal, setConsumption }) {
  const [volumeError, setVolumeError] = useState('');
  const [alcoholContentError, setAlcoholContentError] = useState('');
  const [volume, setVolume] = useState('');
  const [time, setTime] = useState(getNow());
  const [alcoholContent, setAlcoholContent] = useState('');

  useEffect(() => {
    setTime(getNow());
  }, []);

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
    setVolumeError('');
    setAlcoholContentError('');
    if (!volume || volume <= 0) {
      setVolumeError('Vous ne pouvez pas laisser ce champ vide ou nulle.');
    }
    if (!alcoholContent || alcoholContent <= 0) {
      setAlcoholContentError('Vous ne pouvez pas laisser ce champ vide ou nulle.');
    }
    if (volume && volume > 0 && alcoholContent && alcoholContent > 0) {
      setVolume('');
      setAlcoholContent('');
      setConsumption((prevState) => [
        ...prevState,
        {
          date: getDate(time),
          centilitersVolume: volume,
          alcoholContent: alcoholContent,
        },
      ]);
      closeModal();
    }
  };

  return (
    <Backdrop onClick={closeModal}>
      <div
        className="fixed bottom-0 left-0 right-0 z-10 cursor-auto rounded-t-2xl bg-white px-4 py-8 text-dark-1"
        onClick={(e) => e.stopPropagation()}
      >
        <XmarkIcon
          className="absolute right-4 top-4 cursor-pointer text-red opacity-50 transition-opacity active:opacity-100"
          onClick={closeModal}
        />
        <h2 className="mb-3 font-crucial text-xl">Ajouter un verre</h2>
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
        <button
          onClick={handleSubmit}
          className="flex w-full justify-center rounded-lg bg-dark-1 py-4 font-semibold uppercase text-white active:bg-dark-3"
        >
          Valider
        </button>
      </div>
    </Backdrop>
  );
}

export default AddGlassModal;
