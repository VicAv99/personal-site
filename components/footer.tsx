export function Footer() {
  return (
    <footer className="mt-44 border-t border-zinc-300 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-y-4 px-6 py-3 text-zinc-400 md:px-16 lg:flex-row lg:justify-between">
        <small className="font-mono duration-200">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>
      </div>
    </footer>
  );
}
