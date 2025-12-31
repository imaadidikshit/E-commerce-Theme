import type { SVGProps } from "react";

export function AetherLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <title>Aether Logo</title>
      {/* Outer circle */}
      <circle cx="50" cy="50" r="48" />
      {/* Inner 'A' shape - abstract */}
      <path d="M50 15 L25 85" />
      <path d="M50 15 L75 85" />
      <path d="M37.5 50 L62.5 50" />
    </svg>
  );
}
