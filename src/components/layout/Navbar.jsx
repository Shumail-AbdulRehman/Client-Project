import { useEffect, useState } from "react";
import Container from "./Container";
import { navigation } from "../../data/siteContent";

function Navbar({ activeSection = "#home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeSection]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-[#f7f4ee]/88 backdrop-blur-xl">
      <Container className="py-3 md:flex md:items-center md:justify-between md:gap-6">
        <div className="flex items-center justify-between gap-4">
          <a href="#home" className="flex items-center gap-3 leading-none">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-900 text-xs font-black text-white shadow-[0_14px_28px_rgba(15,23,42,0.16)]">
              SX
            </span>
            <span className="text-base font-bold leading-none tracking-[0.08em] text-slate-900 uppercase md:text-lg">
              Spectrazex
            </span>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-900 transition hover:border-slate-300 md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? "translate-y-[0.45rem] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[0.45rem] block h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[0.9rem] block h-0.5 w-5 rounded-full bg-current transition ${
                  isMenuOpen ? "-translate-y-[0.45rem] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? "mt-4 grid" : "hidden"
          } gap-2 border-t border-slate-200/80 pt-4 md:mt-0 md:flex md:flex-wrap md:items-center md:justify-end md:gap-2 md:border-0 md:pt-0`}
        >
          {navigation.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsMenuOpen(false)}
                className={`inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-[0_12px_28px_rgba(15,23,42,0.16)]"
                    : "text-slate-600 hover:bg-white hover:text-slate-900"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
