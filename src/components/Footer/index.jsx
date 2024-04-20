function Footer({ className }) {
  return (
    <footer className={`flex items-center justify-between italic ${className}`}>
      <p>
        © 2024 <span className="font-bold">Mon alcool tracker</span>
      </p>
      <img src="./lucasboucher.svg" alt="Logo de Lucas Boucher" className="mr-3 h-4 w-4" />
    </footer>
  );
}

export default Footer;
