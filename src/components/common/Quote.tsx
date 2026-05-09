import { cn } from "@/lib/utils";

interface QuoteProps {
  quote: string;
  caption?: string;
  className?: string;
}

export default function Quote({ quote, caption, className }: QuoteProps) {
  return (
    <figure className={cn("flex flex-col justify-center gap-y-2 md:gap-y-3", className)}>
      <blockquote>
        <p className="font-serif font-medium md:leading-relaxed text-accent text-2xl md:text-3xl">
          &quot;{quote}&quot;
        </p>
      </blockquote>
      {caption && (
        <figcaption className="text-xs text-muted-foreground">{caption}</figcaption>
      )}
    </figure>
  );
}