import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  totalAmount: 0,
  cartCount: 0,
  isCartOpen: false,
  orders: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

      if (itemIndex === -1) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.cartCount += 1;
      } else {
        state.cartItems[itemIndex].quantity += 1;
      }

      state.totalAmount += action.payload.price;
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      state.cartCount = state.cartItems.length;
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        if (type === 'increase') {
          state.cartItems[itemIndex].quantity += 1;
          state.totalAmount += state.cartItems[itemIndex].price;
        } else if (type === 'decrease' && state.cartItems[itemIndex].quantity > 1) {
          state.cartItems[itemIndex].quantity -= 1;
          state.totalAmount -= state.cartItems[itemIndex].price;
        }
      }
    },

    checkout: (state) => {
      if (state.cartItems.length > 0) {
        const now = new Date();
        const formattedDate = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1)
          .toString()
          .padStart(2, '0')}.${now.getFullYear().toString().slice(-2)}`;
        state.orders.push({
          id: Date.now(),
          date: formattedDate,
          items: state.cartItems,
          totalAmount: state.totalAmount,
        });
        state.cartItems = [];
        state.totalAmount = 0;
        state.cartCount = 0;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, toggleCart, checkout } =
  cartSlice.actions;

export default cartSlice.reducer;
