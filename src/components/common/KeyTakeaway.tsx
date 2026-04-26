import { cn } from "@/lib/utils";
import { BookMarkedIcon } from "lucide-react";
import React, { useId } from "react";

interface KeyTakeawayProps {
  children: React.ReactNode;
}

export default function KeyTakeaway({ children }: KeyTakeawayProps) {
  const labelId = useId();

  return (
    <div
      role="note"
      aria-labelledby={labelId}
      className={cn(
        "bg-accent/5 rounded-lg border border-accent/20 border-l-8 border-l-accent",
        "mb-8 p-5 pl-6 md:mb-10 md:p-6 md:pl-8",
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

      {children}
    </div>
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
    <ul className={cn("ml-1 space-y-2", className)}>{children}</ul>
  );
}

interface KeyTakeawayListItemProps {
  children: React.ReactNode;
}

export function KeyTakeawayListItem({ children }: KeyTakeawayListItemProps) {
  return (
    <li className="flex items-baseline gap-2 text-secondary-foreground text-sm md:text-base font-medium">
      <span className="shrink-0 font-serif text-accent" aria-hidden="true">-</span>
      <span>{children}</span>
    </li>
  );
}