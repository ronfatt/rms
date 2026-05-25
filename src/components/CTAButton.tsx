import type { ComponentPropsWithoutRef } from "react";

type CTAButtonProps = ComponentPropsWithoutRef<"a"> & {
  tone?: "primary" | "secondary";
};

export function CTAButton({
  tone = "primary",
  className = "",
  children,
  ...props
}: CTAButtonProps) {
  const tones = {
    primary:
      "bg-[#f3d27d] text-[#101010] shadow-[0_14px_34px_rgba(211,172,87,0.28)] hover:bg-[#ffe29a]",
    secondary:
      "border border-white/12 bg-white/[0.07] text-[#f7f3ea] hover:bg-white/[0.11]",
  };

  return (
    <a
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition duration-200 active:scale-[0.98] ${tones[tone]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
