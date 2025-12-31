import { useState } from 'react';

import { getRandomAdvices } from '../../utils/helpers';

import Quote from '../../components/Quote';
import LearnMoreButton from '../../components/LearnMoreButton';

function Header({ className }) {
  const [advice] = useState(() => getRandomAdvices());

  return (
    <header className={className}>
      <div className="mb-2 flex items-center">
        <h1 className="mr-2 font-crucial text-3xl">Mon alcool tracker</h1>
        <span className="rounded border px-1 py-0.5 text-xs font-medium">v1.4.0</span>
      </div>
      <Quote content={advice} className="relative" />
      <LearnMoreButton />
    </header>
  );
}

export default Header;
