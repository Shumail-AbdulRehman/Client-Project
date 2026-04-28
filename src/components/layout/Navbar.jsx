import { useEffect, useState } from "react";
import Container from "./Container";
import { navigation } from "../../data/siteContent";
import brandLogo from "../../../WhatsApp Image 2026-04-26 at 4.07.34 PM.jpeg";

function Navbar({ activeSection = "#home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [activeSection]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071321]/82 backdrop-blur-xl">
      <Container className="py-3 md:flex md:items-center md:justify-between md:gap-6">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="inline-flex min-w-0 items-center gap-3 pr-3"
          >
            <span className="inline-flex h-17 w-25 shrink-0 items-center justify-center overflow-hidden rounded-2xl  border border-white/10 bg-[#040b14] shadow-[0_18px_38px_rgba(2,12,27,0.34)]">
              <img
                src={brandLogo}
                alt="Spectrazex logo"
                className="h-full w-full scale-[1.65] object-cover object-[center_24%]"
              />
            </span>
            <span className="truncate text-base font-bold tracking-[0.08em] text-white uppercase sm:text-lg">
              Spectrazex
            </span>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-white transition hover:border-white/20 hover:bg-white/12 md:hidden"
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
          } gap-2 border-t border-white/10 pt-4 md:mt-0 md:flex md:flex-wrap md:items-center md:justify-end md:gap-2 md:border-0 md:pt-0`}
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
                    ? "bg-sky-300 text-slate-950 shadow-[0_12px_28px_rgba(34,211,238,0.22)]"
                    : "text-slate-200 hover:bg-white/10 hover:text-white"
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
