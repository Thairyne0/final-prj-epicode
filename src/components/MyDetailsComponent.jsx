export default function MyDetailsComponent() {
  return (
    <div className="flex flex-col justify-around text-xl">
      <h2 className="bg-red-800 rounded-md p-2 font-bold text-2xl mb-4 shadow-md text-white">
        Dettagli del professionista
      </h2>
      <p className="ps-2">
        <strong>Nome</strong>: Mario Rossi
      </p>
      <p className="ps-2">
        <strong>Cellulare</strong>: 333 1234567
      </p>
      <p className="ps-2">
        <strong>Email</strong>: marioRossi@outlook.com
      </p>
      <p className="ps-2">
        <strong>Indirizzo</strong>: Piazza Garibaldi 24 Milano 81021 Italia
      </p>
      <h2 className="bg-red-800 rounded-md p-2 font-bold text-2xl my-4 shadow-md text-white">
        Orari
      </h2>
      <p className="ps-2">
        <strong>Lunedì</strong> - <strong>Venerdí</strong> :
        <strong> 08:00-16:00</strong>
      </p>
      <div className="mt-6 ps-4">
        <button
          type="button"
          className="text-white text-xl font-bold bg-gradient-to-r from-red-600 via-red-00 to-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg px-5 py-2.5 text-center me-2 mb-2"
        >
          Prenota un appuntamento
        </button>
      </div>
    </div>
  );
}
