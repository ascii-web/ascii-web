"use client";

import Image from "next/image";

interface LogoProps {
  variant?: "icon" | "full";
  className?: string;
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  const iconLogo = "/images/site-icon.png";

  const fullLogo = "/images/site-logo.png";

  return (
    <Image
      src={variant === "icon" ? iconLogo : fullLogo}
      alt='Logo'
      className={className}
      width={variant === "icon" ? 32 : 128}
      height={variant === "icon" ? 32 : 64}
    />
  );
}
