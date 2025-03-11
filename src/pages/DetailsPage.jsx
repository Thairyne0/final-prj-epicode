import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyNavBar from "../components/MyRedNavBar";
import image from "../assets/imageCar.jpg";
import MyDetailsComponent from "../components/MyDetailsComponent";

export default function DetailsPage() {
  const { id } = useParams();
  const [mechanic, setMechanic] = useState(null);

  useEffect(() => {
    const fetchMechanic = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/professionisti/${id}`
        );
        if (!response.ok) {
          throw new Error("Errore nel recupero del professionista");
        }
        const data = await response.json();
        setMechanic(data);
      } catch (error) {
        console.error("Errore nel caricamento dei dati:", error);
      }
    };

    fetchMechanic();
  }, [id]);

  if (!mechanic) {
    return <p className="text-center text-red-700">Caricamento...</p>;
  }

  return (
    <div className="bg-white pb-28">
      <header>
        <nav>
          <MyNavBar />
        </nav>
      </header>
      <main className="p-10 lg:px-24">
        <section className="bg-red-900 rounded-md col-span-4 lg:col-span-3 p-6 shadow-md shadow-gray-400 mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            <div className="col-span-3">
              <img
                src={image}
                alt={mechanic.nomeAzienda}
                className="w-96 rounded-md"
              />
            </div>
            <div className="col-span-3 hidden md:inline-block">
              <img
                src={image}
                alt={mechanic.nomeAzienda}
                className="w-96 rounded-md"
              />
            </div>
          </div>
          <div className="bg-neutral-300 rounded-md flex flex-col justify-start p-4 shadow-md">
            <h2 className="text-2xl font-bold text-red-900 mb-4">
              {mechanic.nomeAzienda}
            </h2>
            <p className="text-black text-xl font-semibold">
              {mechanic.descrizione}
            </p>
            <hr className="mt-16" />
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {mechanic.regione}
              </span>
              <span className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                {mechanic.citta}
              </span>
            </div>
          </div>
        </section>
        <section className="bg-neutral-300 rounded-md col-span-4 lg:col-span-3 p-6 shadow-md shadow-gray-400 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <MyDetailsComponent mechanic={mechanic} />
        </section>
      </main>
    </div>
  );
}
