import Card from '../../components/Card';

function Glasses({ myConsumption, setMyConsumption }) {
  const deleteGlass = (index) => {
    const newConsumption = [...myConsumption];
    newConsumption.splice(index, 1);
    setMyConsumption(newConsumption);
  };

  return (
    <>
      <h2 className="mb-2 font-crucial text-xl">Mes verres</h2>
      {myConsumption.length !== 0 ? (
        <div className="hide-scrollbar mx-[-1rem] mb-6 flex gap-2 overflow-scroll px-4">
          {myConsumption.map((glass, index) => (
            <Card
              time={glass.time}
              centilitersVolume={glass.centilitersVolume}
              alcoholContent={glass.alcoholContent}
              key={index}
              onClick={() => deleteGlass(index)}
            />
          ))}
        </div>
      ) : (
        <p className="mb-6">Vous n'avez pas encore enregistré de verres.</p>
      )}
    </>
  );
}

export default Glasses;
