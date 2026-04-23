import Chapter from "@/components/common/Chapter";
import KeyTakeaway from "@/components/common/KeyTakeaway";
import TechTag from "@/components/common/TechTag";
import CppIcon from "@/components/icons/CppIcon";
import CSSIcon from "@/components/icons/CSSIcon";
import HTMLIcon from "@/components/icons/HTMLIcon";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
import KaliLinuxIcon from "@/components/icons/KaliLinuxIcon";
import MetasploitIcon from "@/components/icons/MetasploitIcon";
import MySQLIcon from "@/components/icons/MySQLIcon";
import PHPIcon from "@/components/icons/PHPIcon";
import React from "react";

export default function OriginChapter() {
  const lastUpdated = new Date('2026-04-23');

  return (
    <Chapter
      id="origin"
      title="Origin"
      chapterNumber={2}
      lastUpdated={lastUpdated}
    >
      <div className="ruled">
        <KeyTakeaway
          bullets={[
            "Competitive programming: bottom -> 3rd place",
            "Self-taught web dev + cybersecurity detour",
            "Now writes backend code with security in mind"
          ]}
        >
          <p className="text-muted-foreground">
            Learn and solve problems under pressure.<br />
            Learn from people better than you.<br />
            Security mindset makes you a better backend dev.
          </p>
        </KeyTakeaway>

        <StoryArc title="The Bottom">
          <p>
            It started in a high school club. Competitive programming.&nbsp;
            <TechTag>
              <CppIcon /> C++
            </TechTag>
          </p>

          <p>
            I remember late at night, trying to solve some problems before bed, but ending up stuck on a blank screen for hours. 
            Turns out I just needed to type an input first. I never opened StackOverflow or watched tutorials at that time for some reason. 
            I just kept going, asking teachers and friends when I truly got stuck.
          </p>

          <p>
            The club also had an intensive training class for KSN (Kompetisi Sains Nasional). 
            I didn&apos;t even know I was selected to be part of it until I showed up. 
            First day: surprise assessment. I placed bottom.
          </p>
        </StoryArc>
        <StoryArc title="The Climb">
          <p>
            Lucky for me, the top students in the club were my classmates. I watched how they thought, asked dumb questions, and learned. 
            Gradually, I started performing better.
          </p>

          <p>
            Then came the competitions. The first one, I got Silver. Then Gold. Then ultimately the 3rd place at the KSN city stage.
          </p>
        </StoryArc>
        <StoryArc title="The Loss">
          <p>
            The KSN regency stage however was different. I lost. 
            Looking back, my real regret isn&apos;t the loss. It&apos;s that <strong>I could have studied harder</strong> and learned more from the prodigies around me. 
            I left effort on the table.
          </p>
        </StoryArc>
        <StoryArc title="The Pivot">
          <p>
            Then COVID hit. Somewhere in that blur, I jumped into web development, starting from&nbsp;
            <TechTag><HTMLIcon /> HTML</TechTag>, <TechTag><CSSIcon /> CSS</TechTag>, and <TechTag><JavaScriptIcon /> JS</TechTag>. 
            Then <TechTag><PHPIcon /> PHP</TechTag> and <TechTag><MySQLIcon /> SQL</TechTag>. 
            Out of thin air. No competitions involved, just tutorials and my own little <strong>&quot;lab&quot; of personal projects.</strong>
          </p>

          <p>
            I kept building through university. But before diving into frameworks, I got curious about something else. Cybersecurity.
          </p>

          <p>
            I fell down that rabbit hole for a while. 
            Ethical hacking, <TechTag><KaliLinuxIcon /> Kali Linux</TechTag>, <TechTag><MetasploitIcon /> Metasploit</TechTag>, hunting CVEs, that kind of stuff. 
            I even tried a CTF and met reverse engineering there. Reverse engineering was fascinating, but it made me realize something, that is 
            <strong> I needed to understand systems deeper to thrive.</strong>
          </p>

          <p>
            So I circled back to web development. The security mindset stayed with me though. 
            Now <strong>I think through consequences when I write code. </strong> That&apos;s been surprisingly useful in my day job.
          </p>
        </StoryArc>
      </div>
    </Chapter>
  );
}

function StoryArc({ title, children }: { title: string; children: React.ReactNode; }) {
  return (
    <>
      <h3 className="text-primary text-lg font-medium underline underline-offset-4 mb-1">{title}</h3>
      <div className="text-secondary-foreground text-sm md:text-base space-y-2.5 mb-4">
        {children}
      </div>
    </>
  );
}