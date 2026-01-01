function Footer({ className }) {
  const year = new Date().getFullYear();

  return (
    <footer className={`flex items-center justify-between italic ${className}`}>
      <p>
        © {year} <span className="font-bold">Mon alcool tracker</span>
      </p>
      <img src="./lucasboucher.svg" alt="Logo de Lucas Boucher" className="mr-3 size-4" />
    </footer>
  );
}

export default Footer;
