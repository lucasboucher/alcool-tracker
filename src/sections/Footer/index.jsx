function Footer({ className }) {
  return (
    <div className={className}>
      <button className="mb-6 w-full rounded-lg border border-dark-3 py-3 font-semibold uppercase transition-colors active:bg-dark-2">
        Mes paramètres
      </button>
      <p className="italic">
        © 2024 <span className="font-bold">Mon alcool tracker</span> par Lucas Boucher
      </p>
    </div>
  );
}

export default Footer;
