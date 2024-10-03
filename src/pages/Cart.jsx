import { useSelector } from "react-redux"
import {Link} from "react-router-dom"


function Cart() {
  const cart = useSelector(state => state.cart)

  return (
    <div className=" container mx-auto p-4">
      {/* empty cart */}
      {cart.products.length > 0 ? 
        <div></div>
       : 
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-4">Add some products to your cart and they will show up here</p>
          <Link to="/shop">
          <button className="bg-[#4A1FB8] text-white px-6 py-2 rounded hover:bg-[#3A1798] transition-colors">
            Continue Shopping
          </button></Link>
          
        </div>
       
  
}

export default Cart