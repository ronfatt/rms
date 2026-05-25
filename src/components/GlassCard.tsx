import type { ComponentPropsWithoutRef } from "react";

type GlassCardProps = ComponentPropsWithoutRef<"div"> & {
  as?: "article" | "section" | "div";
};

export function GlassCard({
  as: Tag = "div",
  className = "",
  children,
  ...props
}: GlassCardProps) {
  return (
    <Tag
      className={`rounded-[28px] border border-white/10 bg-white/[0.065] shadow-[0_24px_80px_rgba(0,0,0,0.36)] backdrop-blur-xl ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
