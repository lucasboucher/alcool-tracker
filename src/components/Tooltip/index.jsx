import React, { useState } from 'react';
import { motion } from 'framer-motion';

const animation = {
  visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0 } },
  hidden: { opacity: 0, y: 25, transition: { type: 'spring', bounce: 0 } },
};

function Tooltip({ trigger, content, className }) {
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  return (
    <div
      onClick={() => setTooltipVisible((prevState) => !prevState)}
      className={`relative cursor-pointer rounded border px-2 transition-colors duration-200 ease-out ${className} ${isTooltipVisible && 'text-blue'}`}
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
            {content}
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Tooltip;
