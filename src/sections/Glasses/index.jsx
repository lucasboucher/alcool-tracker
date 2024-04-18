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
    if (ratio === 'weak') return <GlassEmptyIcon />;
    if (ratio === 'average') return <GlassHalfAltIcon />;
    if (ratio === 'strong') return <GlassHalfIcon />;
  };

  return (
    <div className={className}>
      <h2 className="mb-2 font-crucial text-xl">Mes verres</h2>
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
            className={`group h-32 min-w-32 rounded border-2 border-dashed transition-colors duration-200 ease-out active:border-dark-2 ${isEditGlassModalOpen ? 'border-dark-2' : 'border-dark-3'}`}
          >
            <span
              className={`flex h-full flex-col items-center justify-center text-sm font-medium uppercase transition-opacity duration-200 ease-out group-active:opacity-100 ${isEditGlassModalOpen ? 'opacity-100' : 'opacity-50'}`}
            >
              <PlusSquareIcon className="mb-1" />
              Ajouter
            </span>
          </button>
        </div>
      ) : (
        <>
          <p className="mb-4">Vous n'avez pas encore enregistré de verres.</p>
          <button
            onClick={onAddGlassClick}
            className={`group h-32 w-full rounded border-2 border-dashed transition-colors duration-200 ease-out active:border-dark-2 ${isEditGlassModalOpen ? 'border-dark-2' : 'border-dark-3'}`}
          >
            <span
              className={`flex h-full flex-col items-center justify-center text-sm font-medium uppercase transition-opacity duration-200 ease-out group-active:opacity-100 ${isEditGlassModalOpen ? 'opacity-100' : 'opacity-50'}`}
            >
              <PlusSquareIcon className="mb-1" />
              Ajouter un verre
            </span>
          </button>
        </>
      )}
    </div>
  );
}

export default Glasses;
