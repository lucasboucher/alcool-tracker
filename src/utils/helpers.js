import {
  alcoholIdioms,
  ALCOHOL_DENSITY,
  ELIMINATION_RATE,
  ALCOHOL_DISTRIBUTION_RATIO,
} from './consts';

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

export function getBac(consumptions, gender, weight) {
  console.log(typeof weight);
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
}
