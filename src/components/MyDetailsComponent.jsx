import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function MyDetailsComponent({ mechanic }) {
  const navigate = useNavigate();

  if (!mechanic) {
    return <p>Caricamento in corso...</p>;
  }

  const handleAppointmentClick = () => {
    navigate(`/appointment/${mechanic.idProfessionista}`, {
      state: { mechanic },
    });
  };

  return (
    <div className="flex flex-col justify-around text-xl">
      <h2 className="bg-[#1c1c1d] rounded-md p-2 font-bold text-2xl mb-4 shadow-md text-white">
        Dettagli del professionista
      </h2>
      <p className="ps-2 text-white">
        <strong>Nome</strong>: {mechanic.nome} {mechanic.cognome}
      </p>
      <p className="ps-2 text-white">
        <strong>Cellulare</strong>: {mechanic.telefono || "Non disponibile"}
      </p>
      <p className="ps-2 text-white">
        <strong>Email</strong>: {mechanic.email}
      </p>
      <p className="ps-2 text-white">
        <strong>Indirizzo</strong>: {mechanic.indirizzo}, {mechanic.citta},{" "}
        {mechanic.provincia}, {mechanic.cap}, {mechanic.regione}
      </p>
      <h2 className="bg-[#1c1c1d] rounded-md p-2 font-bold text-2xl my-4 shadow-md text-white">
        Orari
      </h2>
      <p className="ps-2 text-white">
        <strong>Lunedì</strong> - <strong>Venerdì</strong> :{" "}
        <strong>{mechanic.orari || "Non disponibili"}</strong>
      </p>
      <div className="mt-6 ps-4">
        <button
          type="button"
          onClick={handleAppointmentClick}
          className="text-white text-xl font-bold bg-gradient-to-r from-red-600 via-red-00 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          Prenota un appuntamento
        </button>
      </div>
    </div>
  );
}

MyDetailsComponent.propTypes = {
  mechanic: PropTypes.shape({
    idProfessionista: PropTypes.number.isRequired,
    nome: PropTypes.string,
    cognome: PropTypes.string,
    telefono: PropTypes.string,
    email: PropTypes.string,
    indirizzo: PropTypes.string,
    citta: PropTypes.string,
    provincia: PropTypes.string,
    cap: PropTypes.string,
    regione: PropTypes.string,
    orari: PropTypes.string,
  }).isRequired,
};
