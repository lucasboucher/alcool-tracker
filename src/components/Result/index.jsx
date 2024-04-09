import { Car as CarIcon } from 'iconoir-react';

import { canIDrive, canIDriveTextColor, getData, getDateToDrive } from '../../utils/helpers';

function Result({ bloodAlcoholLevel }) {
  const result = canIDrive(bloodAlcoholLevel, getData('temporaryLicense'));
  const time = getDateToDrive(bloodAlcoholLevel, getData('temporaryLicense'));

  return (
    <div className={`flex ${canIDriveTextColor(result)}`}>
      <CarIcon className="mr-1" />
      {result === 'no' && (
        <p>
          Vous ne pouvez pas prendre la route avant <span className="font-bold">{time}</span>
        </p>
      )}
      {result === 'almost' && <p>Vous êtes limite pour prendre la route</p>}
      {result === 'yes' && <p>Vous pouvez prendre la route</p>}
    </div>
  );
}

export default Result;
