import React from "react";

interface InlineCodeProps {
  children: React.ReactNode;
}

export default function InlineCode({ children }: InlineCodeProps) {
  return (
    <code className="bg-secondary text-secondary-foreground p-0.5 rounded">
      {children}
    </code>
  );
}