/* eslint-disable react/jsx-no-undef */
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Model from "../components/Model";
import ChangeAddress from "../components/ChangeAddress";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log('Cart state:', cart); 
  // eslint-disable-next-line no-unused-vars
  const [address, setAddress] = useState("main street , 0012");
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4 ">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    {/* <div className="flex space-x-12 items-center">
                      <p>${product.price.toFixed(2)}</p>
                      <div className="flex items-center justify-center border">
                        <button className="text-xl font-bold px-1.5 border-r">
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button className="text-xl px-1 border-1">+</button>
                      </div>

                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </div> */}

<div className="flex space-x-12 items-center">
  <p >${product.price ? product.price.toFixed(2) : '0.00'}</p>
  <div className="flex items-center justify-center border">
    <button className="text-xl font-bold px-1.5 border-r">
      -
    </button>
    <p className="text-xl px-2">{product.quantity}</p>
    <button className="text-xl px-1 border-1">+</button>
  </div>

  <p>${(product.price && product.quantity) ? (product.quantity * product.price).toFixed(2) : '0.00'}</p>
  <button className="text-red-500 hover:text-red-700">
    <FaTrash />
  </button>
</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL </h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items</span>
                <span>{cart.totalQuantity}</span>
              </div>

              <div className="mb-4 border-b pb-1">
                <p> Shipping :</p>
                <p className="ml-2">
                  Shipping to: {"  "}
                  <span className="text-sm font-bold">{address}</span>
                </p>

                <button
                  className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={() => setIsModelOpen(true)}
                >
                  Change Address
                </button>
              </div>

              <div className="flex justify-between mb-4">
                <span>Total Price: </span>
                <span>${cart.totalPrice?.toFixed(2) || '0.00'}</span>
              </div>



              <button className="w-full bg-[#4A1FB8] text-white py-2 hover:bg-blue-800">
                Proceed to CheckOut
              </button>
            </div>
          </div>

          <Model
            isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}
          >
            <ChangeAddress setAddress={setAddress} setIsModelOpen={setIsModelOpen}/>
          </Model>
        </div>
      ) : (
        // empty cart
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-4">
            Add some products to your cart and they will show up here
          </p>
          <Link to="/shop">
            <button className="bg-[#4A1FB8] text-white px-6 py-2 rounded hover:bg-[#3A1798] transition-colors">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
