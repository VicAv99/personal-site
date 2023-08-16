import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="z-30 mb-20 border-b border-zinc-300 px-6 py-3 dark:border-zinc-800 md:mb-28 md:px-16">
      <nav className="mx-auto flex max-w-6xl items-center justify-end">
        <div className="flex items-center gap-x-8">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/posts">Posts</Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
