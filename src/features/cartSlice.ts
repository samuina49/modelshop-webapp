// src/features/cartSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type IModel } from '../types';

interface CartState {
  items: IModel[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IModel>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => { // (ใหม่!) Action สำหรับล้างตะกร้าหลังสั่งซื้อ
      state.items = [];
    }
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;