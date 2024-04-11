import React, { useState, useEffect } from 'react';

import Quote from '../../components/Quote';
import LearnMoreButton from '../../components/LearnMoreButton';

import { getRandomAdvices } from '../../utils/helpers';

function Header({ className }) {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    setAdvice(getRandomAdvices());
  }, []);

  return (
    <div className={className}>
      <div className="mb-2 flex items-center">
        <h1 className="mr-2 font-crucial text-3xl">Mon alcool tracker</h1>
        <span className="rounded border px-1 py-0.5 text-xs font-medium">v1.1</span>
      </div>
      <Quote content={advice} className="relative z-10" />
      <LearnMoreButton />
    </div>
  );
}

export default Header;
