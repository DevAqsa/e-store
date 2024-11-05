import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

//     addToCart(state, action) {
//       console.log('Adding product:', action.payload);
//       const newItem = action.payload;
//       const existingProduct = state.products.find((item) => item.id === newItem.id);
      
//       if (existingProduct) {
//         // Update quantity and totalPrice of the existing product
//         existingProduct.quantity++;
//         existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;
//       } else {
//         // Add new product to the cart
//         state.products.push({
//           id: newItem.id,
//           name: newItem.name,
//           price: newItem.price, // Keep price as the unit price
//           quantity: 1,
//           totalPrice: newItem.price, // Initialize totalPrice to the unit price for new product
//           image: newItem.image,
//         });
//       }
//     // In the addToCart action
// console.log('Product added to cart:', newItem);
//       // Update cart's total price and quantity
//       state.totalPrice += newItem.price;
//       state.totalQuantity++;
//     },
    
    addToCart(state, action) {
      console.log('Adding product:', action.payload);
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }

      state.totalPrice  += newItem.price
      state.totalQuantity++;
    },
  },
});


export const {addToCart} = cartSlice.actions
export default cartSlice.reducer;
