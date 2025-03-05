import MyFormComponent from "../components/MyFormComponent";
import MyNavBar from "../components/MyRedNavBar";

export default function AppointmentPage() {
  return (
    <div className="bg-white pb-28">
      <header>
        <nav>
          <MyNavBar></MyNavBar>
        </nav>
      </header>
      <main className="p-10 lg:px-24">
        <section className=" rounded-md p-6 shadow-md shadow-gray-400">
          <MyFormComponent></MyFormComponent>
        </section>
      </main>
    </div>
  );
}
