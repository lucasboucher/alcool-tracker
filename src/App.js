import { useEffect, useState } from 'react';

import Quote from './components/Quote';

import UseLevel from './sections/UseLevel';
import Glasses from './sections/Glasses';

import { GlassEmpty as GlassEmptyIcon } from 'iconoir-react';
import { PlusCircle as PlusCircleIcon } from 'iconoir-react';

import { bloodAlcoholLevel } from './utils/consts';
import { consumption } from './utils/consts';

function App() {
  const [myConsumption, setMyConsumption] = useState(consumption);
  const [mybloodAlcoholLevel, setMyBloodAlcoholLevel] = useState(bloodAlcoholLevel);

  useEffect(() => {
    setMyBloodAlcoholLevel(mybloodAlcoholLevel - bloodAlcoholLevel / 6);
  }, [myConsumption]);

  return (
    <main className="min-h-screen px-4 pt-8 text-white">
      <div className="md:hidden">
        <h1 className="mb-2 font-crucial text-3xl">Mon alcool tracker</h1>
        <Quote
          className="mb-4"
          content="Quoi qu’il arrive, s’il y a au moins une chose qui restera positive dans votre vie : votre taux d'alcoolémie."
        />
        <p className="mb-2">
          Bienvenue dans votre application (très pratique si vous êtes alcoolique comme moi) qui
          donne votre taux d’alcoolémie.
        </p>
        <a className="underline" href="/">
          En savoir plus
        </a>
        <UseLevel bloodAlcoholLevel={mybloodAlcoholLevel} className="mb-6 mt-6" />
        <Glasses
          myConsumption={myConsumption}
          setMyConsumption={setMyConsumption}
          className="mb-6"
        />
        <button className="mb-6 w-full rounded-lg border border-dark-3 py-3 font-semibold uppercase transition-colors active:bg-dark-2">
          Mes paramètres
        </button>
        <p className="pb-20 italic">
          © 2024 <span className="font-bold">Mon alcool tracker</span> par Lucas Boucher
        </p>
        <button className="fixed bottom-4 left-4 right-4 flex justify-center rounded-lg bg-main py-4 font-semibold uppercase text-dark-1">
          <PlusCircleIcon className="mr-1" />
          Ajouter un verre
        </button>
      </div>
      <div className="hidden min-h-screen flex-col items-center justify-center px-16 md:flex">
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
      </div>
    </main>
  );
}

export default App;
