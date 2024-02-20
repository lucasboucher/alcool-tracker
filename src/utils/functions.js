export const canIDrive = (bloodAlcoholLevel) => {
  if (bloodAlcoholLevel >= 0.5) {
    return 'no';
  } else if (bloodAlcoholLevel < 0.5 && bloodAlcoholLevel >= 0.4) {
    return 'almost';
  } else {
    return 'yes';
  }
};

export const canIDriveColor = (bloodAlcoholLevel) => {
  if (bloodAlcoholLevel >= 0.5) {
    return 'red';
  } else if (bloodAlcoholLevel < 0.5 && bloodAlcoholLevel >= 0.4) {
    return 'main';
  } else {
    return 'green';
  }
};
