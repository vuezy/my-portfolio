import IntroductionChapter from "./_components/IntroductionChapter";
import profile from "@/data/profile.json";

export default function MainPage() {
  return (
    <>
      <h1 className="sr-only">{profile.name} - Portfolio</h1>
      <IntroductionChapter />
    </>
  );
}
