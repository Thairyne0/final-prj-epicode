import MyHeroSection from "../components/MyHeroSection";
import MyBlackNavBar from "../components/MyBlackNavBar";
import MyNewsLetter from "../components/MyNewsLetter";

export default function HeroPage() {
  return (
    <div className="bg-black pb-28">
      <MyBlackNavBar></MyBlackNavBar>
      <MyHeroSection></MyHeroSection>
      <MyNewsLetter></MyNewsLetter>
    </div>
  );
}
