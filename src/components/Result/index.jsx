import { Car as CarIcon } from 'iconoir-react';

import {
  canIDrive,
  canIDriveTextColor,
  getData,
  getDateToDrive,
  formatTime,
  getTimeDifference,
} from '../../utils/helpers';

function Result({ bloodAlcoholLevel, className }) {
  const result = canIDrive(bloodAlcoholLevel, getData('temporaryLicense'));
  const date = getDateToDrive(bloodAlcoholLevel, getData('temporaryLicense'));
  const driveTime = formatTime(date);
  const difference = getTimeDifference(date);

  return (
    <div className={`rounded bg-dark-3 p-2 ${canIDriveTextColor(result)} ${className}`}>
      <div className="mb-1 flex items-center">
        <CarIcon className="mr-2" />
        <span className="font-crucial text-2xl">{driveTime}</span>
      </div>
      <p className="text-sm">
        {result === 'no' && (
          <>
            Vous devez attendre au moins <span className="font-bold">{difference}</span> avant de
            prendre la route.
          </>
        )}
        {result === 'almost' && (
          <>Vous devriez pouvoir prendre la route mais il est conseillé d'attendre encore un peu.</>
        )}
        {result === 'yes' && <>Vous pouvez prendre la route.</>}
      </p>
    </div>
  );
}

export default Result;
