import Chapter from "@/components/common/Chapter";
import KeyTakeaway, { KeyTakeawayContent, KeyTakeawayList, KeyTakeawayListItem } from "@/components/common/KeyTakeaway";
import StoryPoolProvider, { Story, StoryPoolContent, StoryPoolList } from "@/components/common/StoryPool";
import TechTag from "@/components/common/TechTag";
import JavaScriptIcon from "@/components/icons/JavaScriptIcon";
import LaravelIcon from "@/components/icons/LaravelIcon";
import { CircleGaugeIcon, ClockAlertIcon, SearchIcon, ShieldCogIcon, SunIcon, UserRoundKeyIcon } from "lucide-react";
import React from "react";

const stories: Story[] = [
  {
    id: 'morning-ritual',
    title: 'Morning Ritual',
    icon: <SunIcon />,
    summary: 'How I start the day',
    content: (
      <>
        <p>
          Local server running. IDE open. Sentry on Issues tab. Slack in the background.<br />
          I am scanning for anything that needs a response before I dive in. 
          Not because something is usually on fire, it is just a habit. I want to know what broke before anyone tells me.
        </p>
        <p>
          If nothing is burning, I plan the day, set expectations for myself. Then I start.<br />
          It&apos;s like a quiet 15 minutes before the chaos starts.
        </p>
      </>
    ),
  },
  {
    id: 'decisions',
    title: 'Decisions That Find Me',
    icon: <SearchIcon />,
    summary: 'Making calls on system design and implementation',
    content: (
      <>
        <p>
          I&apos;m not just taking orders. I&apos;ve spent enough time across different projects to know what&apos;s easy, 
          what&apos;s hard, and what&apos;s going to break later if we rush.
        </p>
        <p>
          So when a ticket needs implementation strategy or flow design, I&apos;m part of the team that figures it out. 
          I&apos;m just someone who&apos;s there, who understands the codebase and steps up.
        </p>
        <p>
          Writing code that works is one thing. Choosing the right approach among competing constraints is harder. 
          Like a feature that could be built cleanly in three days, or hacked in one. 
          The hack would work for now, but it would also make the next change harder. 
          The clean approach would save us from debts, but would took more time. 
          With a tighter deadline, I might choose the hack.
        </p>
        <p>
          <strong>I recognize trade-offs and decide what to live with.</strong><br />
          <em>&quot;What do we trade off today and how do we pay for it tomorrow?&quot;</em>
          <strong> Nothing is perfect.</strong>
        </p>
      </>
    ),
  },
  {
    id: 'redesign',
    title: 'Authorization Redesign',
    icon: <ShieldCogIcon />,
    summary: 'The mess that would bite the system if not rewritten',
    content: (
      <>
        <p>
          The app had grown. The authorization system that <strong>affects every app module</strong> was still generic. 
          This was fine for a prototype, but now every new access request meant hardcoding something somewhere. 
          Fragile. Hard to extend. Painful for everyone involved, including the client.<br />
          So <strong>I proposed to redesign the authorization system</strong>. It was approved.
        </p>
        
        <p>
          <strong>The first attempt:</strong> I stole time between tickets to work on it.<br />
          This task was still considered low priority. My design was poor. 
          Then other projects pulled me away. I left it half-done and didn&apos;t touch it for months.
        </p>
        
        <p>
          <strong>The second attempt:</strong> Better design, better plan, and higher priority this time.<br />
          The pain had become undeniable. The previous attempt also didn&apos;t make the system that much better. 
          So I had to start over, but fortunately, another dev was assigned to help. 
          We decided to scope the task carefully and break it down clearly so that we didn&apos;t boil the ocean.
        </p>
        
        <p>
          We were able to make progress by <strong>keeping our focus within the scope </strong> we defined earlier. 
          But then I hit the transaction modules. They were so fragile that I couldn&apos;t even touch their authorization without breaking things. 
          So I had to refactor those first and that took a while.
        </p>

        <p>
          At the end, after months of work, we managed to fully refine the authorization system. 
          It wasn&apos;t perfect, but no more hardcoded authorization rules or exceptions. 
          The client stopped asking &quot;can you set this role to have this one access rule?&quot; 
          since they can now configure it by themselves with our fine-grained authorization settings.
        </p>
      </>
    ),
  },
  {
    id: 'performance',
    title: 'Dashboard Performance',
    icon: <CircleGaugeIcon />,
    summary: '500k+ rows and a failing dashboard',
    content: (
      <>
        <p>
          The production dashboard that showed only 20 latest records suddenly took 15-20 seconds to load 
          when it didn&apos;t just fail outright. I quickly identified the bottleneck. 
          Apparently, the query used <code>COALESCE</code>&nbsp;on two timestamp fields. For any given record, one of them was always null. 
          It also didn&apos;t help that there were <strong>more than 500,000 records</strong>.
        </p>
        
        <p>
          <strong>Hotfix:</strong> Removed <code>COALESCE</code>. Made two queries, one per timestamp field (which already indexed), 
          each fetching their 20 latest records. Then combined the results in the app layer, picking the latest 20 overall.<br />
          This stopped the failing, but it was still slow. <em>Two round trips, two large sorts.</em>
        </p>

        <p>
          That actually bothered me. The hotfix should have been faster than it was. I was missing something.<br />
          Then I found it. It was because of Eloquent&apos;s <code>whereDate()</code> that uses <code>DATE(column)</code> internally, killing index usage. 
          <em> Should have expected that.</em>
        </p>
        
        <p>
          <strong>Real fix:</strong> Added a field storing the coalesced time, updated on write. One query. One index on that field. 
          I also replaced the <code>DATE</code> function with a basic date range comparison so that the index could work.<br />
          The migration for the calculated field? <strong>No downtime.</strong> Default set to <code>NOW()</code>.<br />
          I also set up a scheduler to backfill the exact time gradually. Then I ran the scheduled task for the last batch immediately.
        </p>
        
        <p>
          Final result: one query with index-assisted filtering and sorting.<br />
          Consistently below 1 second.
        </p>
      </>
    ),
  },
  {
    id: 'gap',
    title: 'Registration Flow Token Gap',
    icon: <UserRoundKeyIcon />,
    summary: "The gap that shouldn't have been there",
    content: (
      <>
        <p>
          The project was just handed to me. I was reading through the code, trying to <strong>understand how everything fit together</strong>.<br />
          There was this registration flow. You would first verify your phone with an OTP, then you fill in your account details (email, password, the usual), and then done.
        </p>

        <p>
          I was following along, and I noticed that the OTP check was client-side only. 
          No token sent to the server, basically nothing proving you actually verified anything before submitting your credentials. 
          <em> That didn&apos;t seem right.</em>
        </p>
        
        <p>
          Apparently, the registration flow actually started from a customer service action in the admin panel, initiated before the user ever touched the app. 
          Right after that, the user would immediately be instructed to complete their account registration in the app. 
          So in most cases, the attack window would be small. 
          <strong> But a gap is a gap, small doesn&apos;t mean impossible, the unlikely cases shouldn&apos;t be ignored either.</strong>
        </p>
        
        <p>
          At first, I actually thought that maybe we could just redesign the flow. 
          However, this flow was requested specifically by our client. They had already run this flow in their business for a while. 
          We had to just fix the gap.
        </p>

        <p>
          The fix was pretty simple, just require a verified token at the final step when submitting the account data.
        </p>
        
        <p>
          I review code the way I do because I&apos;ve learned to ask:<br />
          <strong><em>&quot;What happens if someone does the thing they&apos;re not supposed to do?&quot;</em></strong><br />
          <strong><em>&quot;If I were an attacker, how would I exploit this?&quot;</em></strong>
        </p>
      </>
    ),
  },
  {
    id: 'failures',
    title: 'Design/Decision Failures',
    icon: <ClockAlertIcon />,
    summary: 'The approval system I should have built differently',
    content: (
      <>
        <p>
          A client requested an approval-based system. Quite late in the cycle. 
          Requirements were fuzzy. But they wanted it fast.
        </p>
        
        <p className="mb-2">
          I discussed with the team and we came up with a plan to quickly get started:<br />
          <em>Looking back, the signs were there that something was wrong.</em>
        </p>

        <ul>
          <ListItem comment="That was strange for sure.">
            Users could delete records regardless of approval status.
          </ListItem>
          <ListItem comment="Wait what?">
            If approved or rejected, no more modifications, but deletion was fine.
          </ListItem>
          <ListItem comment={`Inconsistent, "rejected" could also be used to cover that.`}>
            &quot;Revision&quot; status was like rejected, but allowed modification.
          </ListItem>
          <ListItem comment="That made no sense.">
            If you were selected as an approver, you lost access to add/modify records entirely.
          </ListItem>
          <ListItem comment="The conditions were not clear.">
            No approval history, each new attempt could replaced the previous one on certain conditions.
          </ListItem>
        </ul>

        <p>  
          <em>&quot;Good enough for now&quot; </em> is a mindset I usually respect. 
          But this time, the initial version had too many flaws. I didn&apos;t have a good reason to accept it. 
          I was thinking too far ahead, or maybe not far enough. Miscommunications happened, 
          but <strong>I should have thought and analyzed better.</strong> I wasted more time than anticipated.
        </p>
        
        <p>
          <strong>The new design</strong> fixed everything. 
          Approval history, clear status transitions, approvers could still do their day job, deletion respected approval state. 
          That should have been the solution from the start.
        </p>

        <p>
          <em>&quot;Move fast doesn&apos;t mean move without thinking.&quot;</em><br />
          If the rules don&apos;t make sense on paper, they won&apos;t make sense in code. 
          Building right away doesn&apos;t save time. Now <strong>I invest time to ask the hard questions before writing code.</strong>
        </p>
      </>
    ),
  }
];

export default function DayJobChapter() {
  const lastUpdated = new Date('2026-05-01');

  return (
    <Chapter
      id="day-job"
      title="Day Job"
      chapterNumber={3}
      lastUpdated={lastUpdated}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch gap-4 ruled">
        <KeyTakeaway>
          <KeyTakeawayContent className="space-y-1">
            <p className="font-semibold">Backend Developer · 2+ years</p>
            <p className="text-muted-foreground mb-2">Work on 5+ projects in a software house</p>
            <p className="flex flex-wrap gap-2 font-sans">
              <TechTag>
                <LaravelIcon /> Laravel
              </TechTag>
              <TechTag>
                <JavaScriptIcon /> JavaScript
              </TechTag>
            </p>
          </KeyTakeawayContent>

          <KeyTakeawayContent className="space-y-1 mt-4">
            <div className="font-semibold">Daily Reality</div>
            <KeyTakeawayList className="md:text-sm">
              <KeyTakeawayListItem>Check Sentry first thing</KeyTakeawayListItem>
              <KeyTakeawayListItem>Discuss and understand flows</KeyTakeawayListItem>
              <KeyTakeawayListItem>Sketch implementation strategies</KeyTakeawayListItem>
              <KeyTakeawayListItem>Review and refactor code</KeyTakeawayListItem>
            </KeyTakeawayList>
          </KeyTakeawayContent>

          <KeyTakeawayContent className="space-y-1 mt-4">
            <div className="font-semibold">What I Own</div>
            <KeyTakeawayList className="md:text-sm">
              <KeyTakeawayListItem>Authorization for a growing app</KeyTakeawayListItem>
              <KeyTakeawayListItem>Performance fixes (500k+ record tables)</KeyTakeawayListItem>
              <KeyTakeawayListItem>Security reviews of existing flows</KeyTakeawayListItem>
            </KeyTakeawayList>
          </KeyTakeawayContent>

          <KeyTakeawayContent className="text-sm mt-6">
            <em>Decisions have to be made. I help define them, not just implement them.</em>
          </KeyTakeawayContent>
        </KeyTakeaway>

        <StoryPoolProvider stories={stories} defaultStoryId="morning-ritual">
          <StoryPoolList className="z-10" />
          <StoryPoolContent className="md:col-span-2 mt-4" />
        </StoryPoolProvider>
      </div>
    </Chapter>
  );
}

interface ListItemProps {
  children: React.ReactNode;
  comment: string;
}

function ListItem({ children, comment }: ListItemProps) {
  return (
    <li className="flex items-baseline gap-2">
      <span className="shrink-0 font-serif" aria-hidden="true">-</span>
      <span className="mb-1.5">
        {children}<br />
        <em className="text-xs md:text-sm">{comment}</em>
      </span>
    </li>
  );
}