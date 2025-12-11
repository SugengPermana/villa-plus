import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-sky-600 to-sky-500 text-white shadow-lg shadow-sky-500/30 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-sky-500/35",
  ghost:
    "border border-slate-300 text-slate-800 bg-white/70 backdrop-blur hover:border-slate-400 hover:bg-white",
};

export function Button({ children, href, variant = "primary" }: ButtonProps) {
  const className = `${baseClasses} ${variants[variant]}`;
  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return <button className={className}>{children}</button>;
}

