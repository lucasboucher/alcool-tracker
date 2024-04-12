import { Link } from 'react-router-dom';

import { GlassEmpty as GlassEmptyIcon } from 'iconoir-react';

function ScreenTooWide() {
  return (
    <div className="hidden min-h-screen flex-col items-center justify-center px-16 text-center md:flex">
      <GlassEmptyIcon height={48} width={48} className="mx-auto mb-4 animate-bounce" />
      <p className="text-lg">
        L'application <span className="font-bold">Mon alcool tracker</span> n'est pas optimisée pour
        cette taille d'écran
      </p>
      <p className="mb-4 text-sm font-medium">
        Pour profiter d'une expérience optimale, nous vous recommandons d'avoir une résolution
        inférieure à 768 pixels de large.
      </p>
      <Link
        to="/changelog"
        className="mb-2 flex items-center justify-center rounded-lg border border-dark-3 px-6 py-3 text-center font-semibold uppercase transition-colors active:bg-dark-2"
      >
        Mises à jour
      </Link>
    </div>
  );
}

export default ScreenTooWide;
