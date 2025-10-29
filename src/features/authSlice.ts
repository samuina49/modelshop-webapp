// src/features/authSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// 1. (ใหม่) สร้าง Type สำหรับข้อมูล User
interface User {
  id: string;
  username: string;
  email: string;
  isAdmin: boolean; // <-- นี่คือหัวใจสำคัญ
}

// 2. อัปเดต AuthState
interface AuthState {
  isLoggedIn: boolean;
  user: User | null; // เก็บข้อมูล user ทั้งก้อน
  token: string | null;
}

// 3. อัปเดต initialState
const initialState: AuthState = {
  isLoggedIn: true, // 1. ล็อกอิน
  user: {
    id: 'u-admin',
    username: 'AdminSamui',
    email: 'admin@models.com',
    isAdmin: true, // 2. เป็นแอดมิน
  },
  token: 'mock-admin-token-for-testing',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // 4. อัปเดต setLogin ให้รับข้อมูล user และ token
    setLogin: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // 5. อัปเดต setLogout ให้เคลียร์ user ด้วย
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;