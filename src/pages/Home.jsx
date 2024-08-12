import { Categories } from "../assets/mockData";
import hero from "../assets/images/hero.jpg";

function home() {
  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-[#4A1FB8] text-white text-xs font-bold px-2 py-3">Shop by categories</div>

          <ul className="space-y-4 bg-grey-100 p-3 border">
            {Categories.map((Category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border  border-[#4A1FB8] rounded-full mr-2"></div>
                {Category}
                </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img src={hero} alt="" className="h-full w-full" />

          <div className="absolute top-16 left-8 text-white">
            <p>Hi, Aqsa here welcome to my e-store</p>
            <h2>Welcome again</h2>
            <p>Million+ Products</p>
            <button>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
