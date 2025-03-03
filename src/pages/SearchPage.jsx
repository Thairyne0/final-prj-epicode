import MyNavBar from "../components/MyRedNavBar";
import MySearchBar from "../components/MySearchBar";
import MySearchCard from "../components/MySearchCard";

export default function SearchPage() {
  return (
    <div className="bg-white pb-28">
      <header>
        <nav>
          <MyNavBar></MyNavBar>
        </nav>
      </header>
      <main className="p-10 px-24">
        <MySearchBar></MySearchBar>
        <section className="bg-gray-50 rounded-md col-span-4 lg:col-span-3 p-6 shadow-md shadow-gray-400 mt-8">
          <h2 className=" font-bold text-4xl mb-6 bg-red-900 rounded-md p-4 shadow-md shadow-gray-400 text-white">
            Risultati
          </h2>
          <MySearchCard></MySearchCard>
          <MySearchCard></MySearchCard>
          <MySearchCard></MySearchCard>
          <MySearchCard></MySearchCard>
          <MySearchCard></MySearchCard>
        </section>
      </main>
    </div>
  );
}
