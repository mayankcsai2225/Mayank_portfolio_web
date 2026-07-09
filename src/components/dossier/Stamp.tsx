import type { ReactNode, CSSProperties } from "react";

export function Stamp({
  children,
  rotate = -6,
  className = "",
  style,
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`stamp ${className}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
    >
      {children}
    </span>
  );
}

export function Paperclip({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 90"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
    >
      <path d="M20 8 C 10 8, 6 16, 6 26 L 6 70 C 6 78, 12 84, 20 84 C 28 84, 34 78, 34 70 L 34 22 C 34 16, 30 12, 24 12 C 18 12, 14 16, 14 22 L 14 66" />
    </svg>
  );
}

export function Redacted({ children }: { children: ReactNode }) {
  return <span className="redacted">{children}</span>;
}
