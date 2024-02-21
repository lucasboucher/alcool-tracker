import { Car as CarIcon } from 'iconoir-react';
import { canIDrive, canIDriveColor } from '../../utils/functions';

function Result({ bloodAlcoholLevel }) {
  const result = canIDrive(bloodAlcoholLevel);

  return (
    <div className={`flex text-${canIDriveColor(bloodAlcoholLevel)}`}>
      <CarIcon className="mr-1" />
      {result === 'no' && <p>Vous ne pouvez pas prendre la route</p>}
      {result === 'almost' && <p>Vous êtes limite pour prendre la route</p>}
      {result === 'yes' && <p>Vous pouvez prendre la route</p>}
    </div>
  );
}

export default Result;
