import Chapter from "@/components/common/Chapter";
import KeyTakeaway, { KeyTakeawayContent, KeyTakeawayList, KeyTakeawayListItem } from "@/components/common/KeyTakeaway";
import StoryPoolProvider, { Story, StoryPoolContent, StoryPoolList } from "@/components/common/StoryPool";
import TechTag, { TechName } from "@/components/common/TechTag";
import { MountainIcon, Rotate3DIcon, WavesLadderIcon } from "lucide-react";

const stories: Story[] = [
  {
    id: 'the-bottom',
    title: 'The Bottom',
    icon: <WavesLadderIcon />,
    summary: 'Where it all began',
    content: (
      <>
        <p>
          It started in a high school club. Competitive programming.&nbsp;
          <TechTag name={TechName.CPP} />
        </p>

        <p>
          I dove in headfirst. I remember late at night, trying to solve some problems before bed, but ending up stuck on a blank screen for hours. 
          Turns out I just needed to type an input first. I never opened StackOverflow or watched tutorials at that time for some reason. 
          I just kept going, asking teachers and friends when I truly got stuck.
        </p>

        <p>
          The club noticed who actually showed up and kept trying. 
          They gave weekly assignments and ran periodic tests (ranked and timed). 
          Tests made my heart race every single time. But that <strong>pressure forced me to adapt fast.</strong>
        </p>

        <p>
          That&apos;s how I ended up in their intensive training class for KSN (Kompetisi Sains Nasional). 
          I didn&apos;t even know I was selected until I showed up. First day: surprise assessment. I placed bottom.
        </p>
      </>
    ),
  },
  {
    id: 'the-climb',
    title: 'The Climb',
    icon: <MountainIcon />,
    summary: 'Learn from people around you',
    content: (
      <>
        <p>
          Lucky for me, the top students in the club were my classmates. I watched how they thought, asked dumb questions, and learned. 
          Gradually, I started performing better. I got comfortable with edge cases and learned to spot potential TLEs before hitting run. 
          I could finally make sense of DP functions and graph theory.
        </p>

        <p>
          The club encouraged us to test ourselves in real competitions before KSN. 
          The pressure felt heavier and the stakes were higher. 
          My first competition, I managed to get Silver. Then Gold. Then ultimately the 3rd place at the KSN city stage.
        </p>

        <p>
          The KSN regency stage however was different. I lost. 
          Looking back, my real regret isn&apos;t the loss. It&apos;s that <strong>I could have studied harder</strong> and learned more from the prodigies around me. 
          I left effort on the table.
        </p>
      </>
    ),
  },
  {
    id: 'the-pivot',
    title: 'The Pivot',
    icon: <Rotate3DIcon />,
    summary: 'Curiosity leads my way forward',
    content: (
      <>
        <p>
          Then COVID hit. Somewhere in that blur, I jumped into web development, starting from&nbsp;
          <TechTag name={TechName.HTML} />, <TechTag name={TechName.CSS} />, and <TechTag name={TechName.JS} />. 
          Then <TechTag name={TechName.PHP} /> and <TechTag name={TechName.SQL} />. 
          Out of thin air. No competitions involved, just tutorials and my own little <strong>&quot;lab&quot; of personal projects.</strong>
        </p>

        <p>
          I kept building through university. But before diving into frameworks, I got curious about something else. Cybersecurity.
        </p>

        <p>
          I fell down that rabbit hole for a while. 
          Ethical hacking, Kali Linux, Metasploit, hunting CVEs, that kind of stuff. 
          I even tried a CTF and met reverse engineering there. Reverse engineering was fascinating, but it made me realize something, that is 
          <strong> I needed to understand systems deeper to thrive.</strong>
        </p>

        <p>
          So I circled back to web development. The security mindset stayed with me though. 
          Now <strong>I think through consequences when I write code. </strong> That&apos;s been surprisingly useful in my day job.
        </p>
      </>
    ),
  },
];

export default function OriginChapter() {
  const lastUpdated = new Date('2026-04-27');

  return (
    <Chapter
      id="origin"
      title="Origin"
      chapterNumber={2}
      lastUpdated={lastUpdated}
      nextChapterId="day-job"
      ruled={true}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-4">
        <KeyTakeaway>
          <KeyTakeawayContent className="text-sm sm:text-base md:text-sm lg:text-base text-muted-foreground space-y-1">
            <p>Learn and solve problems under pressure.</p>
            <p>Learn from people around you.</p>
            <p>Security mindset makes you a better backend dev.</p>
          </KeyTakeawayContent>

          <KeyTakeawayList className="text-sm sm:text-base md:text-sm lg:text-base mt-4">
            <KeyTakeawayListItem>Competitive programming: bottom -{'>'} 3rd place</KeyTakeawayListItem>
            <KeyTakeawayListItem>Self-taught web dev + cybersecurity detour</KeyTakeawayListItem>
            <KeyTakeawayListItem>Now writes backend code with security in mind</KeyTakeawayListItem>
          </KeyTakeawayList>
        </KeyTakeaway>

        <StoryPoolProvider stories={stories} defaultStoryId="the-bottom">
          <StoryPoolList className="z-10" />
          <StoryPoolContent className="md:col-span-2 mt-4" />
        </StoryPoolProvider>
      </div>
    </Chapter>
  );
}