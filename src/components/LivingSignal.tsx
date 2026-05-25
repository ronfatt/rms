const signalWords = ["ideas", "sound", "video", "systems"];

export function LivingSignal() {
  return (
    <div className="living-signal mt-4 rounded-3xl border border-[#8fb7ff]/20 bg-[#8fb7ff]/10 px-4 py-4">
      <div className="living-signal__scan" aria-hidden="true" />
      <div className="relative">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8fb7ff]">
          Live Creative Engine
        </p>
        <p className="text-xl font-semibold leading-tight text-[#fff3cf]">
          I turn{" "}
          <span className="living-signal__word" aria-label="ideas">
            {signalWords.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </span>{" "}
          into cinematic systems.
        </p>
        <div className="mt-3 flex items-center gap-2" aria-hidden="true">
          <span className="living-signal__dot" />
          <span className="h-px flex-1 bg-gradient-to-r from-[#8fb7ff]/60 via-[#f3d27d]/45 to-transparent" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#cfe0ff]">
            generating
          </span>
        </div>
      </div>
    </div>
  );
}
