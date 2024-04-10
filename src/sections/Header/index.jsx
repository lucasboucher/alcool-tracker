import React, { useState, useEffect } from 'react';

import Quote from '../../components/Quote';
import LearnMoreButton from '../../components/LearnMoreButton';

import { getRandomAdvices } from '../../utils/helpers';

function Header({ isLearnMoreOpen, setIsLearnMoreOpen, className }) {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    setAdvice(getRandomAdvices());
  }, []);

  const learnMoreHandler = () => {
    setIsLearnMoreOpen((prevState) => !prevState);
  };

  return (
    <div className={className}>
      <h1 className="mb-2 font-crucial text-3xl">Mon alcool tracker</h1>
      <Quote content={advice} className="relative z-10" />
      <LearnMoreButton onClick={learnMoreHandler} isLearnMoreOpen={isLearnMoreOpen} />
    </div>
  );
}

export default Header;
