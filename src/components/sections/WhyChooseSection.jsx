import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { advantages } from "../../data/siteContent";

function WhyChooseSection() {
  return (
    <section id="advantages" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          kicker="Approach"
          title="A simpler, more useful way to deliver security guidance"
          description="Spectrazex focuses on clarity, realistic examples, and practical outcomes instead of overcomplicated messaging."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {advantages.map((item, index) => (
            <Reveal
              key={item.title}
              as="article"
              className="glass-panel hover-lift rounded-xl p-6"
            >
              <div className="mb-4 text-sm font-semibold text-sky-700">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseSection;
