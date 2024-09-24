import { useSelector } from "react-redux"

function Cart() {
  const cart = useSelector(state => state.cart)
  return (
    <div className=" container mx-auto p-4">
      {/* empty cart */}
      {cart.products.length === 0 ? (
        <div className="text-center py-8">
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-4">Add some products to your cart and they will show up here</p>
          <button className="bg-[#4A1FB8] text-white px-6 py-2 rounded hover:bg-[#3A1798] transition-colors">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex items-center border-b pb-4">
                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover mr-4" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">Price: ${product.price ? parseFloat(product.Price).toFixed(2) : 'N/A'}</p>
                  <p className="text-gray-600">Quantity: {product.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">Total: ${product.Price && product.quantity
          ? (parseFloat(product.price) * product.quantity).toFixed(2)
          : 'N/A'}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <p className="text-xl font-bold">Total Quantity: {cart.totalQuantity}</p>
            <p className="text-2xl font-bold mt-2">Total Price: ${cart.totalPrice ? parseFloat(cart.totalPrice).toFixed(2) : '0.00'}</p>
            <button className="bg-[#4A1FB8] text-white px-6 py-2 rounded mt-4 hover:bg-[#3A1798] transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      
    </div>
  )
}

export default Cart