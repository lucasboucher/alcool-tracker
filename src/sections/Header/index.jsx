import Quote from '../../components/Quote';

function Header({ className }) {
  return (
    <div className={className}>
      <h1 className="mb-2 font-crucial text-3xl">Mon alcool tracker</h1>
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
    </div>
  );
}

export default Header;
