import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (data) => data.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (data) => data.id !== action.payload
      );
    },
    IncQty: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (data) => data.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty += 1;
      }
    },
    DecQty: (state, action) => {
      let itemIndex = state.cartItems.findIndex(
        (data) => data.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty -= 1;
      }
    },
  },
});

export const { addItem, clearCart, removeItem, IncQty, DecQty } =
  cartSlice.actions;

export default cartSlice.reducer;
