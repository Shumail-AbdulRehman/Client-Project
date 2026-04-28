import Container from "../layout/Container";
import InfoCard from "../ui/InfoCard";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/siteContent";

function ServicesSection() {
  return (
    <section id="services" className="relative py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-10 h-72 bg-[radial-gradient(circle_at_center,rgba(14,116,144,0.1),transparent_68%)]" />

      <Container>
        <SectionHeading
          kicker="Services"
          title="Focused services for practical security improvement"
          description="Each service is designed to feel clear, modern, and easy to trust, with focused delivery for awareness, training, reviews, and practical security support."
        />

        <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Reveal key={service.title} className="h-full">
              <InfoCard
                eyebrow={service.eyebrow}
                title={service.title}
                description={service.description}
                highlights={service.highlights}
                image={service.image}
                imageAlt={service.imageAlt}
                emoji={service.emoji}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
