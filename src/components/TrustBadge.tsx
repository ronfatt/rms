type TrustBadgeProps = {
  label: string;
};

export function TrustBadge({ label }: TrustBadgeProps) {
  return (
    <div className="min-h-11 rounded-2xl border border-[#d8bd74]/20 bg-[#d8bd74]/10 px-4 py-3 text-sm font-medium text-[#f3e3b6]">
      {label}
    </div>
  );
}
