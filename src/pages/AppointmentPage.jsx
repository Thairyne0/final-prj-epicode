import { useParams } from "react-router-dom";
import MyFormComponent from "../components/MyFormComponent";
import MyNavBar from "../components/MyRedNavBar";
import MyFooter from "../components/MyFooter";

export default function AppointmentPage() {
  const { mechanicId } = useParams();

  return (
    <div className="bg-[#1c1c1d] pb-28">
      <header>
        <nav>
          <MyNavBar />
        </nav>
      </header>
      <main className="p-10 lg:px-24">
        <section className="rounded-md p-6 bg-red-900">
          <MyFormComponent mechanicId={Number(mechanicId)} />
        </section>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}
