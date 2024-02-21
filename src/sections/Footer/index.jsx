function Footer({ className }) {
  return (
    <div className={className}>
      <button className="mb-2 w-full rounded-lg border border-dark-3 py-3 font-semibold uppercase transition-colors active:bg-dark-2">
        Mon profil
      </button>
      <a
        href="https://lucasboucher.fr"
        className="mb-6 block w-full rounded-lg border border-dark-3 py-3 text-center font-semibold uppercase transition-colors active:bg-dark-2"
      >
        lucasboucher.fr
      </a>
      <p className="italic">
        © 2024 <span className="font-bold">Mon alcool tracker</span>
      </p>
    </div>
  );
}

export default Footer;
