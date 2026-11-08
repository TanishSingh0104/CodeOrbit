
import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

type CodeOrbitIconProps = SVGProps<SVGSVGElement> & {
  variant?: "color" | "mono";
};

export function CodeOrbitIcon({
  className,
  variant = "color",
  ...props
}: CodeOrbitIconProps) {
  const mono = variant === "mono";

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <rect
        width="64"
        height="64"
        rx="15"
        fill={mono ? "currentColor" : "#0D9488"}
      />
      <path
        d="M22 30l7 7-7 7"
        stroke={mono ? "var(--background)" : "#FFFFFF"}
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 44h15"
        stroke={mono ? "var(--background)" : "#FFFFFF"}
        strokeWidth="3.25"
        strokeLinecap="round"
      />
      <rect
        x="47"
        y="42.25"
        width="3"
        height="3.5"
        rx="0.75"
        fill={mono ? "var(--background)" : "#FFFFFF"}
      />
    </svg>
  );
}

export function CodeOrbitLogo({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 300 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("shrink-0", className)}
      {...props}
    >
      <rect width="64" height="64" rx="15" fill="#0D9488" />

      <path
        d="M22 30l7 7-7 7"
        stroke="#FFFFFF"
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M33 44h15"
        stroke="#FFFFFF"
        strokeWidth="3.25"
        strokeLinecap="round"
      />

      <rect
        x="47"
        y="42.25"
        width="3"
        height="3.5"
        rx="0.75"
        fill="#FFFFFF"
      />

      <text
        x="80"
        y="43"
        fill="currentColor"
        fontSize="30"
        fontWeight="700"
        fontFamily="Arial, sans-serif"
        letterSpacing="-1"
      >
        CodeOrbit
      </text>
    </svg>
  );
}
