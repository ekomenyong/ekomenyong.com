import React from "react";
import { RiCodeLine, RiFileTextLine, RiFolderOpenLine } from "react-icons/ri";
import {
  SiCss3,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiLooker,
  SiMarkdown,
  SiNextdotjs,
  SiPowershell,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type ICodeTitle = {
  title?: string;
  lang: string;
};

export default function CodeTitle({ title, lang }: ICodeTitle) {
  let Icon;

  switch (lang) {
    case "html":
      Icon = SiHtml5;
      break;
    case "css":
      Icon = SiCss3;
      break;
    case "js":
      Icon = SiJavascript;
      break;
    case "ts":
      Icon = SiTypescript;
      break;
    case "tsx":
      Icon = SiReact;
      break;
    case "jsx":
      Icon = SiReact;
      break;
    case "bash":
      Icon = SiGnubash;
      break;
    case "py":
      Icon = SiPython;
      break;
    case "shell":
      Icon = SiPowershell;
      break;
    case "json":
      Icon = SiJson;
      break;
    case "text":
      Icon = RiFileTextLine;
      break;
    case "md":
      Icon = SiMarkdown;
      break;
    case "next":
      Icon = SiNextdotjs;
      break;
    case "directory":
      Icon = RiFolderOpenLine;
      break;
    case "vercel":
      Icon = SiVercel;
      break;
    case "tailwind":
      Icon = SiTailwindcss;
      break;
    case "looker":
      Icon = SiLooker;
      break;
    default:
      Icon = RiCodeLine;
      break;
  }
  return (
    <div className="code-title mt-4 flex w-full items-center justify-start gap-2 truncate rounded-t-lg border-b border-slate-700 bg-slate-900 py-3">
      <div className="hidden h-8 items-center space-x-1.5 px-4 md:flex">
        <div className="h-[12px] w-[12px] rounded-full bg-brand-400"></div>
        <div className="h-[12px] w-[12px] rounded-full bg-amber-400"></div>
        <div className="h-[12px] w-[12px] rounded-full bg-green-400"></div>
      </div>
      <div className="flex items-center gap-3 px-4 md:px-0">
        <Icon className="flex h-6 w-6 items-center text-gray-100" />
        <p className="text-sm font-medium tracking-wide text-gray-100">
          {title || lang}
        </p>
      </div>
    </div>
  );
}
