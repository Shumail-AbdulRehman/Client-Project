function SectionHeading({ title, description, kicker = "Overview" }) {
  return (
    <div className="mb-10 max-w-3xl">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-slate-50 sm:text-4xl">
          {title}
        </h2>
      </div>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
