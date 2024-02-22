import React, { useEffect, useState } from 'react';

import { getNow } from '../../../utils/helpers';

import { Xmark as XmarkIcon } from 'iconoir-react';

function AddGlassModal({ closeModal, isAddGlassOpen, setMyConsumption }) {
  const [volume, setVolume] = useState('');
  const [time, setTime] = useState(getNow());
  const [alcoholContent, setAlcoholContent] = useState('');

  useEffect(() => {
    setTime(getNow());
  }, [isAddGlassOpen]);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleAlcoholContentChange = (e) => {
    setAlcoholContent(e.target.value);
  };

  const handleSubmitClick = () => {
    setVolume('');
    closeModal();
    setAlcoholContent('');
    setMyConsumption((prevState) => [
      ...prevState,
      {
        time: time,
        centilitersVolume: volume,
        alcoholContent: alcoholContent,
      },
    ]);
  };

  return (
    <div
      className={`${!isAddGlassOpen && 'hidden'} fixed bottom-0 left-0 right-0 z-10 rounded-t-2xl bg-white px-4 py-8 text-dark-1`}
    >
      <XmarkIcon
        className="absolute right-4 top-4 text-red opacity-50 transition-opacity active:opacity-100"
        onClick={closeModal}
      />
      <h2 className="mb-3 font-crucial text-xl">Ajouter un verre</h2>
      <div className="mb-2 flex">
        <div className="mr-2 w-full">
          <label className="mb-1 text-sm font-semibold uppercase" htmlFor="volume">
            Volume
          </label>
          <div className="relative flex items-center">
            <input
              className="h-12 w-full border pl-2"
              type="number"
              id="volume"
              inputMode="numeric"
              placeholder="0"
              value={volume}
              onChange={handleVolumeChange}
            />
            <span className="bg-grey absolute right-2 rounded px-3 py-1 text-dark-1">cl</span>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-semibold uppercase" htmlFor="time">
            Heure
          </label>
          <input
            className="h-12 w-24 border pl-2"
            type="time"
            id="time"
            value={time}
            onChange={handleTimeChange}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-1 text-sm font-semibold uppercase" htmlFor="alcoholContent">
          Teneur
        </label>
        <div className="relative flex items-center">
          <input
            className="h-12 w-full border pl-2"
            type="number"
            id="alcoholContent"
            inputMode="decimal"
            placeholder="0"
            value={alcoholContent}
            onChange={handleAlcoholContentChange}
          />
          <span className="bg-grey absolute right-2 rounded px-3 py-1 text-dark-1">°</span>
        </div>
      </div>
      <button
        onClick={handleSubmitClick}
        className="flex w-full justify-center rounded-lg bg-dark-1 py-4 font-semibold uppercase text-white active:bg-dark-3"
      >
        Valider
      </button>
    </div>
  );
}

export default AddGlassModal;
