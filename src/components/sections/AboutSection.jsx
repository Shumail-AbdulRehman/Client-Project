import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { aboutCards } from "../../data/siteContent";

function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          kicker="About"
          title="A cleaner approach to cyber-security education"
          description="Spectrazex is positioned as a focused startup brand: practical, direct, and built around how people really experience digital risk."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {aboutCards.map((card) => (
            <Reveal
              key={card.title}
              as="article"
              className="glass-panel rounded-xl p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{card.body}</p>

              {card.list ? (
                <ul className="mt-6 space-y-3">
                  {card.list.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600 sm:text-base">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-700" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
