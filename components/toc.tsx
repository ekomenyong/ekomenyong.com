"use client";

import { clsxm } from "@/utils";
import { Disclosure } from "@headlessui/react";
import GithubSlugger from "github-slugger";
import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { RiArrowDownSLine } from "react-icons/ri";

interface TOCProps {
  source: string;
}

const useIntersectionObserver = (
  setActiveId: Dispatch<SetStateAction<string | undefined>>
) => {
  const headingElementsRef: any = useRef({});

  useEffect(() => {
    const callback = (headings: IntersectionObserverEntry[]) => {
      headingElementsRef.current = headings.reduce(
        (
          map: { [x: string]: any },
          headingElement: { target: { id: string | number } }
        ) => {
          map[headingElement.target.id] = headingElement;

          return map;
        },
        headingElementsRef.current
      );

      const visibleHeadings: any[] = [];

      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id: string) =>
        headingElements.findIndex((heading) => heading.id === id);

      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        const sortedVisibleHeadings = visibleHeadings.sort(
          (a, b) => getIndexFromId(b.target.id) - getIndexFromId(a.target.id)
        );

        setActiveId(sortedVisibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px -70% 0px",
    });

    const headingElements = Array.from(document.querySelectorAll("article h2"));

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};

const TableOfContents: FC<TOCProps> = ({ source }) => {
  const headingLines = source
    .split("\n")
    .filter((line) => line.match(/^###*\s/));

  const headings = headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, "");
    const level = raw.slice(0, 3) === "###" ? 3 : 2;
    const slugger = new GithubSlugger();

    return {
      text,
      level,
      id: slugger.slug(text),
    };
  });

  const [activeId, setActiveId] = useState<string>();

  useIntersectionObserver(setActiveId);

  return (
    <div className="mt-4 mb-0 cursor-pointer lg:sticky lg:top-20 lg:border-b lg:border-gray-400">
      <Disclosure
        as="div"
        className="flex flex-col items-start justify-center"
        defaultOpen={true}
      >
        {({ open }) => (
          <>
            <dt>
              <Disclosure.Button
                as="h3"
                className="mb-4 flex flex-row flex-nowrap items-center justify-start text-base font-medium text-dark"
              >
                <span className="animated-underline font-semibold">
                  On this page
                </span>
                <span className="ml-20 flex items-center md:ml-16">
                  <RiArrowDownSLine
                    className={clsxm(
                      open ? "-rotate-180" : "rotate-0",
                      "h-6 w-6 transform"
                    )}
                    aria-hidden="true"
                  />
                </span>
              </Disclosure.Button>
            </dt>
            <Disclosure.Panel
              as="dd"
              className="flex flex-col items-start justify-start"
            >
              {headings.map((heading, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    className={clsxm(
                      heading.id === activeId ? "font-semibold" : "font-normal",
                      heading.level === 2 && "pl-2 font-semibold",
                      heading.level === 3 && "pl-4",
                      heading.level === 4 && "pl-6 italic",
                      "mb-4 text-sm text-zinc-700 last:mb-6 hover:underline"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector<any>(`#${heading.id}`)
                        .scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                          inline: "nearest",
                        });
                    }}
                  >
                    {heading.text}
                  </button>
                );
              })}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default TableOfContents;
