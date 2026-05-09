'use client'

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, MonitorIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon-sm"
          className="shrink-0 border-border"
        >
          <span className="sr-only">Toggle theme</span>
          <SunIcon className="absolute rotate-0 scale-100 dark:-rotate-120 dark:scale-0 transition-transform duration-300" />
          <MoonIcon className="absolute rotate-120 scale-0 dark:rotate-0 dark:scale-100 transition-transform duration-300" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          aria-current={theme === "light" ? "true" : undefined}
        >
          <SunIcon className="size-4" /> Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          aria-current={theme === "dark" ? "true" : undefined}
        >
          <MoonIcon className="size-4" /> Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          aria-current={theme === "system" ? "true" : undefined}
        >
          <MonitorIcon className="size-4" /> System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}