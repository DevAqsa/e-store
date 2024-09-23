/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import addToCart from "../redux/cartSlice";
import { useDispatch } from "react-redux";


function ProductCard({ product }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    const action = { type: "ADD_TO_CART", payload: product };

    // Debugging log to inspect the action before dispatch
    console.log("Dispatching action:", action);

    // Dispatch the action to Redux store
    dispatch(addToCart(action));
    alert("Product Added to the cart Successfully");
  };
  // const handleAddToCart = (e, product) => {
  //   e.stopPropagation()
  //   e.preventDefault()
  //   useDispatch(addToCart(product))
  //   alert("Product Added to the cart Successfully")
  // };
  return (
    <div
      className="bg-white p-4 shadow rounded relative border transform
    transition-transform duration-300 hover-scale-105"
    >
      <img
        src={product.image}
        alt=""
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semi-bold">{product.name}</h3>
      <p className="text-gray-500">${product.Price}</p>

      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
      </div>

      <div
        className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-[#4A1FB8] group text-white text-sm rounded-full hover:w-32 hover:bg-red-300 transition-all"
        //  onClick={(e) => handleAddToCart (e, product)}
      >
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block" onClick={handleClick}>
          Add to Cart
        </span>
      </div>
    </div>
  );
}

export default ProductCard;
