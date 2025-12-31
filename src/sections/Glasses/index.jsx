import { getAlcoholRatio, formatTime } from '../../utils/helpers';

import Card from '../../components/Card';
import {
  GlassEmpty as GlassEmptyIcon,
  GlassHalf as GlassHalfIcon,
  GlassHalfAlt as GlassHalfAltIcon,
  PlusSquare as PlusSquareIcon,
} from 'iconoir-react';

function Glasses({
  consumption,
  setSelectedGlassIndex,
  selectedGlassIndex,
  openEditGlassModal,
  openDeleteGlassModal,
  isEditGlassModalOpen,
  isDeleteGlassModalOpen,
  className,
}) {
  const onCardClick = (index) => {
    setSelectedGlassIndex(index);
    openEditGlassModal();
  };

  const onDeleteClick = (e, index) => {
    e.stopPropagation();
    setSelectedGlassIndex(index);
    openDeleteGlassModal();
  };

  const onAddGlassClick = () => {
    openEditGlassModal();
  };

  const glassIcon = (centilitersVolume, alcoholContent) => {
    const ratio = getAlcoholRatio(centilitersVolume, alcoholContent);
    if (ratio === 'weak') return <GlassEmptyIcon aria-label="Verre faible en alcool" />;
    if (ratio === 'average') return <GlassHalfAltIcon aria-label="Verre équilibré en alcool" />;
    if (ratio === 'strong') return <GlassHalfIcon aria-label="Verre fort en alcool" />;
  };

  return (
    <section className={className} aria-labelledby="verres-label">
      <h2 className="mb-2 font-crucial text-xl" id="verres-label">
        Mes verres
      </h2>
      {consumption.length !== 0 ? (
        <div className="hide-scrollbar mx-[-1rem] flex gap-2 overflow-scroll px-4">
          {consumption.map((glass, index) => (
            <Card
              key={index}
              time={formatTime(glass.date)}
              centilitersVolume={glass.centilitersVolume}
              alcoholContent={glass.alcoholContent}
              icon={glassIcon(glass.centilitersVolume, glass.alcoholContent)}
              onCardClick={() => onCardClick(index)}
              onDeleteClick={(e) => onDeleteClick(e, index)}
              isSelected={selectedGlassIndex === index ? true : false}
              isDeleteSelected={
                isDeleteGlassModalOpen && selectedGlassIndex === index ? true : false
              }
            />
          ))}
          <button
            onClick={onAddGlassClick}
            aria-label="Ajouter un verre"
            className={`min-w-32 rounded border border-dashed transition-colors duration-200 ease-out active:border-amber8 ${isEditGlassModalOpen ? 'border-amber8' : 'border-amber7'}`}
          >
            <span className="text-sand11 active:text-sand12 flex h-full flex-col items-center justify-center text-sm font-medium uppercase transition-colors duration-200 ease-out">
              <PlusSquareIcon className="mb-1" role="presentation" />
              Ajouter
            </span>
          </button>
        </div>
      ) : (
        <>
          <p className="mb-4">Vous n'avez pas encore enregistré de verres.</p>
          <button
            onClick={onAddGlassClick}
            className={`h-32 w-full rounded border border-dashed transition-colors duration-200 ease-out active:border-amber8 ${isEditGlassModalOpen ? 'border-amber8' : 'border-amber7'}`}
          >
            <span className="text-sand11 active:text-sand12 flex h-full flex-col items-center justify-center text-sm font-medium uppercase transition-colors duration-200 ease-out">
              <PlusSquareIcon className="mb-1" aria-hidden="true" role="presentation" />
              Ajouter un verre
            </span>
          </button>
        </>
      )}
    </section>
  );
}

export default Glasses;
