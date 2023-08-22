import Link from "next/link";
import { PropsWithChildren } from "react";

interface SanityLinkProps {
  value: {
    href?: string;
  };
}

export function SanityLink({
  children,
  value,
}: PropsWithChildren<SanityLinkProps>) {
  const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
  const rel = target === "_blank" ? "noindex nofollow" : "noreferrer noopener";

  return (
    <Link
      className="text-cyan-600 hover:underline"
      href={value?.href ?? "/"}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
