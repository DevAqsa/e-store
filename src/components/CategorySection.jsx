import MenCategory from "../assets/images/MenCategory.jpg"
import WomanCategory from "../assets/images/WomanCategory.jpg"
import KidsCategory from "../assets/images/kidsCategory.jpg"


const categories = [
  {
    title: "Men",
    imageUrl: MenCategory,
  },

  {
    title: "WoMan",
    imageUrl: WomanCategory,
  },

  {
    title: "Kids",
    imageUrl: KidsCategory,
  },
];

function CategorySection() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 cursor-pointer">
      {categories.map((category, index) => (
        <div key={index} className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer">
          <img src={category.imageUrl} alt="pic" className="h-full w-full object-cover rounded-lg shadow-md"/>
          <div className="absolute top-20 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-gray-900 font-bold">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySection;
