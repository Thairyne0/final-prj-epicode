import MyCard from "../components/MyCard";
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
          <div className="bg-gray-50 rounded-md col-span-4 lg:col-span-3 p-6 shadow-md shadow-gray-400">
            <h2 className=" font-bold text-4xl mb-6">
              Professionisti in evidenza
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 justify-around">
              <MyCard></MyCard>
              <MyCard></MyCard>
              <MyCard></MyCard>
              <MyCard></MyCard>
              <MyCard></MyCard>
              <MyCard></MyCard>
              <MyCard></MyCard>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
