'use client';

import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const [scroll, setScroll] = useState<string | number>(0);

  const onScrollProgress = () => {
    const html = document.documentElement;
    const scrollPx = html.scrollTop;
    const winHeightPx = html.scrollHeight - html.clientHeight;
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`;

    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollProgress);

    return () => {
      window.removeEventListener("scroll", onScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 z-40 h-1.5 w-screen bg-gray-300 shadow-2xl">
      <div style={{ width: scroll }} className="h-[6px] bg-cyan-500" />
    </div>
  );
};

export default ScrollIndicator;
