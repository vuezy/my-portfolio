import Link from "next/link";
import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import profile from "@/data/profile.json";

const footLinks = [
  {
    href: profile.github,
    label: "GitHub",
    icon: <GitHubIcon className="h-4 w-4" />,
  },
  {
    href: profile.linkedin,
    label: "LinkedIn",
    icon: <LinkedInIcon className="h-4 w-4" />,
  },
];

export default function Footer() {
  return (
    <footer className="z-10 w-full bg-background border-t border-border mt-16">
      <div className="mx-auto flex flex-wrap h-min max-w-5xl 2xl:max-w-6xl items-center justify-between gap-x-2 gap-y-2 sm:gap-y-1.5 px-6 py-5">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <nav className="basis-full sm:basis-auto flex flex-row items-center justify-start gap-3 sm:gap-5">
          {footLinks.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              {icon} {label}
            </Link>
          ))}
        </nav>

        <p className="basis-full text-xs text-muted-foreground">All brand logos are trademarks of their respective owners.</p>
      </div>
    </footer>
  );
}