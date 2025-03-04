export default function MyDetailsComponent() {
  return (
    <div className="flex flex-col justify-around text-xl">
      <h2 className="bg-red-800 rounded-md p-2 font-bold text-2xl mb-4">
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
      <h2 className="bg-red-800 rounded-md p-2 font-bold text-2xl my-4">
        Orari
      </h2>
      <p className="ps-2">
        <strong>Lunedì</strong> - <strong>Venerdí</strong> :
        <strong> 08:00-16:00</strong>
      </p>
    </div>
  );
}
