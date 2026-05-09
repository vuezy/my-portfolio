'use client'

import { MenuIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useId, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 640;

interface MobileNavProps {
  navLinks: {
    href: string;
    label: string;
  }[];
}

export default function MobileNav({ navLinks }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const navId = useId();

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${MOBILE_BREAKPOINT}px)`);
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (triggerRef.current?.closest('[aria-hidden="true"]')) return;

      setOpen(false);
      triggerRef.current?.focus();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open]);

  return (
    <>
      <Button
        ref={triggerRef}
        variant="ghost"
        size="icon-sm"
        className="sm:hidden shrink-0"
        aria-expanded={open}
        aria-controls={navId}
        onClick={() => setOpen(prevOpen => !prevOpen)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
      </Button>

      {open && (
        <nav
          id={navId}
          className="
            sm:hidden absolute top-full left-0 right-0 border-y border-border rounded-b-lg
            bg-background/95 backdrop-blur-sm px-6 py-2 flex flex-wrap gap-x-6 gap-y-2
          "
        >
          {navLinks.map(({ href, label }) => (
            <Button
              key={href}
              variant="ghost"
              size="sm"
              className="rounded-md hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground"
              asChild
            >
              <a href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            </Button>
          ))}
        </nav>
      )}
    </>
  );
}