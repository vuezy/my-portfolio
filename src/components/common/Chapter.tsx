import { ChevronDownIcon } from "lucide-react";
import React from "react";

interface ChapterProps {
  title: string;
  chapterNumber: number;
  lastUpdated: Date;
  nextChapterId: string;
  children: React.ReactNode;
}

export default function Chapter({ title, chapterNumber, lastUpdated, nextChapterId, children }: ChapterProps) {
  return (
    <section id="introduction" className="max-w-5xl 2xl:max-w-6xl mx-auto px-6 pb-24 lg:pb-32 scroll-mt-14">
      <div className="flex justify-between items-center gap-x-2 py-3 border-b">
        <span className="text-[10px] sm:text-[11px] font-light tracking-[0.06rem]">
          Portfolio · Ch. {chapterNumber.toString().padStart(2, '0')}
        </span>
        <span className="text-[10px] sm:text-[11px] font-light tracking-[0.06rem]">
          Last Updated · {lastUpdated.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </span>
      </div>

      <div className="flex items-center gap-2.5 py-6 text-sm font-light tracking-[0.18rem] uppercase">
        <span className="inline-block w-5 h-px bg-border"></span>
        <h2>{title}</h2>
      </div>

      {children}

      <a href={`#${nextChapterId}`} className="flex flex-col items-center w-fit pb-9 mx-auto">
        <span className="text-[10px] font-light tracking-[0.18rem] uppercase">Read On</span>
        <ChevronDownIcon className="w-4.5" />
      </a>
    </section>
  );
}