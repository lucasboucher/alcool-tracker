import Figure from './components/Figure';
import Quote from './components/Quote';

import { Car as CarIcon } from 'iconoir-react';

function App() {
  return (
    <main class="bg-dark-1 text-white min-h-screen px-4 pt-8">
      <h1 className="font-crucial text-2xl mb-2">Mon alcool tracker</h1>
      <Quote className="mb-4" content="Quoi qu’il arrive, s’il y a au moins une chose qui restera positive dans votre vie : votre taux d'alcoolémie." />
      <p className='mb-2'>Bienvenue dans votre application (très pratique si vous êtes alcoolique comme moi) qui donne votre taux d’alcoolémie .</p>
      <a className="underline" href="/">En savoir plus</a>
      <div className='mt-6 mb-2'>
        <h2 className='font-crucial text-xl'>Mon taux</h2>
      </div>
      <div className="flex gap-2 mb-2">
        <Figure number="0.25" text="g/L de sang" />
        <Figure number="0.50" text="mg/L d’air expriré" />
      </div>
      <div className='flex text-main'>
        <CarIcon className='mr-1' />
        <p>Vous êtes limite pour prendre la route</p>
      </div>
    </main>
  );
}

export default App;
