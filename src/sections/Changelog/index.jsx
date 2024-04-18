import { useEffect } from 'react';
import { Link, ScrollRestoration } from 'react-router-dom';
import { motion } from 'framer-motion';

import Footer from '../../components/Footer';
import VersionTitle from '../../components/VersionTitle';
import ChangelogCaption from '../../components/ChangelogCaption';
import { ArrowLeftCircle as ArrowLeftCircleIcon } from 'iconoir-react';

function Changelog() {
  useEffect(() => {
    const defaultTitle = document.title;
    document.title = 'Changelog - Mon alcool tracker';

    return () => {
      document.title = defaultTitle;
    };
  }, []);

  return (
    <>
      <div className="mx-auto max-w-screen-md px-4 pb-24 pt-8 text-white">
        <div className="mb-4 flex items-center">
          <h1 className="mr-2 font-crucial text-3xl">Mon alcool tracker</h1>
          <span className="rounded border px-1 py-0.5 text-xs font-medium uppercase">MàJ</span>
        </div>
        <ChangelogCaption className="mb-4" />
        <VersionTitle version="1.4" name="Réglages" state="wip" className="mb-2" />
        <ul className="mb-6 list-disc pl-5">
          <li className="opacity-50">Conformité d'accessibilité niveau AA</li>
          <li className="opacity-50">Rafraichissement automatique du taux d'alcool dans le sang</li>
          <li className="opacity-50">Nouvelles icônes dynamiques pour les verres</li>
          <li className="opacity-50">
            Nouveau bloc graphique, avec évolution de son alcoolémie dans le temps
          </li>
          <li className="opacity-50">Possibilité de sauvegarder rapidement son état actuel</li>
          <li className="opacity-50">Possibilité de slider pour voir les autres états de santé</li>
          <li className="opacity-50">Possibilité de changer l'heure du résultat</li>
        </ul>
        <VersionTitle version="1.3" name="Verres" state="current" className="mb-2" />
        <h3 className="text-lg">v1.3.1</h3>
        <ul className="mb-2 list-disc pl-5">
          <li>Limitations au niveau de la teneur et du volume quand on ajoute un verre</li>
        </ul>
        <h3 className="text-lg">v1.3.0</h3>
        <ul className="mb-6 list-disc pl-5">
          <li>Raccourci pour ajouter un nouveau verre dans le carousel des consommations</li>
          <li>
            Améliorations dans les mises à jour : copyright, espacements et titres par version
          </li>
          <li>Nouvelle animation pour les verres</li>
          <li>Amélioration de l'animation d'apparition des modales</li>
          <li>
            Le scroll ne devrait plus être possible sur Safari mobile quand on est dans une modale
          </li>
          <li>Pluriel/singulier dynamique pour le résultat de conduite</li>
          <li>
            Arrondissement des minutes quand il reste moins d'une heure avant de pouvoir conduire
          </li>
          <li>
            Informations sur son état d'ivresse avec les symptômes et risques dans la partie
            statistiques
          </li>
          <li>Possibilité d'éditer ses verres au lieu de simplement supprimer</li>
          <li>
            Informations sur les calories de chacun de ses verres sous la forme d'une infobulle
          </li>
        </ul>
        <VersionTitle version="1.2" name="Animations" state="old" className="mb-2" />
        <ul className="mb-6 list-disc pl-5">
          <li>Page "Mises à jour" (vous y êtes 👋)</li>
          <li>Bouton pour remonter en haut de la page quand on est sur "En savoir plus"</li>
          <li>Correction d'un bug où l'on ne voyait plus l'heure du verre à supprimer</li>
          <li>
            Nouveau système de modales plus performantes réglant un problème de positionnement au
            scroll
          </li>
          <li>Harmonisation des transitions et implémentation d'animations</li>
          <li>Suppression automatique de ses verres après 24h</li>
          <li>Affichage de ses verres dans l'ordre chronologique</li>
          <li>Scroll bloqué quand on est sur une modale</li>
          <li>Focus du fond du verre qu'on sélectionne</li>
        </ul>
        <VersionTitle version="1.1" name="Conduite" state="old" className="mb-2" />
        <ul className="mb-6 list-disc pl-5">
          <li>Nouveau design pour l'heure de conduite</li>
          <li>Nombre d'heures et de minutes avant l'heure de conduite</li>
          <li>Nouveau design pour le bloc "En savoir plus"</li>
          <li>Version à côté du titre</li>
        </ul>
        <VersionTitle version="1.0" name="Initialisation" state="old" className="mb-2" />
        <ul className="list-disc pl-5">
          <li>Bloc de citations, actualités, faits divers et conseils sur l'alcool</li>
          <li>Bloc "En savoir plus" avec guide et clause de non-responsabilité</li>
          <li>Ajout, affichage et suppression de ses verres (Volume, heure et teneur)</li>
          <li>Calcul du taux d'alcoolémie selon sa consommation</li>
          <li>
            Calcul de l'heure de conduite pour la législation française selon permis probatoire
          </li>
          <li>Gestion de son profil (Genre, poids et permis probatoire)</li>
        </ul>
        <Footer className="mt-6" />
      </div>
      <motion.div
        className="fixed bottom-4 left-4 right-4 mx-auto max-w-screen-md rounded-lg bg-gradient-to-r from-main to-main-2 shadow-2xl"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.2 },
        }}
      >
        <Link
          to="/"
          className="flex h-full w-full justify-center py-4 font-semibold uppercase text-dark-1"
        >
          <ArrowLeftCircleIcon className="mr-1" />
          Revenir à l'accueil
        </Link>
      </motion.div>
      <ScrollRestoration />
    </>
  );
}

export default Changelog;
