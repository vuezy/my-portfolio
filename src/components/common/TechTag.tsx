import React from "react";
import { Badge } from "../ui/badge";

interface TechTagProps {
  children: React.ReactNode;
}

export default function TechTag({ children }: TechTagProps) {
  return (
    <Badge
      variant="secondary"
      className="tracking-wide px-2 py-0.5 border-border/50 rounded-sm
        text-secondary-foreground bg-secondary/50 hover:bg-secondary transition-colors cursor-default"
    >
      {children}
    </Badge>
  );
}