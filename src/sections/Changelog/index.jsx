import { Link, ScrollRestoration } from 'react-router-dom';

import { ArrowLeftCircle as ArrowLeftCircleIcon } from 'iconoir-react';

function Changelog() {
  return (
    <>
      <div className="mx-auto max-w-screen-md px-4 pb-24 pt-8 text-white">
        <div className="mb-4 flex items-center">
          <h1 className="mr-2 font-crucial text-3xl">Mon alcool tracker</h1>
          <span className="rounded border px-1 py-0.5 text-xs font-medium uppercase">MàJ</span>
        </div>
        <div className="mb-4 rounded-lg bg-dark-2 p-4">
          <h2 className="text-sm font-bold uppercase">Légende</h2>
          <hr className="mt-2 border-dark-3 pb-2" />
          <div className="flex items-center">
            <span className="mr-2 h-2 w-2 rounded-full bg-green"></span>
            <p>Version actuelle</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 h-2 w-2 rounded-full bg-main"></span>
            <p>En cours de développement</p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 h-2 w-2 rounded-full bg-red"></span>
            <p>Ancienne version</p>
          </div>
        </div>
        <div className="mb-2 flex items-center">
          <h2 className="font-crucial text-xl">v1.2</h2>
          <div className="relative ml-2 flex h-3 w-3 items-center justify-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-main opacity-75"></span>
            <span className="h-2 w-2 rounded-full bg-main"></span>
          </div>
        </div>
        <ul className="mb-4 list-disc pl-5">
          <li>Page "Mises à jour" (vous y êtes 👋)</li>
          <li>Bouton pour remonter en haut de la page quand on est sur "En savoir plus"</li>
          <li>Correction d'un bug où l'on ne voyait plus l'heure du verre à supprimer</li>
          <li>
            Nouveau système de modales plus performantes réglant un problème de positionnement au
            scroll
          </li>
          <li>Harmonisation des transitions, implémentation de micro-animations, ...</li>
          <li className="opacity-50">Animation des modales</li>
          <li className="opacity-50">Suppression automatique de ses verres après 24h</li>
          <li className="opacity-50">Affichage de ses verres dans l'ordre chronologique</li>
        </ul>
        <div className="mb-2 flex items-center">
          <h2 className="font-crucial text-xl">v1.1</h2>
          <div className="relative ml-2 flex h-3 w-3 items-center justify-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-green opacity-75"></span>
            <span className="h-2 w-2 rounded-full bg-green"></span>
          </div>
        </div>
        <ul className="mb-4 list-disc pl-5">
          <li>Nouveau design pour l'heure de conduite</li>
          <li>Nombre d'heures et de minutes avant l'heure de conduite</li>
          <li>Nouveau design pour le bloc "En savoir plus"</li>
          <li>Version à côté du titre</li>
        </ul>
        <div className="mb-2 flex items-center">
          <h2 className="font-crucial text-xl">v1.0</h2>
          <span className="ml-2 h-2 w-2 rounded-full bg-red"></span>
        </div>
        <ul className="list-disc pl-5">
          <li>Initialisation de l'application</li>
          <li>Bloc de citations, actualités, faits divers et conseils sur l'alcool</li>
          <li>Bloc "En savoir plus" avec guide et clause de non-responsabilité</li>
          <li>Ajout, affichage et suppression de ses verres (Volume, heure et teneur)</li>
          <li>Calcul du taux d'alcoolémie selon sa consommation</li>
          <li>
            Calcul de l'heure de conduite pour la législation française selon permis probatoire
          </li>
          <li>Gestion de son profil (Genre, poids et permis probatoire)</li>
        </ul>
      </div>
      <Link
        to="/"
        className="fixed bottom-4 left-4 right-4 mx-auto flex max-w-screen-md justify-center rounded-lg bg-main py-4 font-semibold uppercase text-dark-1 active:bg-main-2"
      >
        <ArrowLeftCircleIcon className="mr-1" />
        Revenir à l'accueil
      </Link>
      <ScrollRestoration />
    </>
  );
}

export default Changelog;
