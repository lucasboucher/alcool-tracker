import Figure from '../../components/Figure';
import Result from '../../components/Result';

import { canIDriveBackgroundColor, canIDrive, getData } from '../../utils/helpers';

function UseLevel({ bloodAlcoholLevel, className }) {
  const result = canIDrive(bloodAlcoholLevel, getData('temporaryLicense'));

  return (
    <div className={className}>
      <div className="mb-2 flex items-center">
        <div className={`mr-1 h-2 w-2 rounded-full ${canIDriveBackgroundColor(result)}`}></div>
        <h2 className="font-crucial text-xl">Mon taux</h2>
      </div>
      <Result bloodAlcoholLevel={bloodAlcoholLevel} className="mb-2" />
      <div className="flex gap-2">
        <Figure number={bloodAlcoholLevel} text="g/L de sang" />
        <Figure number={bloodAlcoholLevel / 2.1} text="mg/L d’air expiré" />
      </div>
    </div>
  );
}

export default UseLevel;
