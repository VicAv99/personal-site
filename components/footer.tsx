import Link from "next/link";
import { BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import { cachedFetchClient } from "~/sanity/lib/client";
import { socialLinksQuery } from "~/sanity/lib/queries";

import { Button } from "./ui/button";

import type { IconType } from "react-icons";

export async function Footer() {
  const socialLinks = await cachedFetchClient<string[]>(socialLinksQuery);
  const socialIcons: { [key: string]: IconType } = {
    twitter: BiLogoTwitter,
    linkedin: BiLogoLinkedin,
    github: BiLogoGithub,
  };

  return (
    <footer className="mt-24 border-t border-zinc-300 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl justify-center gap-y-3 px-6 py-1 md:px-16 sm:justify-end">
        <div className="flex items-center gap-x-4">
          {Object.entries(socialLinks ?? [])
            .sort()
            .map(([key, value]) => {
              const Icon = socialIcons[key];

              return (
                <Button
                  key={key}
                  asChild
                  className="text-zinc-400"
                  variant="ghost"
                  size="sm"
                >
                  <Link href={value} rel="noreferer noopener">
                    <Icon />
                  </Link>
                </Button>
              );
            })}
        </div>
      </div>
    </footer>
  );
}
