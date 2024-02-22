import { alcoholIdioms } from './consts';

export const canIDrive = (bloodAlcoholLevel) => {
  if (bloodAlcoholLevel >= 0.5) {
    return 'no';
  } else if (bloodAlcoholLevel < 0.5 && bloodAlcoholLevel >= 0.4) {
    return 'almost';
  } else {
    return 'yes';
  }
};

export const canIDriveTextColor = (bloodAlcoholLevel) => {
  if (bloodAlcoholLevel >= 0.5) {
    return 'text-red';
  } else if (bloodAlcoholLevel < 0.5 && bloodAlcoholLevel >= 0.4) {
    return 'text-main';
  } else {
    return 'text-green';
  }
};

export const canIDriveBackgroundColor = (bloodAlcoholLevel) => {
  if (bloodAlcoholLevel >= 0.5) {
    return 'bg-red';
  } else if (bloodAlcoholLevel < 0.5 && bloodAlcoholLevel >= 0.4) {
    return 'bg-main';
  } else {
    return 'bg-green';
  }
};

export const getRandomIdioms = () => {
  let randomIndex = Math.floor(Math.random() * alcoholIdioms.length);
  return alcoholIdioms[randomIndex];
};

export const getNow = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};