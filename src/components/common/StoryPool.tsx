'use client'

import { cn } from "@/lib/utils";
import React, { createContext, useContext, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export interface Story {
  id: string;
  title: string;
  icon?: React.ReactNode;
  summary?: string;
  content: React.ReactNode;
}

interface StoryPoolContextType {
  stories: Story[];
  selectedId: string;
  setSelectedId: (id: string) => void;
  goNext: () => void;
  goPrev: () => void;
  currentIndex: number;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const StoryPoolContext = createContext<StoryPoolContextType | null>(null);

function useStoryPool() {
  const context = useContext(StoryPoolContext);
  if (!context) {
    if (process.env.NODE_ENV === "development") {
      console.error("StoryPool components must be used within a StoryPoolProvider");
    }
    return null;
  }
  return context;
}

interface StoryPoolProviderProps {
  stories: Story[];
  defaultStoryId: string;
  children: React.ReactNode;
}

export default function StoryPoolProvider({ stories, defaultStoryId, children }: StoryPoolProviderProps) {
  const [selectedId, setSelectedId] = useState(defaultStoryId);
  const contentRef = useRef<HTMLDivElement>(null);

  const currentIndex = stories.findIndex((story) => story.id === selectedId);

  const handleSelect = useCallback((id: string) => {
    setSelectedId(id);
    // Try letting the DOM swaps the content before we attempt to scroll
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }, []);

  const goNext = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      handleSelect(stories[currentIndex + 1].id);
    }
  }, [stories, handleSelect, currentIndex]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      handleSelect(stories[currentIndex - 1].id);
    }
  }, [stories, handleSelect, currentIndex]);

  return (
    <StoryPoolContext.Provider value={{ stories, selectedId, setSelectedId: handleSelect, goNext, goPrev, currentIndex, contentRef }}>
      {children}
    </StoryPoolContext.Provider>
  );
}

interface StoryPoolListProps {
  className?: string;
}

export function StoryPoolList({ className }: StoryPoolListProps) {
  const storyPool = useStoryPool();
  if (!storyPool) return null;

  const { selectedId, setSelectedId, stories } = storyPool;

  function handleKeyDown(e: React.KeyboardEvent) {
    const currentIndex = stories.findIndex((story) => story.id === selectedId);
    let newIndex = currentIndex;

    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        newIndex = (currentIndex + 1) % stories.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        newIndex = (currentIndex - 1 + stories.length) % stories.length;
        break;
      case "Home":
        e.preventDefault();
        newIndex = 0;
        break;
      case "End":
        e.preventDefault();
        newIndex = stories.length - 1;
        break;
      default:
        return;
    }

    const newStory = stories[newIndex];
    if (newStory) {
      setSelectedId(newStory.id);
      document.getElementById(`story-tab-${newStory.id}`)?.focus();
    }
  };

  return (
    <div
      role="tablist"
      className={cn("flex flex-col gap-3", className)}
      onKeyDown={handleKeyDown}
    >
      <span className="font-serif text-lg md:text-xl">Story List</span>
      {stories.map((story) => {
        const isActive = story.id === selectedId;
        
        return (
          <button
            key={story.id}
            type="button"
            onClick={() => setSelectedId(story.id)}
            className={cn(
              "w-full text-start px-4 py-2 rounded-lg border transition-all duration-500 outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30",
              "bg-background border-border hover:bg-muted/50",
              isActive && "bg-primary/5 border-primary/30 ring-1 ring-primary/20"
            )}
            role="tab"
            id={`story-tab-${story.id}`}
            aria-selected={isActive}
            aria-controls={`story-panel-${story.id}`}
            tabIndex={isActive ? 0 : -1}
          >
            <div className="w-full space-y-1">
              <div className="font-serif text-sm sm:text-base font-semibold flex items-center gap-2">
                {story.icon && (
                  <span className="shrink-0">{story.icon}</span>
                )}
                {story.title}
              </div>
              {story.summary && (
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {story.summary}
                </p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}

interface StoryPoolContentProps {
  className?: string;
}

export function StoryPoolContent({ className }: StoryPoolContentProps) {
  const storyPool = useStoryPool();
  if (!storyPool) return null;

  const { selectedId, stories, contentRef } = storyPool;
  const activeStory = stories.find((story) => story.id === selectedId);

  return (
    <div 
      ref={contentRef}
      className={cn("min-h-50 scroll-mt-14", className)}
      role="tabpanel"
      id={`story-panel-${selectedId}`}
      aria-labelledby={`story-tab-${selectedId}`}
      aria-live="polite"
    >
      <div className="leading-relaxed text-sm md:text-base text-secondary-foreground space-y-6 py-4">
        {activeStory ? (
          <>
            <h3 className="flex items-center gap-2 font-serif text-base md:text-lg text-primary font-semibold mb-3">
              {activeStory.icon && (
                <span className="shrink-0">{activeStory.icon}</span>
              )}
              <span className="tracking-wider uppercase underline underline-offset-4">{activeStory.title}</span>
            </h3>
            {activeStory.content}
          </>
        ) : (
          <p className="font-serif text-muted-foreground text-base md:text-lg">Select a story to read more.</p>
        )}
      </div>
      <StoryNav />
    </div>
  );
}

function StoryNav() {
  const storyPool = useStoryPool();
  if (!storyPool) return null;

  const { goNext, goPrev, currentIndex, stories } = storyPool;
  
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === stories.length - 1;
  const currentTitle = stories[currentIndex]?.title;

  return (
    <div className="flex items-center justify-between gap-4 py-1">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="text-primary disabled:text-muted-foreground"
        onClick={goPrev}
        disabled={isFirst}
      >
        <ChevronLeft />
        <span className="hidden sm:inline" aria-hidden="true">
          Prev
        </span>
        <span className="sr-only">
          Read previous story
        </span>
      </Button>

      <span className="text-xs text-muted-foreground uppercase tracking-widest truncate px-2">
        {currentIndex + 1} / {stories.length} · {currentTitle}
      </span>

      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="text-primary disabled:text-muted-foreground"
        onClick={goNext}
        disabled={isLast}
      >
        <span className="hidden sm:inline" aria-hidden="true">
          Next
        </span>
        <span className="sr-only">
          Read next story
        </span>
        <ChevronRight />
      </Button>
    </div>
  );
}