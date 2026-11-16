
export default function Nav() {
  const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <nav className="flex items-center justify-between py-6">
      <img
        src="/assets/images/logo.svg"
        alt="Logo"
        className="h-8"
      />

      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="group relative inline-block text-very-dark-blue transition-colors duration-300 hover:text-soft-red">
              {link}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-soft-red transition-all duration-300 ease-in-out group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
