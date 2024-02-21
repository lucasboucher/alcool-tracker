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
