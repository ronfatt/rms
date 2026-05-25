type StudioMetric = {
  value: string;
  label: string;
};

type StudioMetricsProps = {
  metrics: StudioMetric[];
};

export function StudioMetrics({ metrics }: StudioMetricsProps) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-2" aria-label="Studio highlights">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="min-h-[82px] rounded-3xl border border-white/10 bg-white/[0.055] p-3"
        >
          <p className="text-xl font-semibold text-[#fff8ea]">{metric.value}</p>
          <p className="mt-1 text-[11px] leading-4 text-[#b9b1a4]">
            {metric.label}
          </p>
        </div>
      ))}
    </div>
  );
}
