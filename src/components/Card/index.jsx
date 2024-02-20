import { Xmark as XmarkIcon } from 'iconoir-react';
import { GlassEmpty as GlassEmptyIcon } from 'iconoir-react';

function Card({ time, centilitersVolume, alcoholContent }) {
  return (
    <div className="flex min-h-24 min-w-24 flex-col rounded bg-dark-3 p-1">
      <div className="flex justify-between text-sm">
        {time}
        <XmarkIcon className="text-red opacity-50 active:opacity-100" />
      </div>
      <div className="flex grow flex-col items-center justify-center">
        <GlassEmptyIcon />
        <p>
          <span className="font-bold">{centilitersVolume}</span>cl à{' '}
          <span className="font-bold">{alcoholContent}</span>°
        </p>
      </div>
    </div>
  );
}

export default Card;
