import MyHeroSection from "../components/MyHeroSection";
import MyNewsLetter from "../components/MyNewsLetter";

export default function HeroPage() {
  return (
    <div className="bg-black pb-28">
      <MyHeroSection></MyHeroSection>
      <MyNewsLetter></MyNewsLetter>
    </div>
  );
}
