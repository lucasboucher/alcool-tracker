import { canIDriveIndicatorColor, canIDrive, getData } from '../../utils/helpers';

import Figure from '../../components/Figure';
import Result from '../../components/Result';

function UseLevel({ bloodAlcoholLevel, openHealthModal, isHealthModalOpen, className }) {
  const result = canIDrive(bloodAlcoholLevel, getData('temporaryLicense'));

  return (
    <section className={className} aria-labelledby="taux-label">
      <div className="mb-2 flex items-center">
        <div className="relative mr-2 flex size-3 items-center justify-center">
          <span
            className={`absolute size-full animate-ping rounded-full opacity-75 ${canIDriveIndicatorColor(result)}`}
          />
          <span className={`size-2 rounded-full ${canIDriveIndicatorColor(result)}`} />
        </div>
        <h2 className="font-crucial text-xl" id="taux-label">
          Mon taux
        </h2>
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
    </section>
  );
}

export default UseLevel;
