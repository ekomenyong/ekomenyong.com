"use client";
import React from "react";
import { clsxm } from "utils";

interface IPre extends React.HTMLAttributes<HTMLPreElement> {
  className?: string;
}
export default function Pre({ className, ...props }: IPre) {
  const textInput = React.useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const onEnter = () => {
    setHovered(true);
  };
  const onExit = () => {
    setHovered(false);
    setCopied(false);
  };
  const onCopy = () => {
    if (textInput.current !== null) {
      setCopied(true);
      navigator.clipboard.writeText(textInput.current.textContent!);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  };
  return (
    <div
      ref={textInput}
      onMouseEnter={onEnter}
      onMouseLeave={onExit}
      className="relative"
    >
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          className={clsxm(
            "absolute right-2 bottom-2.5 z-50 h-8 w-8 rounded border-2 bg-gray-800 p-1",
            copied
              ? "border-green-400 focus:border-green-400 focus:outline-none"
              : "border-gray-300"
          )}
          onClick={onCopy}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            className={clsxm(copied ? "text-green-400" : "text-gray-300")}
          >
            {copied ? (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </>
            ) : (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </>
            )}
          </svg>
        </button>
      )}
      <pre
        className={clsxm(
          "pre mt-6 mb-4 overflow-x-auto rounded-lg bg-slate-900 py-4",
          className
        )}
        {...props}
      />
    </div>
  );
}
