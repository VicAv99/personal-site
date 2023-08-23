import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="z-30 mb-20 border-b border-zinc-300 px-6 py-4 dark:border-zinc-800 md:mb-24 md:px-16">
      <nav className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/">
          <h3>NovaChrome</h3>
        </Link>
        <div className="flex items-center gap-x-8">
          <Link href="/posts">Posts</Link>
          <Link href="/about">About</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
