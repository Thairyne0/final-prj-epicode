import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import bkImage from "../assets/imageCar.jpg";
import { Link } from "react-router-dom";

export default function MyCard({ mechanic }) {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/professionisti/${mechanic.idProfessionista}/image`
        );

        if (!response.ok) {
          throw new Error("Immagine non trovata");
        }

        const blob = await response.blob();
        setImageSrc(URL.createObjectURL(blob));
      } catch (error) {
        console.error("Errore nel caricamento dell'immagine:", error);
      }
    };

    fetchImage();
  }, [mechanic.idProfessionista]);

  return (
    <div className="bg-[#1c1c1d] text-white  max-w-sm rounded overflow-hidden shadow-lg hover:bg-red-800 hover:text-white">
      <Link to={"/details/" + mechanic.idProfessionista}>
        {imageSrc ? (
          <img
            className="w-full h-48 object-cover"
            src={imageSrc}
            alt={mechanic.nomeAzienda}
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            {/* <p className="text-gray-500">Nessuna immagine</p> */}
            <img
              className="w-full h-48 object-cover"
              src={bkImage}
              alt="bk Image"
            />
          </div>
        )}
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2 ">{mechanic.nomeAzienda}</h2>
          <p className="text-white bg-red-800 rounded-md ps-2 py-1">
            {mechanic.indirizzo}
          </p>
        </div>
      </Link>
    </div>
  );
}

MyCard.propTypes = {
  mechanic: PropTypes.shape({
    idProfessionista: PropTypes.number.isRequired,
    nomeAzienda: PropTypes.string.isRequired,
    indirizzo: PropTypes.string.isRequired,
  }).isRequired,
};
