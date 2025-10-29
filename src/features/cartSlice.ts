// src/features/cartSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { IModel } from '../types';

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
      // (เพื่อความง่าย เราอนุญาตให้เพิ่มซ้ำได้ก่อน)
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      // กรองเอา item ที่ id ไม่ตรงกับที่ส่งมาออก
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;