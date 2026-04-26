import Container from "./Container";
import { navigation } from "../../data/siteContent";
import Button from "../ui/Button";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#f7f4ee]/95">
      <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-xs font-black text-white">
            SX
          </span>
          <span className="text-base font-bold tracking-[0.08em] text-slate-900 uppercase md:text-lg">
            Spectrazex
          </span>
        </a>

        <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-500 md:justify-end">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-sky-700"
            >
              {item.label}
            </a>
          ))}
          <Button href="#contact" size="sm">
            Contact
          </Button>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;
