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

export const getData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const resetData = () => {
  localStorage.removeItem('consumption');
  localStorage.removeItem('weight');
  localStorage.removeItem('gender');
  localStorage.removeItem('temporaryLicense');
};

export const getAlcoholRatio = (centilitersVolume, alcoholContent) => {
  if (centilitersVolume < 10) {
    if (alcoholContent < 35) {
      return 'weak';
    }
    if (alcoholContent >= 35 && alcoholContent < 50) {
      return 'average';
    }
    if (alcoholContent >= 50) {
      return 'strong';
    }
  }
  if (centilitersVolume >= 10 && centilitersVolume < 40) {
    if (alcoholContent < 10) {
      return 'weak';
    }
    if (alcoholContent >= 10 && alcoholContent < 30) {
      return 'average';
    }
    if (alcoholContent >= 30) {
      return 'strong';
    }
  }
  if (centilitersVolume >= 40) {
    if (alcoholContent < 5) {
      return 'weak';
    }
    if (alcoholContent >= 5 && alcoholContent < 10) {
      return 'average';
    }
    if (alcoholContent >= 10) {
      return 'strong';
    }
  }
};
