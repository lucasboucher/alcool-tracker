import React, { useState } from 'react';

import { NavArrowDown as NavArrowDownIcon } from 'iconoir-react';
import { NavArrowUp as NavArrowUpIcon } from 'iconoir-react';
import LearnMore from '../../sections/LearnMore';

function LearnMoreButton() {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const learnMoreHandler = () => {
    setIsLearnMoreOpen((prevState) => !prevState);
  };

  return (
    <div className="relative -top-2 rounded-b-lg border border-t-0 border-dark-3">
      <button
        onClick={learnMoreHandler}
        className={`w-full rounded-b-lg px-2 pb-3 pt-5 font-medium transition-colors duration-200 ease-out active:bg-dark-2 ${isLearnMoreOpen && 'bg-dark-3'}`}
      >
        <div className="flex justify-between">
          En savoir plus
          {isLearnMoreOpen ? <NavArrowUpIcon /> : <NavArrowDownIcon />}
        </div>
      </button>
      {isLearnMoreOpen && <LearnMore className="mt-4" />}
    </div>
  );
}

export default LearnMoreButton;
