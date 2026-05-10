import Chapter from "@/components/common/Chapter";
import Quote from "@/components/common/Quote";
import TechTag, { TechName } from "@/components/common/TechTag";
import WashiTape from "@/components/common/WashiTape";
import Link from "next/link";
import React from "react";

export default function ExtrasChapter() {
  const lastUpdated = new Date('2026-05-08');

  return (
    <Chapter
      id="extras"
      title="Extras"
      chapterNumber={5}
      lastUpdated={lastUpdated}
      ruled={true}
    >
      <div className="space-y-10">
        <ArticleSection />
        <OverengineeringSection />
        <AISection />
      </div>
    </Chapter>
  );
}

function ArticleSection() {
  const articles = [
    {
      title: "Let’s Talk About Reference Types in Go",
      link: "https://medium.com/@shanechristian03/lets-talk-about-reference-types-in-go-b44cf4938e2d",
    },
    {
      title: "Here Is What You Need to Know About Database Normalization",
      link: "https://medium.com/@shanechristian03/here-is-what-you-need-to-know-about-database-normalization-5b7338a7a933",
    },
  ];

  return (
    <Section title="Articles">
      <p>
        I&apos;ve also written some articles, primarily to deepen my own understanding. 
        There&apos;s something about explaining a topic that forces you to question it again, and in doing so, find clearer answers. 
        My articles also serve as personal reminders, capturing things as I currently understand them. 
        Over time, I can revisit and gradually update them to reflect how my thinking evolves.
      </p>
      <p>
        <em>I have to say, writing isn&apos;t as simple as I thought. Just another learning experience.</em>
      </p>
      <ul className="space-y-2">
        {articles.map((article, idx) => (
          <li key={idx} className="flex items-baseline gap-2">
            <span className="shrink-0 font-serif text-accent" aria-hidden="true">-</span>
            <Link
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function OverengineeringSection() {
  return (
    <Section title="The Overengineering Arc">
      <Quote quote="I question a lot of things, sometimes a little bit too much." />

      <p>
        Have you ever struggled to make a decision? 
        I once agonized over a quiz app feature: whether to let users change their answers during the one extra minute I added for network latency. 
        Would a few late changes really matter? In my case, no, since the quiz was monitored. But I still took way too long to decide.<br />
        Even crazier, I once got stressed choosing between default export and named export in <TechTag name={TechName.JS} />.
      </p>
      <p>
        I believe this is called <strong>overthinking</strong>, which in a way leads me to <strong>overengineering</strong>.
      </p>
      <p>
        I once got very excited to learn lots of design patterns. Despite warnings against forcing patterns, I did exactly that. 
        In my first attempt of <a href="#day-job" className="underline underline-offset-4">redesigning the authorization system</a>, 
        I forced Strategy and Template Method where they didn&apos;t belong. I gained nothing. 
        To be fair, I had wins too, like using Adapters to guard the core domain from third-party code.
      </p>
      <p>
        But then came DDD, Clean Architecture, CQRS, TDD, and friends. I tried rewriting APIs as an experiment. 
        Started with authentication, and got stuck there forever. 
        I redesigned over and over, trying to force everything to fit perfectly.
      </p>
      <p>
        Eventually, I stopped and <strong>accepted imperfection</strong>, but I didn&apos;t throw everything away.<br />
        From DDD: <strong><em>ubiquitous language</em> and <em>bounded contexts</em>.</strong><br />
        From Clean Architecture: <strong>dependency direction and DIP.</strong><br />
        From CQRS: <strong>separating reads from writes.</strong><br />
        From TDD: <strong>thinking about behavior first.</strong>
      </p>
      <p>
        That said, I am still far from mastering DDD and its friends. I still wish to understand them better, 
        not to force them, but to unlock their full power where they truly belong.
      </p>
      <p>
        I&apos;ve since recovered, <em>mostly</em>. 
        I learned that patterns should emerge, not be forced. <strong>Learn the problem first, then find solutions. </strong> 
        Honestly, <em>I&apos;ll forget what I never practice anyway.</em>
      </p>
    </Section>
  );
}

function AISection() {
  return (
    <Section title="About AI">
      <p className="mb-6">
        By now, most developers have used AI. <em>It boosts productivity. </em> 
        And with it, we adapt and slightly change how we develop. But these questions bother me.
      </p>

      <SectionQuestion question="Do we still need to understand the code?">
        <p>
          We&apos;ve seen claims of people shipping apps without writing or understanding a single line of code. 
          Whether that is true or not, I think AI for sure can generate working features when <strong>requirements are clear</strong>. 
          But without understanding the code, how do we debug or solve subtle implementation flaws? 
          I mean, AI can review, find bugs, and even write tests. 
          But if we don&apos;t understand the code, how do we know the tests are correct? 
          <em> A passing test could be testing the wrong thing.</em>
        </p>
        <p>
          AI&apos;s output isn&apos;t perfect, neither are humans. 
          I think the difference is that humans sense when something feels wrong/inconsistent, breaking patterns, or adding future pain. 
          AI sees token patterns without that gut feeling for trade-offs. 
          <strong> Humans know which context matters.</strong>
        </p>
        <p>
          For detailed work, I believe we need at least some idea of what AI is doing. 
          <em> Blind trust doesn&apos;t feel like owning the code.</em>
        </p>
      </SectionQuestion>

      <SectionQuestion question="Does code quality still matter?">
        <p>
          Do coupling, maintenance, or technical debt still matter if AI does most of the work?
        </p>
        <p>
          AI bakes in best practices but becomes inconsistent without proper rules, especially in messy codebases. 
          <strong> The messier the code, the more AI misinterprets intent. </strong> 
          A well-written codebase gives AI focused context, leading to better output. 
          It also helps humans that review AI&apos;s work.
        </p>
        <p>
          But let&apos;s be honest, <strong>users don&apos;t see code</strong>, and therefore speed wins. 
          With AI, people may even ignore quality entirely, thinking <em>&quot;AI can understand it just fine.&quot;</em><br />
          I still lean toward caring about code quality though. 
          A (pragmatically) clean code isn&apos;t for the user. It&apos;s for the next person or the next AI that has to change it.
        </p>
      </SectionQuestion>      

      <p>
        AI has helped me write tests, implement features, and refactor more quickly and confidently. 
        The important thing to me is <strong>making our skills and experience part of AI&apos;s harness</strong>, not letting AI run free without us.<br />
        That said, I would like to learn more about how other developers use AI, what their workflows look like.
      </p>
    </Section>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <>
      <h3 className="text-base md:text-lg text-primary font-semibold tracking-wider uppercase mb-3">
        {title}
      </h3>
      <div className="text-sm md:text-base text-secondary-foreground leading-relaxed space-y-3">
        {children}
      </div>
    </>
  );
}

interface SectionQuestionProps {
  question: string;
  children: React.ReactNode;
}

function SectionQuestion({ question, children }: SectionQuestionProps) {
  return (
    <div className="relative mb-6">
      <WashiTape variant="mauve" className="z-20 w-20 -top-2.5 left-10 -rotate-3" />
      <p className="relative z-10 w-fit font-serif font-semibold text-accent text-base md:text-lg border bg-secondary rounded px-3 py-2">
        {question}
      </p>

      <div className="border-2 rounded p-3 md:pl-5 pt-6 -ml-3 md:-ml-5 -mt-5 space-y-3">
        {children}
      </div>
    </div>
  );
}