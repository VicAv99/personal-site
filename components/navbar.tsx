import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="z-30 mb-20 border-b border-zinc-300 px-6 py-6 dark:border-zinc-800 md:mb-28 md:px-16">
      <div className="mx-auto flex max-w-6xl items-center justify-end">
        <nav>
          <div className="flex items-center gap-x-8">
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
