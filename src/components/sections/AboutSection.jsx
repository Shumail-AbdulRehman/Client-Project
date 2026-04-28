import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { aboutCards, aboutFeature } from "../../data/siteContent";

function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          kicker="About"
          title="A cleaner approach to cyber-security education"
          description="Spectrazex is positioned as a focused startup brand: practical, direct, and built around how people really experience digital risk."
        />

        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="grid gap-6">
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

          <Reveal className="glass-panel overflow-hidden rounded-[28px] p-3 sm:p-4">
            <div className="relative overflow-hidden rounded-[24px]">
              <img
                src={aboutFeature.image}
                alt={aboutFeature.alt}
                className="h-[18rem] w-full object-cover sm:h-[22rem]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.55))]" />
              <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/88 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-700">
                {aboutFeature.badge}
              </div>
            </div>

            <div className="px-3 pb-3 pt-6 sm:px-4 sm:pb-4">
              <h3 className="text-xl font-semibold text-slate-900 sm:text-[1.35rem]">{aboutFeature.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                {aboutFeature.description}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
