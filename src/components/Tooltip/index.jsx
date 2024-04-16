import React, { useState } from 'react';
import { motion } from 'framer-motion';

const animation = {
  visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0 } },
  hidden: { opacity: 0, y: 25, transition: { type: 'spring', bounce: 0 } },
};

function Tooltip({ trigger, children, className }) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div
      onClick={() => setTooltipVisible((prevState) => !prevState)}
      className={`relative cursor-pointer rounded-full border px-2 transition duration-200 ease-out active:text-dark-1/50 ${className} ${isTooltipVisible && 'text-blue active:text-blue/50'}`}
    >
      {trigger}
      {isTooltipVisible && (
        <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 transform">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={animation}
            className="w-48 rounded bg-dark-1 bg-opacity-80 px-4 py-2 text-center text-sm text-white"
          >
            {children}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Tooltip;
