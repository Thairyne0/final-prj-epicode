import MyHeroSection from "../components/MyHeroSection";
import MyNavBar from "../components/MyNavBar";
import MyNewsLetter from "../components/MyNewsLetter";

export default function HeroPage() {
  return (
    <div className="bg-black pb-28">
      <MyNavBar></MyNavBar>
      <MyHeroSection></MyHeroSection>
      <MyNewsLetter></MyNewsLetter>
    </div>
  );
}
