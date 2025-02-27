import MyHeroSection from "../components/MyHeroSection";
import MyBlackNavBar from "../components/MyBlackNavBar";
import MyNewsLetter from "../components/MyNewsLetter";
import RotatingText from "../externalComponents/RotatingText";
import SpotlightCard from "../externalComponents/SpotlightCard/SpotlightCard";

export default function HeroPage() {
  return (
    <div className="bg-black pb-28">
      <MyBlackNavBar></MyBlackNavBar>
      <MyHeroSection></MyHeroSection>
      <div className="flex items-center justify-center font-bold span gap-2 text-2xl mt-20 mb-6">
        <p className="text-white">Mechanical</p>
        <RotatingText
          texts={["Problems", "Solutions", "Designs", "Innovations"]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-red-800 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>
      <div className="grid grid-cols-1 gap-10 px-20 pt-8 sm:grid-cols-3 justify-center">
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(153, 27, 27, 0.2)"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Affidabilità</h2>
          <p className="text-white">
            Il nostro servizio garantisce la massima affidabilità e sicurezza
            per la tua auto.
          </p>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(153, 27, 27, 0.2)"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Larga Utenza</h2>
          <p className="text-white">
            Il nostro servizio è rivolto a tutti e per ogni lavoro. Nessuna
            esclusione.
          </p>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(153, 27, 27, 0.2)"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Servizi</h2>
          <p className="text-white">
            Offriamo una vasta gamma di servizi per soddisfare ogni tua
            esigenza. Siamo qui per te.
          </p>
        </SpotlightCard>
      </div>
      <MyNewsLetter></MyNewsLetter>
    </div>
  );
}
