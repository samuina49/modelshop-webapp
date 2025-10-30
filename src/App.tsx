// src/App.tsx
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from './app/store';
import { setLogin } from './features/authSlice';

function App() {
  const dispatch = useDispatch<AppDispatch>();

  // (แก้ไข) ตรวจสอบ localStorage เพื่อคงสถานะ Login
  useEffect(() => {
    // 1. (ใหม่) ใช้ try...catch ดัก Error
    try {
      const token = localStorage.getItem('token');
      const userString = localStorage.getItem('user'); // (เปลี่ยนชื่อเป็น userString)

      // 2. (ใหม่) เช็กให้ชัวร์ว่าไม่ใช่ null หรือ "undefined"
      if (token && userString && userString !== 'undefined') {
        
        const user = JSON.parse(userString); // 3. Parse ใน try
        
        // 4. ถ้า Parse สำเร็จ, ค่อย dispatch
        dispatch(setLogin({
          user: user,
          token: token,
        }));
      }
    } catch (error) {
      // 5. (ใหม่) ถ้า JSON.parse พัง (เช่นเจอ "undefined" หรือ JSON มั่ว)
      console.error('Failed to parse user from localStorage, logging out:', error);
      // (เคลียร์ localStorage ที่พังทิ้งไปเลย)
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }, [dispatch]); // (dependency [dispatch] ยังเหมือนเดิม)

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main className="container mx-auto p-6 md:p-8 flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;