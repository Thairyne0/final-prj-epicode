import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MyAllPrenotazioneComponent = ({ idProfessionista }) => {
  const [prenotazioni, setPrenotazioni] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrenotazioni = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/prenotazioni/${idProfessionista}`
        );
        console.log("Risposta API:", response.data);
        setPrenotazioni(response.data);
      } catch (error) {
        console.error("Errore nel recupero delle prenotazioni", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrenotazioni();
  }, [idProfessionista]);

  if (loading) {
    return <p>Caricamento delle prenotazioni...</p>;
  }

  return (
    <div className="p-4 bg-white shadow rounded-lg text-black">
      <h2 className="text-xl font-bold mb-4">Prenotazioni ricevute</h2>
      {prenotazioni.length === 0 ? (
        <p>Nessuna prenotazione trovata.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">ID Prenotazione</th>
              <th className="border p-2">Data</th>
              <th className="border p-2">Orario</th>
              <th className="border p-2">Cliente</th>
            </tr>
          </thead>
          <tbody>
            {prenotazioni.map((prenotazione) => (
              <tr key={prenotazione.id} className="hover:bg-gray-50">
                <td className="border p-2">
                  <Link
                    to={`/prenotazione/details/${prenotazione.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {prenotazione.id}
                  </Link>
                </td>
                <td className="border p-2">{prenotazione.dataPrenotazione}</td>
                <td className="border p-2">
                  {prenotazione.orarioPrenotazione}
                </td>
                <td className="border p-2">
                  {prenotazione.nomeUtente} {prenotazione.cognomeUtente}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

MyAllPrenotazioneComponent.propTypes = {
  idProfessionista: PropTypes.number.isRequired,
};

export default MyAllPrenotazioneComponent;
