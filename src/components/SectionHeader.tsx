type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeader({ eyebrow, title, copy }: SectionHeaderProps) {
  return (
    <div className="mb-5">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7bc74]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-normal text-[#fff8ea]">
        {title}
      </h2>
      {copy ? (
        <p className="mt-2 text-sm leading-6 text-[#c8c1b6]">{copy}</p>
      ) : null}
    </div>
  );
}
