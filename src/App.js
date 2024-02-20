import Card from './components/Card';
import Figure from './components/Figure';
import Quote from './components/Quote';

import { Car as CarIcon } from 'iconoir-react';
import { PlusCircle as PlusCircleIcon } from 'iconoir-react';

const consumption = [
  {
    time: '23:30',
    centilitersVolume: 50,
    alcoholContent: 10,
  },
  {
    time: '01:40',
    centilitersVolume: 40,
    alcoholContent: 10,
  },
  {
    time: '02:20',
    centilitersVolume: 30,
    alcoholContent: 10,
  },
  {
    time: '02:50',
    centilitersVolume: 45,
    alcoholContent: 10,
  },
  {
    time: '04:10',
    centilitersVolume: 10,
    alcoholContent: 70,
  },
];

function App() {
  return (
    <main class="min-h-screen bg-dark-1 px-4 pt-8 text-white">
      <h1 className="mb-2 font-crucial text-2xl">Mon alcool tracker</h1>
      <Quote
        className="mb-4"
        content="Quoi qu’il arrive, s’il y a au moins une chose qui restera positive dans votre vie : votre taux d'alcoolémie."
      />
      <p className="mb-2">
        Bienvenue dans votre application (très pratique si vous êtes alcoolique comme moi) qui donne
        votre taux d’alcoolémie.
      </p>
      <a className="underline" href="/">
        En savoir plus
      </a>
      <div className="mb-2 mt-6">
        <h2 className="font-crucial text-xl">Mon taux</h2>
      </div>
      <div className="mb-2 flex gap-2">
        <Figure number="0.25" text="g/L de sang" />
        <Figure number="0.50" text="mg/L d’air expriré" />
      </div>
      <div className="mb-6 flex text-main">
        <CarIcon className="mr-1" />
        <p>Vous êtes limite pour prendre la route</p>
      </div>
      <h2 className="mb-2 font-crucial text-xl">Mes verres</h2>
      <div className="mb-6 flex gap-2 overflow-scroll">
        {consumption.map((glass) => (
          <Card
            time={glass.time}
            centilitersVolume={glass.centilitersVolume}
            alcoholContent={glass.alcoholContent}
          />
        ))}
      </div>
      <button class="mb-6 w-full rounded-lg border border-dark-3 py-3 font-semibold uppercase active:bg-dark-2">
        Mes paramètres
      </button>
      <p className="pb-20 italic">© 2024 Alcool Tracker par Lucas Boucher</p>
      <button class="fixed bottom-4 left-4 right-4 flex justify-center rounded-lg bg-main py-4 font-semibold uppercase text-dark-1">
        <PlusCircleIcon className="mr-1" />
        Ajouter une consommation
      </button>
    </main>
  );
}

export default App;
