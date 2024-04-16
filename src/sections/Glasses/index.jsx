import Card from '../../components/Card';

import { GlassEmpty as GlassEmptyIcon } from 'iconoir-react';
import { GlassHalf as GlassHalfIcon } from 'iconoir-react';
import { GlassHalfAlt as GlassHalfAltIcon } from 'iconoir-react';
import { PlusSquare as PlusSquareIcon } from 'iconoir-react';
import { getAlcoholRatio, formatTime } from '../../utils/helpers';

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
            className={`group min-h-32 min-w-32 rounded border-2 border-dashed transition-colors duration-200 ease-out active:border-dark-2 ${isEditGlassModalOpen ? 'border-dark-2' : 'border-dark-3'}`}
          >
            <div
              className={`duration-400 flex h-full w-full flex-col items-center justify-center transition-opacity ease-out group-active:opacity-100 ${isEditGlassModalOpen ? 'opacity-100' : 'opacity-50'}`}
            >
              <PlusSquareIcon className="mb-1" />
              <p className="text-sm font-medium uppercase">Ajouter</p>
            </div>
          </button>
        </div>
      ) : (
        <>
          <p className="mb-4">Vous n'avez pas encore enregistré de verres.</p>
          <button
            onClick={onAddGlassClick}
            className={`group h-32 w-full rounded border-2 border-dashed transition-colors duration-200 ease-out active:border-dark-2 ${isEditGlassModalOpen ? 'border-dark-2' : 'border-dark-3'}`}
          >
            <div
              className={`duration-400 flex h-full w-full flex-col items-center justify-center transition-opacity ease-out group-active:opacity-100 ${isEditGlassModalOpen ? 'opacity-100' : 'opacity-50'}`}
            >
              <PlusSquareIcon className="mb-1" />
              <p className="text-sm font-medium uppercase">Ajouter un verre</p>
            </div>
          </button>
        </>
      )}
    </div>
  );
}

export default Glasses;
