"use client"

import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowRight,
} from "lucide-react";
import GitHubIcon from "../icons/GitHubIcon";
import TechTag, { TechNameType } from "./TechTag";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "../ui/badge";
import FadeIn from "../animations/FadeIn";
import WashiTape from "./WashiTape";

export interface Project {
  title: string;
  stack: TechNameType[];
  description: React.ReactNode;
  githubLink: string;
  keyLesson: React.ReactNode;
  hardestSurprise?: React.ReactNode;
  image?: {
    src: string[];
    size: "desktop" | "mobile";
  };
  details: {
    description?: string;
    content: React.ReactNode;
  };
  isOngoing: boolean;
}

interface ProjectCardProps {
  project: Project;
  washiTapeVariant?: "default" | "teal" | "mauve";
}

export function ProjectCard({ project, washiTapeVariant }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobileSizeImage = project.image?.size === "mobile";

  return (
    <>
      <FadeIn className="relative">
        <Card className="group card-glow flex flex-col h-full overflow-hidden transition-all">
          <CardHeader>
            <div className="flex items-start justify-between gap-2">
              <FadeIn asChildAnimation direction="inplace">
                <CardTitle className="font-serif text-xl tracking-tight">
                  {project.title}
                </CardTitle>
              </FadeIn>
              <FadeIn asChildAnimation direction="inplace" className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  asChild
                >
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </FadeIn>
            </div>

            {project.isOngoing && (
              <FadeIn asChildAnimation transition={{ delay: 0.2 }}>
                <Badge variant="outline" className="mb-1">Ongoing</Badge>
              </FadeIn>
            )}

            <FadeIn asChildAnimation transition={{ delay: 0.3 }}>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => <TechTag key={idx} name={tech} />)}
              </div>
              <CardDescription className="text-sm text-muted-foreground mt-1">
                {project.description}
              </CardDescription>
            </FadeIn>
          </CardHeader>

          <CardContent className="grow flex flex-wrap md:flex-nowrap items-start gap-x-2 gap-y-4">
            <div className="grow space-y-4">
              <FadeIn asChildAnimation className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                  Key lesson
                </p>
                <FadeIn asChildAnimation direction="right" transition={{ delay: 0.4 }} className="text-secondary-foreground leading-relaxed">
                  {project.keyLesson}
                </FadeIn>
              </FadeIn>
              
              {project.hardestSurprise && (
                <FadeIn asChildAnimation className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">
                    Hardest surprise
                  </p>
                  <FadeIn asChildAnimation direction="right" transition={{ delay: 0.5 }} className="text-muted-foreground leading-relaxed">
                    {project.hardestSurprise}
                  </FadeIn>
                </FadeIn>
              )}
            </div>
            {project.image && project.image.src.length > 0 && (
              <FadeIn
                asChildAnimation
                direction="inplace"
                transition={{ delay: 0.3 }}
                className={cn(
                  "relative grow-0 corner-frame",
                  isMobileSizeImage 
                    ? "min-w-full xs:min-w-4/5 sm:min-w-fit sm:min-h-64 aspect-square"
                    : "min-w-full sm:min-w-xs aspect-video"
                )}
              >
                <div className="corner-frame-inner"></div>
                <Image
                  src={project.image.src[0]}
                  alt=""
                  fill
                  sizes={
                    isMobileSizeImage ? "(max-width: 640px) 100vw, 16rem" : "(max-width: 640px) 100vw, 25rem"
                  }
                  className="object-contain z-20"
                />
                <div className="absolute inset-0 bg-muted/50"></div>
              </FadeIn>
            )}
          </CardContent>

          <CardFooter>
            <FadeIn asChildAnimation direction="right" transition={{ delay: 0.6 }} className="w-full">
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(true)}
                className="w-full group/btn gap-2"
              >
                <span>View more details</span>
                <ArrowRight className="group-hover/btn:translate-x-1 transition-transform duration-500" />
              </Button>
            </FadeIn>
          </CardFooter>
        </Card>

        <WashiTape
          variant={washiTapeVariant}
          className="w-35 top-0 -right-5 rotate-15"
          asChildAnimation
          transition={{ delay: 0.3 }}
        />
      </FadeIn>
      
      <ProjectDetails project={project} open={isModalOpen} onChange={setIsModalOpen} />
    </>
  );
}

interface ProjectDetailsProps {
  project: Project;
  open: boolean;
  onChange: (open: boolean) => void;
}

function ProjectDetails({ project, open, onChange }: ProjectDetailsProps) {
  return (
    <Dialog open={open} onOpenChange={onChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto gap-4">
        <DialogHeader className="space-y-2">
          <DialogTitle className="font-serif text-2xl mb-1">
            {project.title}
          </DialogTitle>

          {project.isOngoing && (
            <Badge variant="outline">Ongoing</Badge>
          )}

          {project.details.description && (
            <DialogDescription className="text-muted-foreground">
              {project.details.description}
            </DialogDescription>
          )}
        </DialogHeader>

        <Separator className="my-2" />

        {project.image && project.image.src.length > 0 && (
          <>
            <ImageGallery images={project.image.src} isMobileSizeImage={project.image.size === "mobile"} />
            <Separator className="my-2" />
          </>
        )}

        <div className="space-y-6">
          {project.details.content}
        </div>

        <Separator className="my-2" />

        <div className="flex justify-end">
          <Button variant="outline" size="sm" className="flex items-center gap-1.5" asChild>
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface ImageGalleryProps {
  images: string[];
  isMobileSizeImage: boolean;
}

function ImageGallery({ images, isMobileSizeImage }: ImageGalleryProps) {
  if (images.length === 0) return null;

  return (
      <Carousel 
        opts={{
          loop: true,
          breakpoints: { '(prefers-reduced-motion: reduce)': { duration: 0 } },
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, idx) => (
            <CarouselItem key={idx}>
              <div className={cn(
                "relative rounded-lg overflow-hidden border border-border",
                isMobileSizeImage ? "aspect-square" : "aspect-video"
              )}>
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 30rem"
                  className="object-contain z-20"
                />
                <div className="absolute inset-0 bg-muted/50"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious variant="secondary" className="left-2" />
            <CarouselNext variant="secondary" className="right-2" />
          </>
        )}
      </Carousel>
  );
}

interface ProjectCardBulletListProps {
  items: string[];
  className?: string;
}

export function ProjectCardBulletList({ items, className }: ProjectCardBulletListProps) {
  return (
    <ul className={cn("space-y-1 pl-4 text-sm leading-relaxed list-disc marker:text-accent/60", className)}>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

interface ProjectCardDetailSectionProps {
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
}

export function ProjectCardDetailSection({ title, children, isLast }: ProjectCardDetailSectionProps) {
  return (
    <div className={cn({ "border-b pb-4": !isLast })}>
      <h3 className="font-semibold text-foreground mb-2 tracking-tight">
        {title}
      </h3>
      {children}
    </div>
  );
}