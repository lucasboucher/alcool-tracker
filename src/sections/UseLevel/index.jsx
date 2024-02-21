import Figure from '../../components/Figure';
import Result from '../../components/Result';

function UseLevel({ bloodAlcoholLevel, className }) {
  return (
    <div className={className}>
      <div className="mb-2">
        <h2 className="font-crucial text-xl">Mon taux</h2>
      </div>
      <div className="mb-2 flex gap-2">
        <Figure number={bloodAlcoholLevel} text="g/L de sang" />
        <Figure number={bloodAlcoholLevel / 2} text="mg/L d’air expriré" />
      </div>
      <Result bloodAlcoholLevel={bloodAlcoholLevel} />
    </div>
  );
}

export default UseLevel;
