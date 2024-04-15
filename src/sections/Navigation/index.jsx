import { Link } from 'react-router-dom';

import Copyright from '../../components/Footer';
import { OpenNewWindow as OpenNewWindowIcon } from 'iconoir-react';

function Navigation({ onProfileButtonClick, onResetButtonClick, className }) {
  return (
    <div className={className}>
      <button
        onClick={onProfileButtonClick}
        className="mb-2 w-full rounded-lg border border-dark-3 py-3 font-semibold uppercase transition-colors duration-200 ease-out active:bg-dark-2"
      >
        Mon profil
      </button>
      <button
        onClick={onResetButtonClick}
        className="mb-2 w-full rounded-lg border border-dark-3 py-3 font-semibold uppercase transition-colors duration-200 ease-out active:bg-dark-2"
      >
        Réinitialiser l'application
      </button>
      <Link
        to="/changelog"
        className="mb-2 flex w-full items-center justify-center rounded-lg border border-dark-3 py-3 text-center font-semibold uppercase transition-colors duration-200 ease-out active:bg-dark-2"
      >
        Mises à jour
      </Link>
      <a
        href="http://lucasboucher.fr"
        className="flex w-full items-center justify-center rounded-lg border border-dark-3 py-3 text-center font-semibold uppercase transition-colors duration-200 ease-out active:bg-dark-2"
      >
        Lucas Boucher
        <OpenNewWindowIcon width={16} height={16} className="ml-2" />
      </a>
      <Copyright className="mt-6" />
    </div>
  );
}

export default Navigation;
