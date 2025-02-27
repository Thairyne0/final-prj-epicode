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
      <main>
        <section className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-4 mt-10 ">
          <div className="bg-red-900 rounded-md p-6 shadow-md shadow-gray-400 hidden lg:block text-white">
            CIAO 1
          </div>
          <div className="bg-neutral-200 rounded-md col-span-4 lg:col-span-3 p-6 shadow-md shadow-gray-400">
            CIAO 2
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
