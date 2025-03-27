import { useState } from "react";

const token = localStorage.getItem("token");

function getUserIdFromToken(token) {
  if (!token) return null;

  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = JSON.parse(atob(base64));

    console.log(jsonPayload);

    return jsonPayload.userId;
  } catch (error) {
    console.error("Errore nella decodifica del token:", error);
    return null;
  }
}

const userId = getUserIdFromToken(token);

export default function MyProfessionalForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    descrizione: "",
    nomeAzienda: "",
    regione: "",
    indirizzo: "",
    citta: "",
    provincia: "",
    cap: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      console.error("ID utente non trovato nel token!");
      return;
    }

    const requestData = {
      utenteId: userId,
      ...formData,
    };

    console.log(requestData);

    try {
      const response = await fetch(
        "http://localhost:8080/api/professionisti/create",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      if (!response.ok) {
        console.log(requestData);
        throw new Error("Errore durante la registrazione");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <p className="mt-1 text-base text-white">
            Queste informazioni saranno visualizzate sulla tua pagina personale.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label className="block text-sm font-medium text-white mb-2">
                Descrivi te stesso e la tua professionalità
              </label>
              <textarea
                name="descrizione"
                rows={3}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-red-900"
                onChange={handleChange}
                value={formData.descrizione}
              />
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold text-white">
            Informazioni Personali
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-white mb-2">
                Nome
              </label>
              <input
                name="nome"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-red-900"
                onChange={handleChange}
                value={formData.nome}
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-white mb-2">
                Cognome
              </label>
              <input
                name="cognome"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-red-900"
                onChange={handleChange}
                value={formData.cognome}
              />
            </div>

            <div className="sm:col-span-4">
              <label className="block text-sm font-medium text-white mb-2">
                Indirizzo Email
              </label>
              <input
                name="email"
                type="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-red-900"
                onChange={handleChange}
                value={formData.email}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">
                Regione
              </label>
              <input
                name="regione"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-red-900"
                onChange={handleChange}
                value={formData.regione}
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-white mb-2">
                Nome Azienda
              </label>
              <input
                name="nomeAzienda"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-red-900"
                onChange={handleChange}
                value={formData.nomeAzienda}
              />
            </div>

            <div className="sm:col-span-3">
              <label className="block text-sm font-medium text-white mb-2">
                Indirizzo
              </label>
              <input
                name="indirizzo"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-red-900"
                onChange={handleChange}
                value={formData.indirizzo}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">
                Città
              </label>
              <input
                name="citta"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-red-900"
                onChange={handleChange}
                value={formData.citta}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">
                Provincia
              </label>
              <input
                name="provincia"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-red-900"
                onChange={handleChange}
                value={formData.provincia}
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">
                CAP
              </label>
              <input
                name="cap"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 focus:outline-red-900"
                onChange={handleChange}
                value={formData.cap}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold text-gray-900 hover:text-red-600"
        >
          Annulla
        </button>
        <button
          type="submit"
          className="rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
        >
          Salva
        </button>
      </div>
    </form>
  );
}
