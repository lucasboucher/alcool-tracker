import { useEffect } from 'react';
import { useMotionValue, useTransform, animate, motion } from 'framer-motion';

function Figure({ number, text }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    return latest.toFixed(2);
  });

  useEffect(() => {
    animate(count, number, { duration: 2, ease: 'easeOut' });
  }, [count, number]);

  return (
    <div className="flex w-full flex-col justify-center rounded bg-dark-2 px-2 py-4">
      <motion.p className="mb-1 font-crucial text-4xl">{rounded}</motion.p>
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
}

export default Figure;
