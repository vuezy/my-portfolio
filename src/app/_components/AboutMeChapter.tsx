import Chapter from "@/components/common/Chapter";
import TechTag from "@/components/common/TechTag";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
import PHPIcon from "@/components/icons/PHPIcon";

export default function AboutMeChapter() {
  const lastUpdated = new Date('2026-04-23');

  return (
    <Chapter
      id="about-me"
      title="About Me"
      chapterNumber={1}
      lastUpdated={lastUpdated}
      nextChapterId="origin"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-secondary-foreground text-sm md:text-base ruled">
        <div className="md:col-span-2 order-1 md:order-2 space-y-2.5">
          <p>
            I&apos;m a backend developer who thinks through consequences before writing a single line.
            <strong> Security isn&apos;t an add-on, it should be part of the process. </strong>
            That said, I also understand that over-engineering security isn&apos;t much better. <strong>Focus on real risks first.</strong>
          </p>

          <p>
            <strong>Trade-offs are a reality I accept daily.</strong> Fighting the framework? Not worth it. 
            RLS with ORM? Many ORMs bypass RLS by default, but app-level auth is solid too. 
            Complex restoration flow? Ship simple now, iterate when actually needed.
          </p>

          <p>
            I&apos;m not an expert on everything, but I know the fundamentals well. 
            I&apos;m confident that <strong>I can adapt</strong> to new tech quickly.
          </p>
        </div>

        <figure className="order-2 md:order-1 flex flex-col justify-center gap-y-2 md:gap-y-3 py-4 md:py-0">
          <blockquote>
            <p className="font-serif font-medium md:leading-relaxed text-primary text-2xl md:text-3xl">
              &quot;Perfect is the enemy of good.&quot;
            </p>
          </blockquote>
          <figcaption className="text-xs text-muted-foreground">Often attributed to Voltaire</figcaption>
        </figure>

        <div className="md:col-span-3 order-3 space-y-2.5">
          <p>
            I&apos;m not afraid to experiment, but I&apos;m also not afraid to say <strong>&quot;good enough for now.&quot; </strong> 
            <strong>The best solution is rarely the first one</strong>, and theoretically, it&apos;s also <strong> rarely the perfect one. </strong>
            I just keep learning, building, adapting, and getting better.
          </p>

          <p>
            <strong>I love learning.</strong> There&apos;s always more, and that excites me, not intimidates me.<br />
            For example, I recently realized the difference between <code>||</code> and <code>??</code> in handling 
            falsy values in <TechTag><PHPIcon /> PHP</TechTag>/<TechTag><JavaScriptIcon /> JS</TechTag>. 
            Sounds stupid, should have known it sooner, but understanding it now feels exhilarating.
          </p>

          <p>
            Many principles and practices, like SOLID, DDD, TDD spark my curiosity. 
            I want to learn them deeply and apply them effectively. 
            But from what I can tell so far, forcing them slows things down. 
            That might be my inexperience, but <strong>I&apos;d rather be pragmatic than pure.</strong>
          </p>
        </div>
      </div>
    </Chapter>
  );
}