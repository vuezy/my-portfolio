import React from "react";
import { Badge } from "../ui/badge";
import NextJSIcon from "../icons/NextJSIcon";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import DrizzleIcon from "../icons/DrizzleIcon";
import SupabaseIcon from "../icons/SupabaseIcon";
import TailwindIcon from "../icons/TailwindIcon";
import GoIcon from "../icons/GoIcon";
import MySQLIcon from "../icons/MySQLIcon";
import KotlinIcon from "../icons/KotlinIcon";
import JavaScriptIcon from "../icons/JavaScriptIcon";

interface TechTagProps {
  children?: React.ReactNode;
  name?: TechNameType;
}

export default function TechTag({ children, name }: TechTagProps) {
  return (
    <Badge
      variant="secondary"
      className="tracking-wide px-2 py-0.5 border-border/50 rounded-sm
        text-foreground bg-secondary/50 hover:bg-secondary cursor-default"
    >
      {children ?? (name ? (<>{getTechIcon(name)}{name}</>) : null)}
    </Badge>
  );
}

export const TechName = {
  NEXT: "Next.js",
  TS: "TypeScript",
  JS: "JavaScript",
  DRIZZLE: "Drizzle",
  GO: "Go",
  KOTLIN: "Kotlin",
  SUPABASE: "Supabase",
  MYSQL: "MySQL",
  TAILWIND: "Tailwind CSS",
} as const;
export type TechNameType = typeof TechName[keyof typeof TechName];

export function getTechIcon(name: TechNameType) {
  return {
    [TechName.NEXT]: <NextJSIcon />,
    [TechName.TS]: <TypeScriptIcon />,
    [TechName.JS]: <JavaScriptIcon />,
    [TechName.DRIZZLE]: <DrizzleIcon />,
    [TechName.GO]: <GoIcon />,
    [TechName.KOTLIN]: <KotlinIcon />,
    [TechName.SUPABASE]: <SupabaseIcon />,
    [TechName.MYSQL]: <MySQLIcon />,
    [TechName.TAILWIND]: <TailwindIcon />,
  }[name];
}