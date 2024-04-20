import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { Apple as AppleIcon } from 'iconoir-react';

function CaloriesTooltip({ value }) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div className="relative flex">
      <button
        onClick={() => setTooltipVisible((prevState) => !prevState)}
        aria-label="Voir les calories"
        className={`cursor-pointer p-3 transition duration-200 ease-out active:text-dark-1/50 ${isTooltipVisible && 'text-green active:text-green/50'}`}
      >
        <AppleIcon role="presentation" />
      </button>
      {isTooltipVisible && (
        <div className="absolute bottom-11 left-1/2 z-10 -translate-x-1/2 transform">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0 } },
              hidden: { opacity: 0, y: 25, transition: { type: 'spring', bounce: 0 } },
            }}
            className="relative w-48 rounded bg-dark-1 bg-opacity-80 px-4 py-2 text-center text-sm text-white"
          >
            <div className="absolute bottom-[-8px] left-[50%] ml-[-4px] border-4 border-transparent border-t-dark-3/90"></div>
            <p>
              Ce verre équivaut environ à <span className="font-bold">{value}</span> kcal.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default CaloriesTooltip;
