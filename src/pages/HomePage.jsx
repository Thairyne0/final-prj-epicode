import MyCard from "../components/MyCard";
import MyNavBar from "../components/MyRedNavBar";
// import MyWithButton from "../components/withButton";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [mechanics, setMechanics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/professionisti")
      .then((response) => response.json())
      .then((data) => setMechanics(data))
      .catch((error) =>
        console.error("Errore nel recupero dei meccanici:", error)
      );
  }, []);

  return (
    <div className="bg-[#1c1c1d] pb-28">
      <header>
        <nav>
          <MyNavBar />
        </nav>
        {/* <MyWithButton /> */}
      </header>
      <main>
        <section className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-4 mt-10">
          <div className="bg-gradient-to-b from-red-900 to-black rounded-md p-6  hidden lg:block text-white">
            CIAO 1
          </div>
          <div className="bg-gradient-to-b from-red-900 to-black rounded-md col-span-4 lg:col-span-3 p-6 ">
            <h2 className="font-bold text-4xl mb-6 text-white">
              Professionisti in evidenza
            </h2>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-around">
              {mechanics.map((mechanic) => (
                <MyCard key={mechanic.id} mechanic={mechanic} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}
