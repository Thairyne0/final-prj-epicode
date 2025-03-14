import { useState, useEffect } from "react";
import image from "../assets/imageCar.jpg";
import { useParams } from "react-router-dom";
import MyNavBar from "../components/MyRedNavBar";

export default function AppointmentDetailsPage() {
  const { prenotazioneId } = useParams();
  const [prenotazione, setPrenotazione] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!prenotazioneId) {
      setError("ID prenotazione non valido");
      setLoading(false);
      return;
    }

    fetch(
      `http://localhost:8080/api/prenotazioni/prenotazione/${prenotazioneId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Errore API: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPrenotazione(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [prenotazioneId]);

  return (
    <div className="bg-white pb-28">
      <header>
        <nav>
          <MyNavBar />
        </nav>
      </header>
      <main>
        <section className="rounded-md p-6 shadow-md shadow-gray-400 m-10">
          <h2 className="text-2xl font-bold mb-4">
            Dettagli della prenotazione
          </h2>

          {loading ? (
            <p>Caricamento...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : prenotazione ? (
            <>
              <div className="ps-4 text-xl font-semibold">
                <p>
                  <strong>ID Prenotazione:</strong> {prenotazione.id}
                </p>
                <p>
                  <strong>Utente:</strong> {prenotazione.nomeUtente}{" "}
                  {prenotazione.cognomeUtente}
                </p>
                <p>
                  <strong>Data:</strong> {prenotazione.dataPrenotazione}
                </p>
                <p>
                  <strong>Ora:</strong> {prenotazione.orarioPrenotazione}
                </p>
                <p>
                  <strong>Auto:</strong> {prenotazione.marcaVeicolo}{" "}
                  {prenotazione.modelloVeicolo}
                </p>
                <p>
                  <strong>Descrizione:</strong>{" "}
                  {prenotazione.descrizioneProblema}
                </p>
              </div>
              <hr className="my-4" />
              <div className="rounded-md flex justify-center px-4 md:pe-72 lg:pe-96">
                <img src={image} alt="" className="w-full rounded-md" />
              </div>
            </>
          ) : (
            <p>Nessuna prenotazione trovata.</p>
          )}
        </section>
      </main>
    </div>
  );
}
