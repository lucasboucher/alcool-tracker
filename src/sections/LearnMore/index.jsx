import { GlassEmpty as GlassEmptyIcon } from 'iconoir-react';
import { GlassHalf as GlassHalfIcon } from 'iconoir-react';
import { GlassHalfAlt as GlassHalfAltIcon } from 'iconoir-react';

function LearnMore({ className }) {
  return (
    <div className={className}>
      <h2 className="mb-2 font-crucial text-xl">Description</h2>
      <p className="mb-2">
        Bienvenue dans votre application (très utile si vous êtes alcoolique comme moi) qui donne
        votre taux d’alcoolémie (à prendre avec des pincettes).
      </p>
      <p className="mb-6">
        Également très pratique puisqu’elle vous dira immédiatement si vous pouvez prendre la route
        ou jusqu’à quelle heure vous devrez attendre.
      </p>
      <h2 className="mb-2 font-crucial text-xl">Icônes</h2>
      <p className="mb-3">
        Selon le rapport volume/teneur de votre verre, l'icône changera automatiquement dans la
        liste.
      </p>
      <div className="flex justify-between gap-3">
        <div className="flex w-full flex-col items-center justify-center gap-1 rounded bg-dark-2 py-6">
          <GlassEmptyIcon height={32} width={32} />
          <p className="text-center text-green">Peu</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1 rounded bg-dark-2 py-6">
          <GlassHalfAltIcon height={32} width={32} />
          <p className="text-center text-main">Normal</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1 rounded bg-dark-2 py-6">
          <GlassHalfIcon height={32} width={32} />
          <p className="text-center text-red">Beaucoup</p>
        </div>
      </div>
    </div>
  );
}

export default LearnMore;
