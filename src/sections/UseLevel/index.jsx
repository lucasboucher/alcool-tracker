import Figure from '../../components/Figure';
import Result from '../../components/Result';

import { canIDriveBackgroundColor, canIDrive, getData } from '../../utils/helpers';

function UseLevel({ bloodAlcoholLevel, openHealthModal, isHealthModalOpen, className }) {
  const result = canIDrive(bloodAlcoholLevel, getData('temporaryLicense'));

  return (
    <div className={className}>
      <div className="mb-2 flex items-center">
        <div className="relative mr-2 flex h-3 w-3 items-center justify-center">
          <span
            className={`absolute h-full w-full animate-ping rounded-full opacity-75 ${canIDriveBackgroundColor(result)}`}
          ></span>
          <span className={`h-2 w-2 rounded-full ${canIDriveBackgroundColor(result)}`}></span>
        </div>
        <h2 className="font-crucial text-xl">Mon taux</h2>
      </div>
      <Result bloodAlcoholLevel={bloodAlcoholLevel} className="mb-2" />
      <div className="flex gap-2">
        <Figure number={bloodAlcoholLevel / 2.1} text="mg/L d’air expiré" />
        <Figure
          number={bloodAlcoholLevel}
          openHealthModal={openHealthModal}
          isHealthModalOpen={isHealthModalOpen}
          bloodAlcoholLevel={bloodAlcoholLevel}
          text="g/L de sang"
        />
      </div>
    </div>
  );
}

export default UseLevel;
