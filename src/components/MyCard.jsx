export default function MyCard() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl">
      <a href="#">
        <img
          className="w-full"
          src="https://placecats.com/neo/300/200"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2 hover:text-red-800">
            The Coldest Sunset
          </h2>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
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
      </a>
    </div>
  );
}
