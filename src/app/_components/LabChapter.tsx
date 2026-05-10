import Chapter from "@/components/common/Chapter";
import { Project, ProjectCard, ProjectCardBulletList, ProjectCardDetailSection } from "@/components/common/ProjectCard";
import { TechName } from "@/components/common/TechTag";
import WashiTape from "@/components/common/WashiTape";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects: Project[] = [
  {
    title: "WitHabit",
    stack: [TechName.NEXT, TechName.TS, TechName.DRIZZLE, TechName.SUPABASE, TechName.TAILWIND],
    description: "A habit tracker where your daily routines become quests, EXP, streaks, and level-ups.",
    githubLink: "https://github.com/vuezy/withabit/tree/develop",
    keyLesson: <ProjectCardBulletList items={[
      "Next.js + Drizzle + Supabase + Sentry integration",
      "Tests drive better design for both code and accessibility",
      "UI design and theme with shadcn/ui and Tailwind",
      "Pragmatic a11y in action",
    ]} />,
    hardestSurprise: <ProjectCardBulletList items={[
      "Server and client components handle errors a bit differently",
      "PostgreSQL is case-sensitive (need CITEXT extension)",
      "Flakiness in E2E tests is avoidable",
    ]} />,
    image: {
      src: [
        "/withabit/withabit-1.png",
        "/withabit/withabit-2.png",
        "/withabit/withabit-3.png",
      ],
      size: "desktop",
    },
    details: {
      description: "My first time using Next.js, Drizzle, Supabase, shadcn/ui, and Playwright in building a full-stack app.", 
      content: (
        <>
          <ProjectCardDetailSection title="Architecture">
            <ProjectCardBulletList items={[
              "Pragmatic code organization in App Router",
              "Preferred server components for data fetching and static rendering",
              "Authentication with Supabase integration",
              "Error handling for server and client sides, and monitoring with Sentry",
              "Testing-driven refactor, for example, extracting rules inside server action into isolated functions",
            ]} />
          </ProjectCardDetailSection>

          <ProjectCardDetailSection title="Database">
            <ProjectCardBulletList items={[
              "Used Drizzle for better transaction support in the application code",
              "Migrations and model types moved from Supabase to Drizzle",
              "Bypassed RLS with Drizzle, kept authorization in the application layer",
              "Enabled CITEXT extension for case-insensitive string comparison in PostgreSQL",
            ]} />
          </ProjectCardDetailSection>

          <ProjectCardDetailSection title="Testing">
            <ProjectCardBulletList items={[
              "Vitest + RTL + Playwright (first full-stack testing experience)",
              "Mocking pragmatically in component/integration tests (particularly for Web APIs unavailable in jsdom environment)",
              "Built fixtures for data lifecycle (Playwright) and DB transactions (Vitest)",
              "Handled browser-specific failures, parallel-run flakiness, and hydration timing in Playwright",
              "Tests truly \"forced\" me to design the system better and respect a11y more",
            ]} />
          </ProjectCardDetailSection>

          <ProjectCardDetailSection title="Accessibility" isLast={true}>
            <ProjectCardBulletList items={[
              "shadcn/ui for accessible, unstyled components",
              "\"No ARIA is better than bad ARIA\"",
            ]} />
          </ProjectCardDetailSection>
        </>
      ),
    },
    isOngoing: true,
  },
  {
    title: "Teeny Store",
    stack: [TechName.TS],
    description: <>
      A stupidly small and simple store for state and effect management.<br />
      <Button variant="outline" size="xs" className="text-foreground rounded mt-1" asChild>
        <Link href="https://vuezy.github.io/teeny-store/" target="_blank" rel="noopener noreferrer">Documentation</Link>
      </Button>
    </>,
    githubLink: "https://github.com/vuezy/teeny-store",
    keyLesson: <ProjectCardBulletList items={[
      "Designing extensible APIs",
      "Testing philosophy",
      "JS/TS library authoring",
      "Distribution formats",
    ]} />,
    hardestSurprise: <ProjectCardBulletList items={[
      "Type gymnastics: TS has a lot of advanced tricks",
      "JS/TS config objects (Vite, TS, ESLint) are genuinely \"scary\"",
      "Documentation is harder than it looks",
    ]} />,
    image: {
      src: [
        "/teeny-store/teeny-store.png",
      ],
      size: "desktop",
    },
    details: {
      description: "My first time building an open-source library, using TypeScript seriously, and writing tests with Vitest. All in one project.", 
      content: (
        <>
          <ProjectCardDetailSection title="Library Design">
            <ProjectCardBulletList items={[
              "Built a handy tool to control app state and side effects",
              "Simple APIs that work seamlessly in any JS/TS project",
              "Extensible by design: customize store using builder and plugin, use core effect processor directly, abstract logic into actions",
              "Persistence (localStorage/sessionStorage) plugin included",
              "Deep TS learning: conditional types, generics, utility types, and many more tricks",
              "Documented the library with VitePress",
            ]} />
          </ProjectCardDetailSection>

          <ProjectCardDetailSection title="Build & Distribution">
            <ProjectCardBulletList items={[
              "Vite as build tool (first time configuring library mode)",
              "Trial-and-error approach to configure the project",
              "Distribution formats: ESM, UMD + minified UMD (license included), source maps, TS declaration files",
              "Dropped CJS and IIFE after realizing UMD already covers both formats",
              "Browser-only focus with zero runtime dependencies",
            ]} />
          </ProjectCardDetailSection>

          <ProjectCardDetailSection title="Testing" isLast={true}>
            <ProjectCardBulletList items={[
              "Vitest first experience: didn't know what to test or how at first",
              "Understood practically that the purpose of testing is to build and increase confidence, not just hitting coverage percentage or other metrics",
              "This experience became the stepping stone to learn more about testing",
            ]} />
          </ProjectCardDetailSection>
        </>
      ),
    },
    isOngoing: false,
  },
  {
    title: "Ask&Answer",
    stack: [TechName.GO, TechName.KOTLIN, TechName.MYSQL],
    description: "A Q&A Android app where users earn credits by answering questions, then spend credits to boost their own questions' priority.",
    githubLink: "https://github.com/vuezy/go-ask-and-answer",
    keyLesson: <ProjectCardBulletList items={[
      "Go's philosophy (errors as values, implicit interfaces, minimal dependencies) forces better design",
      "MVVM and how it aligns with the strict separation of visuals and behavior (XML vs Kotlin) in mobile development",
      "Concurrency in Go and Kotlin",
    ]} />,
    hardestSurprise: <ProjectCardBulletList items={[
      "XML is harder than HTML when it comes to building UI",
      "Trailing lambda syntax and implicit 'it' parameter in Kotlin",
      "The vendor directory in Go is almost always recommended to be committed",
    ]} />,
    image: {
      src: [
        "/ask-answer/ask-answer-1.jpg",
        "/ask-answer/ask-answer-2.jpg",
        "/ask-answer/ask-answer-3.jpg",
      ],
      size: "mobile",
    },
    details: {
      description: "My first time writing Kotlin and Go simultaneously to build a credit-based Q&A system.", 
      content: (
        <>
          <ProjectCardDetailSection title="Go Backend">
            <ProjectCardBulletList items={[
              "Code organization in Go (unopinionated regarding project layout)",
              "Chi router, validator, goose (migrations), sqlc (type-safe SQL), JWT for auth",
              "Explicit error handling everywhere since errors are values",
              "Vendor directory committed (community best practice), forcing minimal dependencies",
              "Learned concurrency control: goroutines, channels, mutexes",
            ]} />
          </ProjectCardDetailSection>

          <ProjectCardDetailSection title="Go: Questionable Choices That Worked">
            <ProjectCardBulletList items={[
              "Used the reflect package to convert sqlc-generated structs into maps for snake_case JSON responses",
              "Coupled business logic to sqlc code, worked, but probably could have utilized interfaces more",
              "Per-endpoint validation middleware: defined middleware for each request payload, then plugged into specific routes",
            ]} />
          </ProjectCardDetailSection>

          <ProjectCardDetailSection title="Kotlin Android (MVVM-ish)" isLast={true}>
            <ProjectCardBulletList items={[
              "Android project organization and Kotlin's syntax",
              "Tried to follow MVVM, but ended up implementing it impurely because I prematurely jumped into the implementation",
              "Designed UI with XML and handled behavior with Kotlin, accompanied by MVVM architecture",
              "Built with Activity, Fragment, ViewPager, and RecyclerView components",
              "Retrofit to connect to the API, made it non-blocking with suspend functions"
            ]} />
          </ProjectCardDetailSection>
        </>
      ),
    },
    isOngoing: false,
  },
];

const washiTapeVariants = ["default", "teal", "mauve"] as const;

export default function LabChapter() {
  const lastUpdated = new Date('2026-05-06');

  return (
    <Chapter
      id="lab"
      title="Lab"
      chapterNumber={4}
      lastUpdated={lastUpdated}
      nextChapterId="extras"
    >
      <p className="mb-6">
        <em>Code I wrote for myself. The good, the bad, and the stupid. Learning by doing.</em>
      </p>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div key={idx} className="relative">
            <WashiTape variant={washiTapeVariants[idx % washiTapeVariants.length]} className="w-35 top-0 -right-5 rotate-15" />
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </Chapter>
  );
}