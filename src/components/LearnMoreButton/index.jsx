import React, { useState } from 'react';
import { motion } from 'framer-motion';

import LearnMore from '../../sections/LearnMore';
import { NavArrowDown as NavArrowDownIcon } from 'iconoir-react';

function LearnMoreButton() {
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const learnMoreHandler = () => {
    setIsLearnMoreOpen((prevState) => !prevState);
  };

  return (
    <div className="relative -top-2 rounded-b-lg border border-t-0 border-dark-3">
      <button
        onClick={learnMoreHandler}
        className={`flex w-full justify-between rounded-b-lg px-2 pb-3 pt-5 font-medium transition-colors duration-200 ease-out active:bg-dark-2 ${isLearnMoreOpen && 'bg-dark-3'}`}
      >
        En savoir plus
        <motion.span
          animate={isLearnMoreOpen ? 'open' : 'closed'}
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 },
          }}
          transition={{ duration: 0.2 }}
        >
          <NavArrowDownIcon />
        </motion.span>
      </button>
      {isLearnMoreOpen && <LearnMore className="mt-4" />}
    </div>
  );
}

export default LearnMoreButton;
