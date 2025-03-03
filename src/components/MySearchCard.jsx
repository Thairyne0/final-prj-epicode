import image from "../assets/imageCar.jpg";

export default function MySearchCard() {
  return (
    <div className="bg-gray-100 rounded-md col-span-4 lg:col-span-3 p-6 shadow-md mt-6 hover:shadow-gray-400">
      <a href="">
        <div className="flex flex-row justify-between items-center">
          <img src={image} alt="" className="w-96 rounded-md" />
          <div className="p-4 flex flex-col justify-around">
            <h2 className="text-2xl font-bold hover:text-red-800">
              Nome meccanico
            </h2>
            <p className="pe-28">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              consectetur expedita quae? Ipsam quam aliquam omnis. Perspiciatis
              possimus praesentium est sed numquam! Animi, tempora! Recusandae
              suscipit voluptatem voluptates laborum magnam!
            </p>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-red-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-red-800">
                #photography
              </span>
              <span className="inline-block bg-red-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-red-800">
                #travel
              </span>
              <span className="inline-block bg-red-900 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-red-800">
                #winter
              </span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
