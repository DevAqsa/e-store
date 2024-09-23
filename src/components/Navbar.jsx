import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const products = useSelector((state) => state.cart.products);

  return (
    <>
      <nav className="bg-white shadow-md">
        <div className="bg-[#4A1FB8] h-6 w-[900] "></div>
        <div className="container mx-auto px-4 md:px-16 md-px-24 py-4 flex justify-between items-center">
          <div className="text-lg font-bold">
            <Link to="/">EstoRe</Link>
          </div>
          <div className="relative flex-1 mx-4">
            <form>
              <input
                type="text"
                placeholder="Search Product"
                className="w-full border py-2 px-4"
              />
              <FaSearch className="absolute top-3 right-3 text-[#4A1FB8]" />
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-lg" />
              {products?.cartItems?.length > 0 && (
                <span className="absolute top-0 text-xs w-3 left-3 bg-red-800 rounded-full flex justify-center items-center text-white">
                  {products.cartItems.length}
                </span>
              )}
            </Link>

            <button className="hidden md:block">Login | Register</button>

            <button className="block md:hidden">
              <FaUser />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-10 py-4 text-md font-bold">
          <Link className="hover:underline">Home</Link>

          <Link to="/shop" className="hover:underline">
            Shop
          </Link>

          {/* <Link className="hover:underline">
     Shop</Link> */}

          <Link to="/contact" className="hover:underline">
            Contact
          </Link>

          <Link to="/about" className="hover:underline">
            About
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
