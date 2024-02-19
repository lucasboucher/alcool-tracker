import Quote from './components/Quote';

function App() {
  return (
    <main class="bg-dark-1 text-white min-h-screen px-4 pt-8">
      <h1 className="font-crucial text-2xl mb-2">Mon alcool tracker</h1>
      <Quote content="Quoi qu’il arrive, s’il y a au moins une chose qui restera positive dans votre vie : votre taux d'alcoolémie." />
    </main>
  );
}

export default App;
