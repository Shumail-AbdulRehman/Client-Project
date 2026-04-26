import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { certifications } from "../../data/siteContent";

function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          kicker="Knowledge Base"
          title="Certifications and technical grounding"
          description="This section stays concise and supports the brand with technical credibility without turning the page into a long CV."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {certifications.map((item) => (
            <Reveal
              key={item}
              className="glass-panel rounded-xl px-5 py-5 text-center text-sm font-medium text-slate-800"
            >
              {item}
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CertificationsSection;
