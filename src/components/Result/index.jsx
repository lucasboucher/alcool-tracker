import { Car as CarIcon } from 'iconoir-react';
import { canIDrive, canIDriveColor } from '../../utils/functions';

function Result({ bloodAlcoholLevel, className }) {
  const result = canIDrive(bloodAlcoholLevel);
  console.log(canIDriveColor(bloodAlcoholLevel));

  return (
    <div className={`flex text-${canIDriveColor(bloodAlcoholLevel)} ${className}`}>
      <CarIcon className="mr-1" />
      {result === 'no' && <p>Vous ne pouvez pas prendre la route</p>}
      {result === 'almost' && <p>Vous êtes limite pour prendre la route</p>}
      {result === 'yes' && <p>Vous pouvez prendre la route</p>}
    </div>
  );
}

export default Result;
