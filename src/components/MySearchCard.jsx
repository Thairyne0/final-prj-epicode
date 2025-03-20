import image from "../assets/imageCar.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MySearchCard({ data }) {
  return (
    <div className="bg-[#1c1c1d] rounded-md col-span-4 lg:col-span-3 p-6 mt-6 hover:bg-red-900 text-white">
      <Link to={"/details/" + data.idProfessionista}>
        <div className="flex flex-row justify-start items-center">
          <img src={image} alt="" className="w-96 rounded-md" />
          <div className="p-4 flex flex-col justify-around items-start">
            <h2 className="text-2xl font-bold hover:text-red-800">
              {data.nome} {data.cognome}
            </h2>
            <p className="pe-28">
              {data.descrizione || "Nessuna descrizione disponibile"}
            </p>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-red-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-red-800">
                {data.citta}
              </span>
              <span className="inline-block bg-red-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-red-800">
                {data.regione}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

MySearchCard.propTypes = {
  data: PropTypes.object.isRequired,
};
