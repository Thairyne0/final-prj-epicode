import PropTypes from "prop-types";

export default function MyCard({ mechanic }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl">
      <a href="#">
        <img
          className="w-full h-48 object-cover"
          src={`http://localhost:8080/api/mechanics/image/${mechanic.idProfessionista}`}
          alt={mechanic.NomeAzienda}
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2 hover:text-red-800">
            {mechanic.NomeAzienda}
          </h2>
          <p className="text-gray-700 text-base">{mechanic.indirizzo}</p>
        </div>
      </a>
    </div>
  );
}

MyCard.propTypes = {
  mechanic: PropTypes.shape({
    idProfessionista: PropTypes.number.isRequired,
    NomeAzienda: PropTypes.string.isRequired,
    indirizzo: PropTypes.string.isRequired,
  }).isRequired,
};
