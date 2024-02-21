import Quote from '../../components/Quote';
import LearnMore from '../../components/LearnMore';
import { getRandomIdioms } from '../../utils/functions';

function Header({ className }) {
  return (
    <div className={className}>
      <h1 className="mb-2 font-crucial text-3xl">Mon alcool tracker</h1>
      <Quote content={getRandomIdioms()} className="relative z-10" />
      <LearnMore />
    </div>
  );
}

export default Header;
