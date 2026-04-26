import Container from "../layout/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import StatCard from "../ui/StatCard";
import TypewriterText from "../ui/TypewriterText";
import { heroMetrics, highlightCards } from "../../data/siteContent";

function HeroSection() {
  return (
    <section id="home" className="relative py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal className="enter-delay-1 mx-auto max-w-4xl text-center">
          <p className="section-kicker hero-text-reveal hero-text-delay-1">
            Cyber clarity for modern teams
          </p>

          <TypewriterText
            as="h1"
            delay={280}
            speed={32}
            text="Practical cyber security support for startups, teams, and communities."
            className="mt-5 text-balance text-4xl font-bold leading-tight tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-[4.2rem]"
          />

          <p className="hero-text-reveal hero-text-delay-3 mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Spectrazex helps people understand digital risk, improve security habits, and respond
            better to phishing, scams, weak account practices, and everyday online threats.
          </p>

          <div className="hero-text-reveal hero-text-delay-4 mt-8 flex flex-wrap justify-center gap-3">
            <Button href="#contact">Book a Consultation</Button>
            <Button href="#services" variant="secondary">
              Explore Services
            </Button>
          </div>

          <div className="mt-14 grid gap-6 border-t border-slate-200 pt-8 sm:grid-cols-3">
            {heroMetrics.map((metric) => (
              <StatCard key={metric.label} value={metric.value} label={metric.label} />
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {highlightCards.map((card) => (
            <Reveal
              key={card.title}
              className="glass-panel rounded-xl p-5"
            >
              <p className="text-sm font-semibold text-sky-700">{card.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">{card.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
