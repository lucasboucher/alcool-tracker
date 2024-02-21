import { Xmark as XmarkIcon } from 'iconoir-react';
import { GlassEmpty as GlassEmptyIcon } from 'iconoir-react';

function Card({ time, centilitersVolume, alcoholContent, onClick }) {
  return (
    <div
      className="card transition-color flex min-h-32 min-w-32 flex-col rounded bg-dark-3 p-2 active:bg-dark-2"
      onClick={onClick}
    >
      <div className="flex justify-between text-sm font-medium">
        {time}
        <XmarkIcon
          height={24}
          width={24}
          className="card__delete text-red opacity-50 transition-opacity"
        />
      </div>
      <div className="flex grow flex-col items-center justify-center">
        <GlassEmptyIcon height={32} width={32} className="mb-1" />
        <p>
          <span className="font-bold">{centilitersVolume}</span>cl à{' '}
          <span className="font-bold">{alcoholContent}</span>°
        </p>
      </div>
    </div>
  );
}

export default Card;
