import MyNavBar from "../components/MyRedNavBar";
import image from "../assets/imageCar.jpg";
import MyDetailsComponent from "../components/MyDetailsComponent";

export default function DetailsPage() {
  return (
    <div className="bg-white pb-28">
      <header>
        <nav>
          <MyNavBar></MyNavBar>
        </nav>
      </header>
      <main className="p-10 lg:px-24">
        <section className="bg-gray-50 rounded-md col-span-4 lg:col-span-3 p-6 shadow-md shadow-gray-400 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            <div className="col-span-3">
              <img src={image} alt="" className="w-96 rounded-md" />
            </div>
            <div className="col-span-3 hidden md:inline-block ">
              <img src={image} alt="" className="w-96 rounded-md" />
            </div>
            <div className="col-span-3 hidden md:inline-block">
              <img src={image} alt="" className="w-96 rounded-md" />
            </div>
            <div className="col-span-3 hidden md:inline-block">
              <img src={image} alt="" className="w-96 rounded-md" />
            </div>
          </div>
          <div className="bg-red-900 rounded-md flex flex-col justify-start p-4">
            <h2 className="text-2xl font-bold text-black mb-4">
              Nome meccanico
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              consectetur expedita quae? Ipsam quam aliquam omnis. Perspiciatis
              possimus praesentium est sed numquam! Animi, tempora! Recusandae
            </p>
            <hr className="mt-28"></hr>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-red-800 border-2 border-red-800">
                #photography
              </span>
              <span className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-red-800 border-2 border-red-800">
                #travel
              </span>
              <span className="inline-block bg-red-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 hover:bg-red-800 border-2 border-red-800">
                #winter
              </span>
            </div>
          </div>
        </section>
        <section className="bg-gray-200 rounded-md col-span-4 lg:col-span-3 p-6 shadow-md shadow-gray-400 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <MyDetailsComponent></MyDetailsComponent>
        </section>
      </main>
    </div>
  );
}
