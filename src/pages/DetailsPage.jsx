import MyNavBar from "../components/MyRedNavBar";

export default function DetailsPage() {
  return (
    <div className="bg-white pb-28">
      <header>
        <nav>
          <MyNavBar></MyNavBar>
        </nav>
      </header>
      <main className="p-10 px-24">
        <section className="bg-gray-50 rounded-md col-span-4 lg:col-span-3 p-6 shadow-md shadow-gray-400 mt-8"></section>
      </main>
    </div>
  );
}
