// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import cartReducer from '../features/cartSlice'; // 1. Import

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer, // 2. ลงทะเบียน
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;