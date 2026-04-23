import { BookMarkedIcon } from "lucide-react";
import React from "react";

interface KeyTakeawayProps {
  bullets?: string[];
  children?: React.ReactNode;
}

export default function KeyTakeaway({ bullets, children }: KeyTakeawayProps) {
  return (
    <div className="mb-8 rounded-lg border border-l-4 border-l-accent bg-muted/30 p-6">
      <div className="mb-3 flex items-center gap-3 font-serif text-lg font-medium leading-snug text-foreground md:text-xl">
        <BookMarkedIcon className="text-accent" />
        <span>Key Takeaway</span>
      </div>

      {children}

      {bullets && bullets.length > 0 && (
        <ul className="ml-1 space-y-2 mt-4">
          {bullets.map((bullet, index) => (
            <li
              key={index}
              className="flex items-baseline gap-2 text-secondary-foreground text-sm md:text-base font-medium"
            >
              <span className="shrink-0 font-serif text-accent">-</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}