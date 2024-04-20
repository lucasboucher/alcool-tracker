import { motion } from 'framer-motion';

import {
  GlassEmpty as GlassEmptyIcon,
  GlassHalf as GlassHalfIcon,
  GlassHalfAlt as GlassHalfAltIcon,
} from 'iconoir-react';

const variantsAnimation = {
  visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0 } },
  hidden: { opacity: 0, y: 50, transition: { type: 'spring', bounce: 0 } },
};

function LearnMore({ className }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      className={`px-2 pb-4 ${className}`}
      id="learn_more"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.05 }}
    >
      <motion.h2 className="mb-2 font-crucial text-xl" variants={variantsAnimation}>
        Guide de fonctionnement
      </motion.h2>
      <motion.p className="mb-2" variants={variantsAnimation}>
        Il est important de mettre <span className="font-bold">l'heure de fin</span> de consommation
        de votre verre pour que cela fonctionne. Et il suffit de{' '}
        <span className="font-bold">rafraîchir</span> la page pour avoir son taux en temps réel.
      </motion.p>
      <motion.p className="mb-2" variants={variantsAnimation}>
        L'application est très pratique puisqu’elle vous dira immédiatement si vous pouvez prendre
        la route ou jusqu’à quelle heure vous devrez attendre.
      </motion.p>
      <motion.p className="mb-3" variants={variantsAnimation}>
        De plus, selon le rapport volume/teneur de votre verre, l'icône changera automatiquement
        dans la liste.
      </motion.p>
      <motion.div className="mb-6 flex justify-between gap-3" variants={variantsAnimation}>
        <div className="flex w-full flex-col items-center justify-center gap-1 rounded bg-dark-2 py-5">
          <GlassEmptyIcon height={32} width={32} aria-label="Verre faible en alcool" />
          <p className="text-center text-green">Peu</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1 rounded bg-dark-2 py-5">
          <GlassHalfAltIcon height={32} width={32} aria-label="Verre équilibré en alcool" />
          <p className="text-center text-main">Normal</p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-1 rounded bg-dark-2 py-5">
          <GlassHalfIcon height={32} width={32} aria-label="Verre fort en alcool" />
          <p className="text-center text-red">Beaucoup</p>
        </div>
      </motion.div>
      <motion.h2 className="mb-2 font-crucial text-xl" variants={variantsAnimation}>
        Clause de non-responsabilité
      </motion.h2>
      <motion.p className="mb-2" variants={variantsAnimation}>
        Peut s'avérer utile quand on se retrouve sans éthylotest pour donner une tendance de son
        état, cependant il ne permettra jamais de remplacer la précision d'un dispositif physique et
        n'a <span className="font-bold">aucune valeur légale</span>.
      </motion.p>
      <motion.p className="mb-2" variants={variantsAnimation}>
        Cette application utilise la formule de Widmark, assez précise, mais ne prend par exemple
        pas en compte la capacité de métabolisation, le taux de digestion et la tolérance à l'alcool
        qui sont propres à chacun et peuvent être difficilement calculés. L'ingestion de nourriture
        qui n'est pas pris en compte joue un rôle, tout comme votre proportion de tissus adipeux et
        musculaires.
      </motion.p>
      <motion.p className="mb-3" variants={variantsAnimation}>
        Cette application a été conçue à des fins d'études, de pédagogie et de compréhension de son
        corps. Pour rappel, le taux limite autorisé en France est de{' '}
        <span className="font-bold">0,5 g/L</span> de sang et{' '}
        <span className="font-bold">0,2 g/L</span> quand on est permis probatoire.
      </motion.p>
      <motion.button
        onClick={scrollToTop}
        className="w-full rounded-lg bg-dark-3 py-3 font-medium transition-colors duration-200 ease-out active:bg-dark-2"
        variants={variantsAnimation}
      >
        Revenir en haut
      </motion.button>
    </motion.div>
  );
}

export default LearnMore;
