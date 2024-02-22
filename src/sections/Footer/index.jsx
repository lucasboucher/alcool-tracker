import { OpenNewWindow as OpenNewWindowIcon } from 'iconoir-react';

function Footer({ onProfileClick, className }) {
  return (
    <div className={className}>
      <button
        onClick={onProfileClick}
        className="mb-2 w-full rounded-lg border border-dark-3 py-3 font-semibold uppercase transition-colors active:bg-dark-2"
      >
        Mon profil
      </button>
      <a
        href="https://lucasboucher.fr"
        className="mb-6 flex w-full items-center justify-center rounded-lg border border-dark-3 py-3 text-center font-semibold uppercase transition-colors active:bg-dark-2"
      >
        Lucas Boucher
        <OpenNewWindowIcon width={16} height={16} className="ml-2" />
      </a>
      <div className="flex items-center justify-between italic">
        <p>
          © 2024 <span className="font-bold">Mon alcool tracker</span>
        </p>
        <img src="./lucasboucher.svg" alt="Logo de Lucas Boucher" className="mr-3 h-4 w-4" />
      </div>
    </div>
  );
}

export default Footer;
