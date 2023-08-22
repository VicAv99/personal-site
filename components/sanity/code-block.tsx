"use client";

import { useTheme } from "next-themes";
import { Highlight, themes } from "prism-react-renderer";
import { useState } from "react";
import { BiCheck, BiCopy } from "react-icons/bi";
import { useCopyToClipboard } from "~/lib/hooks/use-copy-to-clipboard";
import { useIsClient } from "~/lib/hooks/use-is-client";

import { Button } from "../ui/button";

interface CodeBlockProps {
  code: string;
  filename: string;
  language: string;
  highlightedLines: number[];
}

export function CodeBlock({
  code,
  filename,
  language,
  highlightedLines,
}: CodeBlockProps) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const [copiedTextIcon, setCopiedTextIcon] = useState(!!copiedText);

  const isClient = useIsClient();
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "light" ? themes.github : themes.vsDark;

  const copy = () => {
    copyToClipboard(code);
    setCopiedTextIcon(true);
    setTimeout(() => setCopiedTextIcon(false), 1100);
  };

  const checkLine = (index: number) => {
    if (highlightedLines === undefined) return;
    return highlightedLines.includes(index);
  };

  if (!isClient) return null;

  const CopyIcon = copiedTextIcon ? BiCheck : BiCopy;

  return (
    <div className="border dark:border-accent-5/50 shadow-lg dark:shadow-none bg-accent-4/10 dark:bg-accent-5/25 px-3 pb-3 pt-1 rounded-xl my-6">
      <div className="flex justify-between mb-1">
        <div className="flex">
          {filename ? <p className="opacity-70 pr-4">{filename}</p> : null}
          {language !== "batchfile" ? (
            <p>
              lang: <span className="opacity-70">{language}</span>
            </p>
          ) : null}
        </div>

        <Button variant={"outline"} onClick={copy}>
          <CopyIcon width={30} height={30} />
        </Button>
      </div>
      <div className=" py-4 bg-accent-solid-white shadow dark:bg-accent-5/50  max-h-[36rem] sm:max-h-[46rem] rounded-lg overflow-y-scroll scrollbar-hide">
        <Highlight theme={theme} code={code} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} !bg-transparent px-2`} style={style}>
              {tokens.map((line, i) => {
                const { key, ...lineProps } = getLineProps({ line, key: i });
                if (checkLine(i + 1)) {
                  lineProps.className = `${lineProps.className} bg-[#fef3c8] dark:bg-[#27261c]`;
                }
                return (
                  <div key={Math.random()} {...lineProps}>
                    {line.map((token, lineKey) => {
                      const { key, ...tokenProps } = getTokenProps({
                        token,
                        key: lineKey,
                      });
                      return <span key={lineKey} {...tokenProps} />;
                    })}
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
