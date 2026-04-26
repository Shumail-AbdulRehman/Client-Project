function StatCard({ value, label }) {
  return (
    <div className="pt-1">
      <p className="text-4xl font-extrabold text-slate-900">{value}</p>
      <p className="mt-2 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
        {label}
      </p>
    </div>
  );
}

export default StatCard;
