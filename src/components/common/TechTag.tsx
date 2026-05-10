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
import LaravelIcon from "../icons/LaravelIcon";
import PHPIcon from "../icons/PHPIcon";
import CppIcon from "../icons/CppIcon";
import HTMLIcon from "../icons/HTMLIcon";
import CSSIcon from "../icons/CSSIcon";

export const TechName = {
  JS: "JavaScript",
  TS: "TypeScript",
  NEXT: "Next.js",
  PHP: "PHP",
  LARAVEL: "Laravel",
  GO: "Go",
  CPP: "C++",
  KOTLIN: "Kotlin",
  SQL: "SQL",
  MYSQL: "MySQL",
  DRIZZLE: "Drizzle",
  SUPABASE: "Supabase",
  HTML: "HTML",
  CSS: "CSS",
  TAILWIND: "Tailwind CSS",
} as const;
export type TechNameType = typeof TechName[keyof typeof TechName];

function getTechIcon(name: TechNameType) {
  return {
    [TechName.JS]: <JavaScriptIcon />,
    [TechName.TS]: <TypeScriptIcon />,
    [TechName.NEXT]: <NextJSIcon />,
    [TechName.PHP]: <PHPIcon />,
    [TechName.LARAVEL]: <LaravelIcon />,
    [TechName.GO]: <GoIcon />,
    [TechName.CPP]: <CppIcon />,
    [TechName.KOTLIN]: <KotlinIcon />,
    [TechName.SQL]: <MySQLIcon />,
    [TechName.MYSQL]: <MySQLIcon />,
    [TechName.DRIZZLE]: <DrizzleIcon />,
    [TechName.SUPABASE]: <SupabaseIcon />,
    [TechName.HTML]: <HTMLIcon />,
    [TechName.CSS]: <CSSIcon />,
    [TechName.TAILWIND]: <TailwindIcon />,
  }[name];
}

interface TechTagProps {
  name: TechNameType;
}

export default function TechTag({ name }: TechTagProps) {
  return (
    <Badge
      variant="secondary"
      className="tracking-wide px-2 py-0.5 border-border/50 rounded-sm
        text-foreground bg-secondary/50 hover:bg-secondary cursor-default"
    >
      {getTechIcon(name)} {name}
    </Badge>
  );
}