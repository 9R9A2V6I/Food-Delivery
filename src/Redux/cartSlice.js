import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      // Check if the item with the same identifier (e.g., Text) is already in the cart
      const existingItem = state.items.find(item => item.Text === newItem.Text);
      
      if (existingItem) {
        // Item found in the cart, update the quantity
        existingItem.quantity += 1;
      } else {
        // Item not found in the cart, add it with quantity 1
        state.items.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // Remove the item from the cart based on a unique identifier (e.g., Text)
      state.items = state.items.filter(
        (item) => item.Text !== action.payload.Text
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
