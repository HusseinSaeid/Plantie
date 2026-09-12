import logoImg from "../assets/logo.webp";
import { useEffect, useState } from "react";
import Menu from "lucide-react/dist/esm/icons/menu";
import X from "lucide-react/dist/esm/icons/x";
export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#reviews", label: "Reviews" },
  ];
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      },
    );

    links.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex items-center justify-between p-4 bg-bg-surface border-b border-border-subtle md:bg-transparent md:border-transparent sticky top-0 z-50 backdrop-blur-md">
      <div>
        <a href="/" className="flex">
          <img src={logoImg} alt="Site Logo" width={80} height={80} />
        </a>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <div className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 ease-in-out hover:text-accent-hover ${
                activeSection === link.href
                  ? "text-accent-primary"
                  : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <button
        className="hidden md:flex btn btn-primary"
        aria-label="Get Started"
      >
        Get Started
      </button>

      <button
        aria-label={open ? "Close Menu" : "Open Menu"}
        aria-expanded={open}
        className="flex md:hidden p-2 rounded-lg bg-bg-surface-elevated border border-border-subtle text-white"
        onClick={() => setOpen(!open)}
      >
        <span className="relative w-6 h-6 flex items-center justify-center">
          <X
            className={`absolute w-6 h-6 transition-all duration-300 ease-in-out ${
              open
                ? "rotate-0 opacity-100 scale-100"
                : "-rotate-90 opacity-0 scale-50"
            }`}
          />
          <Menu
            className={`absolute w-6 h-6 transition-all duration-300 ease-in-out ${
              !open
                ? "rotate-0 opacity-100 scale-100"
                : "rotate-90 opacity-0 scale-50"
            }`}
          />
        </span>
      </button>

      <div
        className={`absolute top-full left-0 right-0 z-50 flex flex-col md:hidden px-6 py-4 gap-4 backdrop-blur mt-2 bg-bg-surface/95 border border-border-subtle shadow-card transition-all duration-300 ease-in-out origin-top ${
          open
            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="text-text-secondary hover:text-accent transition-colors py-2 font-medium"
          >
            {link.label}
          </a>
        ))}
        <button className="btn btn-primary w-full mt-2">Get Started</button>
      </div>
    </nav>
  );
}
