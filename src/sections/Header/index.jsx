import Quote from '../../components/Quote';
import LearnMore from '../../components/LearnMore';

function Header({ className }) {
  return (
    <div className={className}>
      <h1 className="mb-2 font-crucial text-3xl">Mon alcool tracker</h1>
      <Quote
        content="Quoi qu’il arrive, s’il y a au moins une chose qui restera positive dans votre vie : votre taux d'alcoolémie."
        className="relative z-10"
      />
      <LearnMore />
    </div>
  );
}

export default Header;
