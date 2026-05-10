import Chapter from "@/components/common/Chapter";
import TechTag, { TechName } from "@/components/common/TechTag";
import profile from "@/data/profile.json";
import Image from "next/image";

export default function IntroductionChapter() {
  const lastUpdated = new Date('2026-04-19');
  
  return (
    <Chapter
      id="introduction"
      title="Introduction"
      chapterNumber={0}
      lastUpdated={lastUpdated}
      nextChapterId="about-me"
      className="relative bg-glow paper-grain after:absolute after:-z-10 after:-inset-y-8 after:inset-x-0 after:xl:-inset-x-8 after:content-[''] after:bg-dot-grid"
    >
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] items-center gap-12">
        <div className="flex flex-col order-2 sm:order-1">
          <em className="font-medium tracking-[-0.02rem] mb-2.5 text-3xl xs:text-5xl md:text-6xl text-primary">{profile.name}</em>

          <div className="flex items-center gap-2 text-lg text-muted-foreground font-light">
            Backend Developer · perpetually learning
          </div>

          <div className="w-8 h-px border my-7"></div>

          <p className="font-serif mb-4 max-w-130 text-lg text-muted-foreground">
            I write code with security in mind, adapt quickly, and keep experimenting until the right solution wins.
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            <TechTag name={TechName.LARAVEL} />
            <TechTag name={TechName.JS} />
            <TechTag name={TechName.TS} />
          </div>

          <div className="flex items-center gap-2 text-[10px] font-light">
            <span className="shrink-0 inline-block w-1.5 h-1.5 bg-avail-green rounded-full"></span>
            Currently employed · open to opportunities
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 order-1 sm:order-2 sm:items-start sm:justify-start">
          <div className="w-44 h-50 sm:w-44 sm:h-56 md:w-48 md:h-60 corner-frame">
            <div className="corner-frame-inner"></div>
            <Image src="/profile.png" alt="" width={176} height={200} className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </div>
    </Chapter>
  );
}