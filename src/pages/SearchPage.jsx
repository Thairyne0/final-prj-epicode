import { useState, useEffect } from "react";
import MyNavBar from "../components/MyRedNavBar";
import MySearchBar from "../components/MySearchBar";
import MySearchCard from "../components/MySearchCard";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [risultati, setRisultati] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);
  };

  useEffect(() => {
    if (query.trim() === "") {
      setRisultati([]);
      return;
    }

    setLoading(true);
    fetch(`http://localhost:8080/api/professionisti/search?query=${query}`)
      .then((response) => {
        if (!response.ok) throw new Error(`Errore API: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setRisultati(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [query]);

  return (
    <div className="bg-white pb-28">
      <header>
        <nav>
          <MyNavBar />
        </nav>
      </header>
      <main className="p-10 px-24">
        <MySearchBar onSearch={handleSearch} />

        <section className="bg-gray-50 rounded-md col-span-4 lg:col-span-3 p-6 shadow-md shadow-gray-400 mt-8">
          <h2 className="font-bold text-4xl mb-6 bg-red-900 rounded-md p-4 shadow-md shadow-gray-400 text-white">
            Risultati
          </h2>

          {loading && <p>Caricamento...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {risultati.length === 0 && !loading && !error && (
            <p>Nessun risultato trovato.</p>
          )}

          {risultati.map((professionista) => (
            <MySearchCard key={professionista.id} data={professionista} />
          ))}
        </section>
      </main>
    </div>
  );
}
