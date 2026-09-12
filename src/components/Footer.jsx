import logoImg from "../assets/logo.webp";

export default function Footer() {
  return (
    <footer
      id="about-us"
      className="w-full bg-bg-surface border-t border-accent-primary/30 pt-12 pb-8 text-text-primary"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <a href="/" className="inline-flex w-fit">
                <img src={logoImg} alt="Site Logo" width={80} height={80} />
              </a>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed max-w-xs">
              Cold-pressed botanical extractions crafted for a sustainable,
              radiant lifestyle. Pure ingredients, zero compromises.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <ul className="flex flex-col gap-2 text-sm text-zinc-300">
              <li>
                <a
                  href="#"
                  className="hover:text-accent-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-accent-primary transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-accent-primary transition-colors"
                >
                  Customer Reviews
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xl! font-bold text-text-primary uppercase tracking-wider mb-1">
              Newsletter
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Subscribe to receive 10% off your first order and essential
              botanical skincare tips.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-2 mt-1"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-bg-primary border border-border-subtle rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent-primary transition-all placeholder:text-zinc-400"
              />
              <button
                type="submit"
                className="btn btn-primary w-full text-xs py-2.5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-300">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-accent-primary">Plantie</span> All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
