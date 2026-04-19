import Chapter from "@/components/common/Chapter";
import TechTag from "@/components/common/TechTag";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
import LaravelIcon from "@/components/icons/LaravelIcon";
import TypeScriptIcon from "@/components/icons/TypeScriptIcon";
import profile from "@/data/profile.json";

export default function IntroductionChapter() {
  const lastUpdated = new Date('2026-04-19');
  
  return (
    <Chapter
      title="Introduction"
      chapterNumber={0}
      lastUpdated={lastUpdated}
      nextChapterId="about-me"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] items-center gap-12 mb-10">
        <div className="flex flex-col order-2 md:order-1">
          <em className="font-medium tracking-[-0.02rem] mb-2.5 text-3xl xs:text-5xl md:text-6xl text-primary">{profile.name}</em>

          <div className="flex items-center gap-2 text-lg text-muted-foreground font-light">
            Backend Developer · perpetually learning
          </div>

          <div className="w-8 h-px border my-7"></div>

          <p className="font-serif mb-4 max-w-130 text-lg text-muted-foreground">
            I write code with security in mind, adapt quickly, and keep experimenting until the right solution wins.
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            <TechTag>
              <LaravelIcon /> Laravel
            </TechTag>
            <TechTag>
              <JavaScriptIcon /> JavaScript
            </TechTag>
            <TechTag>
              <TypeScriptIcon /> TypeScript
            </TechTag>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-light">
            <span className="shrink-0 inline-block w-1.5 h-1.5 bg-avail-green rounded-full"></span>
            Currently employed · open to opportunities
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 order-1 md:order-2 md:items-start md:justify-start">
          <div className="w-44 h-44 bracket-frame">
            <div className="w-full h-full bg-card border rounded-lg flex items-center justify-center font-serif text-[36px] font-medium italic">S</div>
          </div>
        </div>
      </div>
    </Chapter>
  );
}