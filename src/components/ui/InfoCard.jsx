function InfoCard({ eyebrow, title, description }) {
  return (
    <article className="glass-panel hover-lift rounded-xl p-6">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.12em] text-sky-700 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

export default InfoCard;
