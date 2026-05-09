import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import LinkedInIcon from "../icons/LinkedInIcon";
import profile from "@/data/profile.json";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "#origin", label: "Origin" },
  { href: "#day-job", label: "Work" },
  { href: "#lab", label: "Projects" },
  { href: "#extras", label: "Extras" },
];

export default function Header() {

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="relative mx-auto flex h-14 max-w-5xl 2xl:max-w-6xl items-center justify-between gap-x-2 px-6">
        <div className="flex flex-row-reverse items-center gap-2">
          <a
            href="#introduction"
            className="font-serif text-base font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            {profile.name}
          </a>

          <MobileNav navLinks={navLinks} />
        </div>
        
        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden sm:flex items-center gap-4 md:gap-6">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-primary hover:text-foreground transition-colors"
          >
            <LinkedInIcon className="size-5 xs:size-4" /> <span className="hidden xs:inline">Say Hi</span> <ArrowRightIcon className="hidden xs:inline" />
          </Link>
        </div>
      </div>
    </header>
  );
}