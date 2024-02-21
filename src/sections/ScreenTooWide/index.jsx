import { GlassEmpty as GlassEmptyIcon } from 'iconoir-react';

function ScreenTooWide() {
  return (
    <>
      <div className="text-center">
        <GlassEmptyIcon height={48} width={48} className="mx-auto mb-4" />
        <p className="text-lg">
          L'application <span className="font-bold">Mon alcool tracker</span> n'est pas optimisée
          pour cette taille d'écran
        </p>
        <p className="text-sm">
          Pour profiter d'une expérience optimale, nous vous recommandons d'avoir une résolution
          inférieure à 768 pixels de large.
        </p>
      </div>
    </>
  );
}

export default ScreenTooWide;
