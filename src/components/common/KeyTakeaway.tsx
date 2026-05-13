import { cn } from "@/lib/utils";
import { BookMarkedIcon } from "lucide-react";
import React, { useId } from "react";
import WashiTape from "./WashiTape";
import FadeIn from "../animations/FadeIn";

interface KeyTakeawayProps {
  children: React.ReactNode;
}

export default function KeyTakeaway({ children }: KeyTakeawayProps) {
  const labelId = useId();

  return (
    <FadeIn
      direction="inplace"
      role="note"
      aria-labelledby={labelId}
      className={cn(
        "relative bg-accent/5 rounded-lg border border-accent/20 border-l-8 border-l-accent",
        "p-5 pl-6 md:p-6 md:pl-8",
      )}
    >
      <div className="flex items-center gap-2 mb-4 text-md text-primary">
        <BookMarkedIcon className="shrink-0" />
        <span 
          id={labelId} 
          className="font-serif font-semibold uppercase tracking-wider"
        >
          Key Takeaway
        </span>
      </div>

      <FadeIn asChildAnimation transition={{ delay: 0.2 }}>
        {children}
      </FadeIn>

      <WashiTape transition={{ delay: 0.1 }} variant="mauve" className="w-15 top-0 -left-7 -rotate-50" />
      <WashiTape asChildAnimation transition={{ delay: 0.45 }} variant="teal" className="w-20 bottom-0 -right-5 -rotate-45" />
    </FadeIn>
  );
}

interface KeyTakeawayContentProps {
  children: React.ReactNode;
  className?: string;
}

export function KeyTakeawayContent({ children, className }: KeyTakeawayContentProps) {
  return (
    <div className={cn("font-serif leading-relaxed text-secondary-foreground space-y-3", className)}>
      {children}
    </div>
  );
}

interface KeyTakeawayListProps {
  children: React.ReactNode;
  className?: string;
}

export function KeyTakeawayList({ children, className }: KeyTakeawayListProps) {
  return (
    <ul className={cn("text-sm md:text-base text-secondary-foreground font-sans font-medium ml-1 space-y-2", className)}>{children}</ul>
  );
}

interface KeyTakeawayListItemProps {
  children: React.ReactNode;
}

export function KeyTakeawayListItem({ children }: KeyTakeawayListItemProps) {
  return (
    <li className="flex items-baseline gap-2">
      <span className="shrink-0 font-serif text-accent" aria-hidden="true">-</span>
      <span>{children}</span>
    </li>
  );
}