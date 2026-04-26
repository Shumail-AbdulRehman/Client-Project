import Container from "../layout/Container";
import InfoCard from "../ui/InfoCard";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/siteContent";

function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          kicker="Services"
          title="Focused services for practical security improvement"
          description="The offer is intentionally simple: awareness, testing, advisory, and training services that are easy to understand and easy to act on."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Reveal
              key={service.title}
            >
              <InfoCard
                eyebrow={service.eyebrow}
                title={service.title}
                description={service.description}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
