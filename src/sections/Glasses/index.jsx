import Card from '../../components/Card';

function Glasses({ myConsumption, setSelectedDeleteIndexGlass, setIsDeleteGlassOpen, className }) {
  const onGlassClick = (index) => {
    setSelectedDeleteIndexGlass(index);
    setIsDeleteGlassOpen(true);
  };

  return (
    <div className={className}>
      <h2 className="mb-2 font-crucial text-xl">Mes verres</h2>
      {myConsumption.length !== 0 ? (
        <div className="hide-scrollbar mx-[-1rem] flex gap-2 overflow-scroll px-4">
          {myConsumption.map((glass, index) => (
            <Card
              time={glass.time}
              centilitersVolume={glass.centilitersVolume}
              alcoholContent={glass.alcoholContent}
              key={index}
              onClick={() => onGlassClick(index)}
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
