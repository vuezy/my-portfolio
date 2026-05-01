import AboutMeChapter from "./_components/AboutMeChapter";
import IntroductionChapter from "./_components/IntroductionChapter";
import profile from "@/data/profile.json";
import OriginChapter from "./_components/OriginChapter";
import DayJobChapter from "./_components/DayJobChapter";

export default function MainPage() {
  return (
    <>
      <h1 className="sr-only">{profile.name} - Portfolio</h1>
      <IntroductionChapter />
      <AboutMeChapter />
      <OriginChapter />
      <DayJobChapter />
    </>
  );
}
