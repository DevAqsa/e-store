import { Categories } from "../assets/mockData";
import hero from "../assets/images/hero.jpg";
import InfoSection from "../components/infoSection";
import CategorySection from "../components/CategorySection";

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
            <p className="text-grey-600 mb-4">Hi, Welcome to our ESTORE</p>
            <h2 className="text-3xl font-bold">Welcome Fashion Sale</h2>
            <p className="text-xl mt-2.5 font-bold text-grey-800 ">Million+ Products Minimal Style</p>
            <button className="bg-[#4a1fb8] px-8 py-1.5 text-white mt-4 hover:bg-[#4a4aef] transform transition-transform duration-300 hover:scale-105 rounded">Shop Now</button>
          </div>
        </div>
      </div>
      <InfoSection/>   
      <CategorySection/>                                                                                             
    </div>
  );
}

export default home;
