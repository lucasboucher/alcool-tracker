import Card from '../../components/Card';

import { GlassEmpty as GlassEmptyIcon } from 'iconoir-react';
import { GlassHalf as GlassHalfIcon } from 'iconoir-react';
import { GlassHalfAlt as GlassHalfAltIcon } from 'iconoir-react';
import { getAlcoholRatio, formatTime } from '../../utils/helpers';

function Glasses({
  consumption,
  setSelectedDeleteIndexGlass,
  setIsDeleteGlassModalOpen,
  className,
}) {
  const onGlassClick = (index) => {
    setSelectedDeleteIndexGlass(index);
    setIsDeleteGlassModalOpen(true);
  };

  const glassIcon = (centilitersVolume, alcoholContent) => {
    const ratio = getAlcoholRatio(centilitersVolume, alcoholContent);
    if (ratio === 'weak') return <GlassEmptyIcon />;
    if (ratio === 'average') return <GlassHalfAltIcon />;
    if (ratio === 'strong') return <GlassHalfIcon />;
  };

  const sortedConsumption = [...consumption];
  sortedConsumption.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <div className={className}>
      <h2 className="mb-2 font-crucial text-xl">Mes verres</h2>
      {consumption.length !== 0 ? (
        <div className="hide-scrollbar mx-[-1rem] flex gap-2 overflow-scroll px-4">
          {sortedConsumption.map((glass, index) => (
            <Card
              time={formatTime(glass.date)}
              centilitersVolume={glass.centilitersVolume}
              alcoholContent={glass.alcoholContent}
              key={index}
              onClick={() => onGlassClick(index)}
              icon={glassIcon(glass.centilitersVolume, glass.alcoholContent)}
            />
          ))}
        </div>
      ) : (
        <p>Vous n'avez pas encore enregistré de verres.</p>
      )}
    </div>
  );
}

export default Glasses;
