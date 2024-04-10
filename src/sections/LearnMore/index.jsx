import { GlassEmpty as GlassEmptyIcon } from 'iconoir-react';
import { GlassHalf as GlassHalfIcon } from 'iconoir-react';
import { GlassHalfAlt as GlassHalfAltIcon } from 'iconoir-react';

function LearnMore({ className }) {
  return (
    <div className={className}>
      <h2 className="mb-2 font-crucial text-xl">Utilisation</h2>
      <p className="mb-2">
        Il est important de mettre <span className="font-bold">l'heure de fin</span> de consommation
        de votre verre pour que cela fonctionne. Et il suffit de{' '}
        <span className="font-bold">rafraîchir</span> pour avoir votre taux en temps réel.
      </p>
      <p className="mb-3">
        L'application est très pratique puisqu’elle vous dira immédiatement si vous pouvez prendre
        la route ou jusqu’à quelle heure vous devrez attendre.
      </p>
      <p className="mb-3">
        De plus, selon le rapport volume/teneur de votre verre, l'icône changera automatiquement
        dans la liste.
      </p>
      <div className="mb-6 flex justify-between gap-3">
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
      <h2 className="mb-2 font-crucial text-xl">Clause de non-responsabilité</h2>
      <p className="mb-2">
        Peut s'avérer utile quand on se retrouve sans éthylotest pour donner une tendance de son
        état, cependant il ne permettra jamais de remplacer la précision d'un dispositif physique et
        n'a <span className="font-bold">aucune valeur légale</span>.
      </p>
      <p className="mb-2">
        Cette application utilise la formule de Widmark, assez précise mais ne prend par exemple pas
        en compte la capacité de métabolisation, le taux de digestion et la tolérance à l'alcool qui
        sont propres à chacun et peuvent être difficilement calculés. L'ingestion de nourriture qui
        n'est pas pris en compte joue un rôle tout comme votre proportion de tissus adipeux et
        musculaire.
      </p>
      <p>
        Cette application a été conçue a des fins d'études, de pédagogie et de compréhension de son
        corps. Pour rappel, le taux limite autorisé en France est de{' '}
        <span className="font-bold">0,5 g/L</span> de sang et{' '}
        <span className="font-bold">0,2 g/L</span> quand on est permis probabtoire.
      </p>
    </div>
  );
}

export default LearnMore;
