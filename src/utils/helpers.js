import {
  alcoholAdvices,
  ALCOHOL_DENSITY,
  ELIMINATION_RATE,
  ALCOHOL_DISTRIBUTION_RATIO,
  BAC_LIMIT_BY_LICENSE_TYPE,
} from './consts';

export const canIDrive = (bloodAlcoholLevel, temporaryLicense) => {
  if (bloodAlcoholLevel >= BAC_LIMIT_BY_LICENSE_TYPE[temporaryLicense]) {
    return 'no';
  } else if (
    bloodAlcoholLevel < BAC_LIMIT_BY_LICENSE_TYPE[temporaryLicense] &&
    bloodAlcoholLevel >= BAC_LIMIT_BY_LICENSE_TYPE[temporaryLicense] - 0.1
  ) {
    return 'almost';
  } else {
    return 'yes';
  }
};

export const canIDriveTextColor = (canIDriveResult) => {
  if (canIDriveResult === 'no') {
    return 'text-red';
  } else if (canIDriveResult === 'almost') {
    return 'text-main';
  } else if (canIDriveResult === 'yes') {
    return 'text-green';
  } else {
    return 'text-white';
  }
};

export const canIDriveBackgroundColor = (canIDriveResult) => {
  if (canIDriveResult === 'no') {
    return 'bg-red';
  } else if (canIDriveResult === 'almost') {
    return 'bg-main';
  } else if (canIDriveResult === 'yes') {
    return 'bg-green';
  } else {
    return 'bg-dark-3';
  }
};

export const getRandomAdvices = () => {
  let randomIndex = Math.floor(Math.random() * alcoholAdvices.length);
  return alcoholAdvices[randomIndex];
};

export const getNow = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const getDate = (time) => {
  const parts = time.split(':');
  const hours = parseInt(parts[0], 10);
  const minutes = parseInt(parts[1], 10);
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  return date;
};

export const getTime = (date) => {
  const _date = new Date(date);
  const hours = _date.getHours().toString().padStart(2, '0');
  const minutes = _date.getMinutes().toString().padStart(2, '0');
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

export const getBac = (consumptions, gender, weight) => {
  // Vérification des entrées
  if (!Array.isArray(consumptions)) {
    throw new Error('Les consommations doivent être un tableau');
  }
  if (typeof gender !== 'string' || !ALCOHOL_DISTRIBUTION_RATIO[gender]) {
    throw new Error('Le genre doit être soit "female" soit "male"');
  }
  if (typeof weight !== 'number' || weight <= 0) {
    throw new Error('Le poids doit être un nombre positif');
  }

  let totalBac = 0; // Taux d'alcoolémie total
  let lastDate = null; // Date de la dernière consommation

  // Calcul du taux d'alcoolémie pour chaque consommation
  for (let consommation of consumptions) {
    const volumeInCentiliters = consommation.centilitersVolume; // Volume de la consommation en cL
    const alcoholContentPercentage = consommation.alcoholContent; // Pourcentage d'alcool de la consommation
    const alcoholGrams = volumeInCentiliters * alcoholContentPercentage * ALCOHOL_DENSITY; // Quantité d'alcool consommée en g
    const bacForCurrentConsumption = alcoholGrams / (weight * ALCOHOL_DISTRIBUTION_RATIO[gender]); // Taux d'alcoolémie pour cette consommation

    // Si ce n'est pas la première consommation, on soustrait l'alcool éliminé depuis la dernière consommation
    if (lastDate) {
      const elapsedTimeInHours = (new Date(consommation.date) - new Date(lastDate)) / 3600000; // Temps écoulé en heures
      totalBac = Math.max(
        totalBac + bacForCurrentConsumption - elapsedTimeInHours * ELIMINATION_RATE,
        0,
      );
    } else {
      totalBac = bacForCurrentConsumption;
    }

    lastDate = consommation.date;
  }

  // On soustrait l'alcool éliminé depuis la dernière consommation
  const currentDate = new Date();
  const elapsedTimeInHours = (currentDate - new Date(lastDate)) / 3600000;
  totalBac = Math.max(totalBac - elapsedTimeInHours * ELIMINATION_RATE, 0);

  return totalBac;
};

export const getDateToDrive = (currentBac, temporaryLicense) => {
  let predictiveBac = currentBac;
  let timeInMinutes = 0;

  while (predictiveBac >= BAC_LIMIT_BY_LICENSE_TYPE[temporaryLicense]) {
    predictiveBac = predictiveBac - (1 / 60) * ELIMINATION_RATE;
    timeInMinutes++;
  }

  const currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() + timeInMinutes);
  return currentDate;
};

export const getStringDateToDrive = (date) => {
  const pretictiveHours = date.getHours().toString().padStart(2, '0');
  const pretictiveMinutes = date.getMinutes().toString().padStart(2, '0');
  return `${pretictiveHours}:${pretictiveMinutes}`;
};

export const getTimeDifference = (driveDate) => {
  const currentDate = new Date();

  let differenceInMinutes = (driveDate - currentDate) / 60000;
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  differenceInMinutes = differenceInMinutes % 60;

  return differenceInHours !== 0
    ? `${differenceInHours} heure(s) et ${differenceInMinutes} minute(s)`
    : `${differenceInMinutes} minute(s)`;
};
