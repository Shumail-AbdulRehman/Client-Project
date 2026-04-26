import ServiceArtwork from "./ServiceArtwork";

function InfoCard({ eyebrow, title, description, highlights = [], visual, emoji }) {
  return (
    <article className="glass-panel hover-lift group flex h-full flex-col overflow-hidden rounded-[30px] p-3 sm:p-4">
      <ServiceArtwork variant={visual} emoji={emoji} eyebrow={eyebrow} />

      <div className="flex flex-1 flex-col px-3 pb-3 pt-6 sm:px-4 sm:pb-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-slate-900 sm:text-[1.35rem]">{title}</h3>
          <span className="text-lg text-slate-300 transition duration-200 group-hover:text-slate-900">
            ↗
          </span>
        </div>

        <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-[0.96rem]">{description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold tracking-[0.05em] text-slate-600"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default InfoCard;
