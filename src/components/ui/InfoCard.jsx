function InfoCard({ eyebrow, title, description, highlights = [], image, imageAlt, emoji }) {
  return (
    <article className="glass-panel hover-lift group flex h-full flex-col overflow-hidden rounded-[30px] p-3 sm:p-4">
      <div className="relative overflow-hidden rounded-[28px]">
        <img
          src={image}
          alt={imageAlt}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.5))]" />
        <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/88 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
          {eyebrow}
        </div>
        <div className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/60 bg-white/88 text-lg shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
          {emoji}
        </div>
      </div>

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
