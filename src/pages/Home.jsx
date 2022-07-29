import IntroTitles from "../components/Titles/IntroTitles";
import Work from "../components/Work";
import AboutMeAndSkills from "../components/AboutMeAndSkills";
import GetInTouch from "../components/GetInTouch";
import CvButton from "../components/CvButton";

export default function Home() {
  return (
    <>
      <IntroTitles />
      <Work />
      <CvButton />
      <AboutMeAndSkills />
      <GetInTouch />
    </>
  );
}
