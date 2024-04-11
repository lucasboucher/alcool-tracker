import { Car as CarIcon } from 'iconoir-react';

import {
  canIDrive,
  canIDriveTextColor,
  getData,
  getDateToDrive,
  getStringDateToDrive,
  getTimeDifference,
} from '../../utils/helpers';

function Result({ bloodAlcoholLevel }) {
  const result = canIDrive(bloodAlcoholLevel, getData('temporaryLicense'));
  const date = getDateToDrive(bloodAlcoholLevel, getData('temporaryLicense'));
  const stringDate = getStringDateToDrive(date);
  const difference = getTimeDifference(date);

  return (
    <div className={`mb-2 rounded bg-dark-3 p-2 ${canIDriveTextColor(result)}`}>
      <div className="mb-1 flex">
        <CarIcon className="mr-2 mt-0.5" />
        <span className="font-crucial text-2xl">{stringDate}</span>
      </div>
      <p className="text-sm">
        {result === 'no' && (
          <>
            Vous devez attendre au moins <span className="font-bold">{difference}</span> avant de
            prendre la route.
          </>
        )}
        {result === 'almost' && (
          <>Vous pouvez prendre la route mais vous devriez encore attendre un petit peu.</>
        )}
        {result === 'yes' && <>Vous pouvez prendre la route.</>}
      </p>
    </div>
  );
}

export default Result;
