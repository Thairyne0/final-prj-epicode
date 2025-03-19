import MyNavBar from "../components/MyRedNavBar";
import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import image from "../assets/imageCar.jpg";
import MyAllPrenotazioneComponent from "../components/MyAllPrenotazioniComponent";

export default function PersonalPage() {
  const [professionalData, setProfessionalData] = useState(null);
  const token = localStorage.getItem("token");

  let userId = null;
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      userId = decodedToken.userId;
    } catch (error) {
      console.error("Errore nella decodifica del token:", error);
    }
  }

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:8080/api/professionisti/${userId}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel recupero dei dati");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dati professionista:", data);
        setProfessionalData(data);
      })
      .catch((error) => console.error("Errore:", error));
  }, [userId]);

  if (!professionalData) {
    return <p>Caricamento...</p>;
  }

  return (
    <div className="bg-[#1c1c1d] pb-28">
      <header>
        <nav>
          <MyNavBar></MyNavBar>
        </nav>
      </header>
      <main>
        <section className="rounded-md p-6 m-10 text-white ">
          <div className="rounded-md flex items-center justify-center px-4 md:px-36 lg:px-56 ">
            <img
              src={image}
              alt="imagine professionista"
              className="rounded-md"
            />
          </div>
          <hr className="my-4" />
          <h2 className="text-2xl font-bold mb-4">
            {professionalData.nome} {professionalData.cognome}
          </h2>
          <p className="bg-red-900 border border-solid border-black rounded-md p-4 text-white">
            <strong>Descrizione: </strong>
            {professionalData.descrizione}
          </p>
          <p className="my-4 ps-4">
            <strong>Nome Officina: </strong> {professionalData.nomeAzienda}
          </p>
          <p className="my-4 ps-4">
            <strong>Indirizzo: </strong> {professionalData.indirizzo},{" "}
            {professionalData.citta}, {professionalData.provincia} -{" "}
            {professionalData.cap}
          </p>
        </section>
        <section className=" rounded-md p-6 m-10 bg-red-900 text-white">
          <h2 className="text-2xl font-bold mb-4">Le tue prenotazioni</h2>
          <MyAllPrenotazioneComponent idProfessionista={userId} />
        </section>
      </main>
    </div>
  );
}
