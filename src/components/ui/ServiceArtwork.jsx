const themeClasses = {
  awareness:
    "bg-[linear-gradient(135deg,rgba(14,116,144,0.2),rgba(255,255,255,0.92)_55%,rgba(186,230,253,0.85))]",
  workshops:
    "bg-[linear-gradient(135deg,rgba(59,130,246,0.18),rgba(255,255,255,0.93)_55%,rgba(219,234,254,0.85))]",
  training:
    "bg-[linear-gradient(135deg,rgba(34,197,94,0.18),rgba(255,255,255,0.93)_55%,rgba(220,252,231,0.9))]",
  testing:
    "bg-[linear-gradient(135deg,rgba(99,102,241,0.2),rgba(255,255,255,0.93)_55%,rgba(224,231,255,0.88))]",
  social:
    "bg-[linear-gradient(135deg,rgba(236,72,153,0.18),rgba(255,255,255,0.93)_55%,rgba(252,231,243,0.88))]",
};

function AwarenessArtwork() {
  return (
    <div className="relative mx-auto flex h-full max-w-[18rem] items-center justify-center">
      <div className="absolute left-4 top-5 rounded-2xl border border-white/70 bg-white/80 px-3 py-2 shadow-[0_16px_34px_rgba(15,23,42,0.08)]">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-400">
          Inbox
        </p>
        <div className="mt-2 h-2 w-24 rounded-full bg-slate-200" />
        <div className="mt-2 h-2 w-[4.5rem] rounded-full bg-rose-200" />
      </div>

      <div className="relative mt-10 flex h-32 w-32 items-center justify-center rounded-[2rem] border border-sky-200/80 bg-white/90 shadow-[0_20px_45px_rgba(14,116,144,0.14)]">
        <div className="absolute inset-5 rounded-[1.4rem] border border-sky-100 bg-sky-50" />
        <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-600 text-2xl text-white">
          🛡️
        </div>
      </div>

      <div className="float-soft absolute bottom-5 right-4 rounded-full border border-white/75 bg-white/90 px-3 py-1.5 text-xs font-semibold text-sky-700 shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
        Suspicious link
      </div>
    </div>
  );
}

function WorkshopsArtwork() {
  return (
    <div className="relative mx-auto flex h-full max-w-[18rem] items-center justify-center">
      <div className="relative mt-6 w-full max-w-[15rem] rounded-[1.8rem] border border-sky-100/80 bg-white/88 p-4 shadow-[0_20px_40px_rgba(59,130,246,0.12)]">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-sky-500" />
          <div className="h-3 w-3 rounded-full bg-amber-400" />
          <div className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="mt-4 rounded-2xl bg-slate-900 px-4 py-5 text-white">
          <div className="h-2 w-20 rounded-full bg-white/30" />
          <div className="mt-3 grid grid-cols-4 gap-2">
            <div className="h-10 rounded-xl bg-sky-400/85" />
            <div className="h-7 rounded-xl bg-white/20" />
            <div className="h-12 rounded-xl bg-cyan-300/80" />
            <div className="h-5 rounded-xl bg-white/15" />
          </div>
        </div>
      </div>

      <div className="float-soft absolute -left-1 bottom-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/75 bg-white/90 text-xl shadow-[0_14px_28px_rgba(15,23,42,0.08)]">
        🎤
      </div>
      <div className="float-soft float-delay-1 absolute right-2 top-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/75 bg-white/90 text-lg shadow-[0_14px_28px_rgba(15,23,42,0.08)]">
        👥
      </div>
    </div>
  );
}

function TrainingArtwork() {
  return (
    <div className="relative mx-auto flex h-full max-w-[18rem] items-center justify-center">
      <div className="relative mt-6 w-full max-w-[15rem] rounded-[1.8rem] border border-emerald-100/80 bg-white/90 p-4 shadow-[0_20px_40px_rgba(34,197,94,0.12)]">
        <div className="rounded-[1.4rem] bg-slate-950 p-4 text-emerald-300">
          <div className="h-2 w-[4.5rem] rounded-full bg-emerald-300/45" />
          <div className="mt-4 space-y-2">
            <div className="h-2 w-full rounded-full bg-white/10" />
            <div className="h-2 w-4/5 rounded-full bg-emerald-300/70" />
            <div className="h-2 w-3/5 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <div className="flex-1 rounded-2xl bg-emerald-50 px-3 py-3">
            <div className="h-2 w-12 rounded-full bg-emerald-200" />
            <div className="mt-2 h-8 rounded-xl bg-emerald-500/80" />
          </div>
          <div className="w-16 rounded-2xl bg-slate-100" />
        </div>
      </div>

      <div className="float-soft absolute left-2 top-6 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-xs font-semibold text-emerald-700 shadow-[0_14px_28px_rgba(15,23,42,0.08)]">
        Practice
      </div>
    </div>
  );
}

function TestingArtwork() {
  return (
    <div className="relative mx-auto flex h-full max-w-[18rem] items-center justify-center">
      <div className="relative mt-6 w-full max-w-[15rem] rounded-[1.8rem] border border-indigo-100/80 bg-white/90 p-4 shadow-[0_20px_40px_rgba(99,102,241,0.12)]">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-indigo-400" />
          <div className="h-3 w-3 rounded-full bg-slate-200" />
          <div className="h-3 w-3 rounded-full bg-slate-200" />
        </div>
        <div className="mt-4 rounded-[1.4rem] border border-indigo-100 bg-indigo-50 p-4">
          <div className="h-2 w-20 rounded-full bg-indigo-200" />
          <div className="mt-4 grid grid-cols-[1fr_auto] gap-3">
            <div className="space-y-2">
              <div className="h-2 rounded-full bg-white" />
              <div className="h-2 w-4/5 rounded-full bg-indigo-200" />
              <div className="h-2 w-3/5 rounded-full bg-white" />
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white">
              🔎
            </div>
          </div>
        </div>
      </div>

      <div className="float-soft float-delay-1 absolute right-2 bottom-6 rounded-full border border-white/75 bg-white/92 px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-[0_14px_28px_rgba(15,23,42,0.08)]">
        Scan + review
      </div>
    </div>
  );
}

function SocialArtwork() {
  return (
    <div className="relative mx-auto flex h-full max-w-[18rem] items-center justify-center">
      <div className="relative mt-4 flex h-44 w-28 items-center justify-center rounded-[2rem] border border-rose-100/80 bg-white/92 p-3 shadow-[0_20px_40px_rgba(236,72,153,0.12)]">
        <div className="w-full rounded-[1.4rem] bg-rose-50 p-3">
          <div className="mx-auto h-10 w-10 rounded-full bg-rose-200" />
          <div className="mx-auto mt-3 h-2 w-12 rounded-full bg-rose-300" />
          <div className="mx-auto mt-2 h-2 w-16 rounded-full bg-white" />
          <div className="mt-4 space-y-2">
            <div className="h-10 rounded-2xl bg-white" />
            <div className="h-8 rounded-2xl bg-rose-100" />
          </div>
        </div>
      </div>

      <div className="float-soft absolute left-0 top-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/75 bg-white/90 text-lg shadow-[0_14px_28px_rgba(15,23,42,0.08)]">
        ✅
      </div>
      <div className="float-soft float-delay-2 absolute right-0 bottom-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/75 bg-white/90 text-xl shadow-[0_14px_28px_rgba(15,23,42,0.08)]">
        🔐
      </div>
    </div>
  );
}

function ServiceArtwork({ variant = "awareness", emoji, eyebrow }) {
  const artwork = {
    awareness: <AwarenessArtwork />,
    workshops: <WorkshopsArtwork />,
    training: <TrainingArtwork />,
    testing: <TestingArtwork />,
    social: <SocialArtwork />,
  }[variant];

  return (
    <div
      className={`relative min-h-60 overflow-hidden rounded-[28px] border border-white/70 p-5 sm:p-6 ${themeClasses[variant] ?? themeClasses.awareness}`}
    >
      <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-white/50 blur-2xl" />
      <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-white/65 blur-3xl" />

      <div className="relative flex items-start justify-between">
        <span className="rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-slate-500 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
          {eyebrow}
        </span>
        <span className="float-soft flex h-11 w-11 items-center justify-center rounded-2xl border border-white/70 bg-white/85 text-lg shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
          {emoji}
        </span>
      </div>

      {artwork}
    </div>
  );
}

export default ServiceArtwork;
