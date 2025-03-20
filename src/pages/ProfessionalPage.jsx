import MyFooter from "../components/MyFooter";
import MyProfessionalForm from "../components/MyProfessionalForm";
import MyNavBar from "../components/MyRedNavBar";

export default function ProfessionalPage() {
  return (
    <div className="bg-white pb-28">
      <header>
        <nav>
          <MyNavBar></MyNavBar>
        </nav>
      </header>
      <main className="p-10 lg:px-24">
        <section className=" rounded-md p-6 shadow-md shadow-gray-400">
          <h2 className="text-2xl font-bold mb-4">
            Vuoi diventare un professionista sulla nostra piattaforma?
          </h2>
          <h2 className="text-xl mb-4">
            Compila questo modulo e crea la tua pagina
          </h2>
          <MyProfessionalForm></MyProfessionalForm>
        </section>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}
