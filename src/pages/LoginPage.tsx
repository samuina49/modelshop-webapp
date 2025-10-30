// src/pages/LoginPage.tsx
import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// 1. Import useDispatch (สำหรับสั่ง Redux)
import { useDispatch } from 'react-redux';
import { type AppDispatch } from '../app/store'; // (Type ของ Dispatch)
import { setLogin } from '../features/authSlice'; // 2. Import Action 'setLogin'
import apiService from '../api/apiService'; // 3. Import apiService ที่เราสร้าง
import { AxiosError } from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // 4. สร้างตัว dispatch

  // (State สำหรับฟอร์ม เหมือนเดิม)
  const [email, setEmail] = useState(''); // Replace `_setEmail` with `setEmail` to fix the unused variable issue
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // 5. สร้างฟังก์ชัน handleSubmit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // 6. ยิง API (ใช้ apiService)
      const response = await apiService.post('/auth/login', {
        email: email,
        password: password,
      });

      // 7. (สำคัญ!) เมื่อสำเร็จ Backend จะส่งข้อมูลกลับมา
      const { accessToken, user } = response.data;
      
      // 8. (สำคัญ!) สั่งให้ Redux ทำงาน (เก็บข้อมูล user และ token)
      dispatch(setLogin({
        user: user,
        token: accessToken,
      }));

      // 9. (เผื่อไว้) เก็บ Token ลงใน localStorage
      // (เพื่อให้ล็อกอินค้างไว้ได้ แม้จะปิดเบราว์เซอร์แล้วเปิดใหม่)
      localStorage.setItem('token', accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      // 10. ส่งไปหน้าโปรไฟล์ (หรือหน้าแรก)
      navigate('/profile'); 
      } catch (err: unknown) {
      // 11. ถ้า Error (เช่น รหัสผิด)
      console.error(err);
      // พยายามดึงข้อความจาก Axios response ถ้าเป็น AxiosError
      let message = 'เกิดข้อผิดพลาดในการล็อกอิน';
      if (err instanceof Error) {
        message = err.message;
      }
      const axiosErr = err as AxiosError<{ message?: string }>;
      if (axiosErr?.response?.data?.message) {
        message = axiosErr.response.data.message;
      }
      setError(message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          เข้าสู่ระบบ
        </h2>
        
        {/* 12. เปลี่ยน <form> ให้เรียก handleSubmit */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* (แสดง Error ถ้ามี) */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              อีเมล
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700"
              id="email" type="email" placeholder="Email"
              value={email} // (bind state)
              onChange={(e) => setEmail(e.target.value)} // (update state)
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              รหัสผ่าน
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700"
              id="password" type="password" placeholder="******************"
              value={password} // (เชื่อม State)
              onChange={(e) => setPassword(e.target.value)} // (อัปเดต State)
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full"
              type="submit" // (เปลี่ยนเป็น submit)
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>

        {/* (ส่วนลิงก์ ลืมรหัส/สมัครสมาชิก เหมือนเดิม) */}
        <div className="text-center mt-6">
          <Link to="/forgot-password" /* ... */>
            ลืมรหัสผ่าน?
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            ยังไม่มีบัญชี?{' '}
            <Link to="/register" /* ... */>
              สมัครสมาชิกที่นี่
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;