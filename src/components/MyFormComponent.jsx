import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";

export default function MyFormComponent() {
  const [giornoPrenotazione, setDataPrenotazione] = useState(new Date());
  const [oraPrenotazione, setOrarioPrenotazione] = useState("12:00");

  const [formData, setFormData] = useState({
    marcaVeicolo: "",
    modelloVeicolo: "",
    descrizioneProblema: "",
    nomeUtente: "",
    cognomeUtente: "",
    emailUtente: "",
    indirizzo: "",
    citta: "",
    provincia: "",
    cap: "",
    regione: "",
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      dataPrenotazione: giornoPrenotazione.toISOString().split("T")[0],
      orarioPrenotazione: oraPrenotazione + ":00",
    }));
  }, [giornoPrenotazione, oraPrenotazione]);

  const { id } = useParams();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Errore: Utente non autenticato.");
      return;
    }

    let userId;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      userId = payload.userId;
      console.log(userId);
    } catch (error) {
      console.log("Errore nella decodifica del token:", error);
      alert("Errore: Token non valido.");
      return;
    }

    const requestBody = {
      ...formData,
      idProfessionista: id,
      utenteId: userId,
    };

    console.log(requestBody);

    try {
      const response = await fetch(
        "http://localhost:8080/api/prenotazioni/crea",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        console.log(requestBody);
        alert("Prenotazione effettuata con successo!");
      } else {
        const errorData = await response.json();
        alert(`Errore nella prenotazione: ${errorData.message}`);
      }
    } catch (error) {
      console.log(requestBody);
      console.error("Errore nella richiesta:", error);
      alert("Errore imprevisto. Riprova più tardi.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className=" font-bold text-2xl text-white">
            Prenotazione appuntamento
          </h2>
          <p className="mt-1 text-sm/6 text-white">
            Queste informazioni saranno visualizzate dal professionista per
            poterti garantire il miglior servizio possibile.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="marcaVeicolo"
                className="block text-sm/6 font-medium text-white"
              >
                Marca Veicolo
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-[#1c1c1d] pl-3 outline outline-1 -outline-offset-1  focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="marcaVeicolo"
                    name="marcaVeicolo"
                    type="text"
                    placeholder="BMW, Fiat, Audi, ..."
                    value={formData.marcaVeicolo}
                    onChange={handleChange}
                    className="bg-[#1c1c1d] block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-white placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="modelloVeicolo"
                className="block text-sm/6 font-medium text-white"
              >
                Modello Veicolo
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-[#1c1c1d] pl-3 outline outline-1 -outline-offset-1  focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    id="modelloVeicolo"
                    name="modelloVeicolo"
                    type="text"
                    placeholder="Punto, Ibiza, Polo, ..."
                    value={formData.modelloVeicolo}
                    onChange={handleChange}
                    className="bg-[#1c1c1d] block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-white placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="descrizioneProblema"
                className="block text-sm/6 font-medium text-white"
              >
                Descrivi il problema della tua auto
              </label>
              <div className="mt-2">
                <textarea
                  id="descrizioneProblema"
                  name="descrizioneProblema"
                  value={formData.descrizioneProblema}
                  onChange={handleChange}
                  rows={3}
                  className="block w-full rounded-md bg-[#1c1c1d] px-3 py-1.5 text-base text-white    placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm/6 font-medium text-white"
              >
                Foto del problema della tua auto (opzionale)
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-[#1c1c1d]">
                <div className="text-center">
                  <PhotoIcon
                    aria-hidden="true"
                    className="mx-auto size-12 text-gray-300"
                  />
                  <div className="mt-4 flex text-sm/6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-red-900 font-semibold text-white px-2 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-700 focus-within:ring-offset-2 hover:text-red-700"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white">
            Informazioni Personali
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="nomeUtente"
                className="block text-sm/6 font-medium text-white"
              >
                Nome
              </label>
              <div className="mt-2">
                <input
                  id="nomeUtente"
                  name="nomeUtente"
                  type="text"
                  value={formData.nomeUtente}
                  onChange={handleChange}
                  autoComplete="given-name"
                  placeholder="Mario, Luigi, Giovanni, ..."
                  className="block w-full rounded-md bg-[#1c1c1d] px-3 py-1.5 text-base text-white  placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="cognomeUtente"
                className="block text-sm/6 font-medium text-white"
              >
                Cognome
              </label>
              <div className="mt-2">
                <input
                  id="cognomeUtente"
                  name="cognomeUtente"
                  type="text"
                  value={formData.cognomeUtente}
                  onChange={handleChange}
                  placeholder="Rossi, Bianchi, Verdi, ..."
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-[#1c1c1d] px-3 py-1.5 text-base text-white placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="emailUtente"
                className="block text-sm/6 font-medium text-white"
              >
                Indirizzo Email
              </label>
              <div className="mt-2">
                <input
                  id="emailUtente"
                  name="emailUtente"
                  type="email"
                  value={formData.emailUtente}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="email@email.com"
                  className="block w-full rounded-md bg-[#1c1c1d] px-3 py-1.5 text-base text-white placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="regione"
                className="block text-sm/6 font-medium text-white"
              >
                Regione
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="regione"
                  name="regione"
                  autoComplete="country-name"
                  value={formData.regione}
                  onChange={handleChange}
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-[#1c1c1d] py-1.5 pl-3 pr-8 text-base text-white focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                >
                  <option>Abruzzo</option>
                  <option>Basilicata</option>
                  <option>Calabria</option>
                  <option>Campania</option>
                  <option>Emilia-Romagna</option>
                  <option>Friuli-Venezia Giulia</option>
                  <option>Lazio</option>
                  <option>Liguria</option>
                  <option>Lombardia</option>
                  <option>Marche</option>
                  <option>Molise</option>
                  <option>Piemonte</option>
                  <option>Puglia</option>
                  <option>Sardegna</option>
                  <option>Sicilia</option>
                  <option>Toscana</option>
                  <option>Trentino-Alto Adige</option>
                  <option>Umbria</option>
                  <option>Valle d&#39;Aosta</option>
                  <option>Veneto</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="indirizzo"
                className="block text-sm/6 font-medium text-white"
              >
                Indirizzo
              </label>
              <div className="mt-2">
                <input
                  id="indirizzo"
                  name="indirizzo"
                  type="text"
                  value={formData.indirizzo}
                  onChange={handleChange}
                  placeholder="Via, Piazza, Viale, ..."
                  autoComplete="street-address"
                  className="block w-full rounded-md bg-[#1c1c1d] px-3 py-1.5 text-base text-white placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="citta"
                className="block text-sm/6 font-medium text-white"
              >
                Cittá
              </label>
              <div className="mt-2">
                <input
                  id="citta"
                  name="citta"
                  type="text"
                  value={formData.citta}
                  onChange={handleChange}
                  placeholder="Roma, Milano, Torino, ..."
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-[#1c1c1d] px-3 py-1.5 text-base text-white placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="provincia"
                className="block text-sm/6 font-medium text-white"
              >
                Stato / Provincia
              </label>
              <div className="mt-2">
                <input
                  id="provincia"
                  name="provincia"
                  type="text"
                  value={formData.provincia}
                  onChange={handleChange}
                  placeholder="RM, MI, TO, ..."
                  autoComplete="address-level1"
                  className="block w-full rounded-md bg-[#1c1c1d] px-3 py-1.5 text-base text-white placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="cap"
                className="block text-sm/6 font-medium text-white"
              >
                CAP
              </label>
              <div className="mt-2">
                <input
                  id="cap"
                  name="cap"
                  type="text"
                  value={formData.cap}
                  onChange={handleChange}
                  placeholder="XXXXX"
                  autoComplete="postal-code"
                  className="block w-full rounded-md bg-[#1c1c1d] px-3 py-1.5 text-base text-white placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <div className="mb-4">
                <label className="block font-medium mb-1 text-white">
                  Seleziona la data:
                </label>
                <DatePicker
                  selected={giornoPrenotazione}
                  onChange={(date) => setDataPrenotazione(date)}
                  dateFormat="yyyy-MM-dd"
                  className=" p-2 rounded w-full bg-[#1c1c1d] text-white"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <div className="mb-4">
                <label className="block font-medium mb-1 text-white">
                  Seleziona orario:
                </label>
                <TimePicker
                  onChange={setOrarioPrenotazione}
                  value={oraPrenotazione}
                  disableClock
                  className=" p-2 rounded w-full bg-[#1c1c1d] text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
