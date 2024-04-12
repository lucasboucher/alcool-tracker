import { GlassEmpty as GlassEmptyIcon } from 'iconoir-react';
import { GlassHalf as GlassHalfIcon } from 'iconoir-react';
import { GlassHalfAlt as GlassHalfAltIcon } from 'iconoir-react';

function LearnMore({ className }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`px-2 pb-4 ${className}`} id="learn_more">
      <h2 className="mb-2 font-crucial text-xl">Guide de fonctionnement</h2>
      <p className="mb-2">
        Il est important de mettre <span className="font-bold">l'heure de fin</span> de consommation
        de votre verre pour que cela fonctionne. Et il suffit de{' '}
        <span className="font-bold">rafraîchir</span> la page pour avoir son taux en temps réel.
      </p>
      <p className="mb-2">
        L'application est très pratique puisqu’elle vous dira immédiatement si vous pouvez prendre
        la route ou jusqu’à quelle heure vous devrez attendre.
      </p>
      <p className="mb-3">
        De plus, selon le rapport volume/teneur de votre verre, l'icône changera automatiquement
        dans la liste.
      </p>
      <div className="mb-6 flex justify-between gap-3">
        <div className="flex w-full flex-col items-center justify-center gap-1 rounded bg-dark-2 py-5">
          <GlassEmptyIcon height={32} width={32} />
          <p className="text-center text-green">Peu</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1 rounded bg-dark-2 py-5">
          <GlassHalfAltIcon height={32} width={32} />
          <p className="text-center text-main">Normal</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1 rounded bg-dark-2 py-5">
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
        Cette application utilise la formule de Widmark, assez précise, mais ne prend par exemple
        pas en compte la capacité de métabolisation, le taux de digestion et la tolérance à l'alcool
        qui sont propres à chacun et peuvent être difficilement calculés. L'ingestion de nourriture
        qui n'est pas pris en compte joue un rôle, tout comme votre proportion de tissus adipeux et
        musculaires.
      </p>
      <p className="mb-3">
        Cette application a été conçue à des fins d'études, de pédagogie et de compréhension de son
        corps. Pour rappel, le taux limite autorisé en France est de{' '}
        <span className="font-bold">0,5 g/L</span> de sang et{' '}
        <span className="font-bold">0,2 g/L</span> quand on est permis probatoire.
      </p>
      <button
        onClick={scrollToTop}
        className="w-full rounded-lg bg-dark-3 py-3 font-medium transition-colors duration-200 ease-out active:bg-dark-2"
      >
        Revenir en haut
      </button>
    </div>
  );
}

export default LearnMore;
