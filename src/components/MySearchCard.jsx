import image from "../assets/imageCar.jpg";

export default function MySearchCard() {
  return (
    <div className="bg-gray-100 rounded-md col-span-4 lg:col-span-3 p-6 shadow-md mt-6 hover:shadow-gray-400 grid grid-cols-2 items-center">
      <img src={image} alt="" className="w-96 rounded-md" />
      <h2>Nome meccanico</h2>
    </div>
  );
}
