import MyNavBar from "../components/MyRedNavBar";
import MyWithButton from "../components/withButton";

export default function HomePage() {
  return (
    <div className="bg-white pb-28">
      <header>
        <nav>
          <MyNavBar></MyNavBar>
        </nav>
        <MyWithButton></MyWithButton>
      </header>
    </div>
  );
}
