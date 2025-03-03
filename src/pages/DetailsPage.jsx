import MyNavBar from "../components/MyRedNavBar";
import image from "../assets/imageCar.jpg";

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
          </div>
        </section>
      </main>
    </div>
  );
}
