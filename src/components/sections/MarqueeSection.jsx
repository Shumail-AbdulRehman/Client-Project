import Container from "../layout/Container";
import Reveal from "../ui/Reveal";
import { signalItems } from "../../data/siteContent";

function MarqueeSection() {
  return (
    <section className="py-6 sm:py-8">
      <Container>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {signalItems.map((item) => (
            <Reveal
              key={item.title}
              className="rounded-3xl border border-cyan-300/10 bg-cyan-300/6 px-5 py-5"
            >
              <p className="text-sm font-semibold text-cyan-200">{item.title}</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MarqueeSection;
