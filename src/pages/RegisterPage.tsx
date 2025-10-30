// src/pages/RegisterPage.tsx
import React, { useState, type FormEvent } from 'react'; // 1. Import useState
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // 2. Import axios

const RegisterPage: React.FC = () => {
  const navigate = useNavigate(); // 3. Import useNavigate (สำหรับเปลี่ยนหน้า)

  // 4. สร้าง State เก็บค่าจากฟอร์ม
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null); // State สำหรับเก็บ error

  // 5. สร้างฟังก์ชัน handleSubmit
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // (ป้องกันหน้าเว็บรีโหลด)
    setError(null); // (เคลียร์ error เก่า)

    try {
      // 6. ยิง API ไปที่ Backend!
      await axios.post('http://localhost:3000/auth/register', {
        username: username,
        email: email,
        password: password,
      });

      // 7. ถ้าสำเร็จ
      alert('สมัครสมาชิกสำเร็จ! กรุณาล็อกอิน');
      navigate('/login'); // (ส่งไปหน้าล็อกอิน)

    } catch (err: unknown) {
      // 8. ถ้า Error (เช่น อีเมลซ้ำ)
      console.error(err);
      // Narrow the unknown error: handle Axios errors specially, otherwise fallback to Error message or a generic message.
      if (axios.isAxiosError(err)) {
        // (ดึงข้อความ error จาก Backend ที่เราโยนมา)
        setError(err.response?.data?.message || 'เกิดข้อผิดพลาดในการสมัคร');
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('เกิดข้อผิดพลาดในการสมัคร');
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          สมัครสมาชิก
        </h2>

        {/* 9. เปลี่ยน <form> ให้เรียก handleSubmit */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* 10. แสดง Error (ถ้ามี) */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {error}
            </div>
          )}

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              ชื่อผู้ใช้
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700"
              id="username" type="text" placeholder="Username"
              value={username} // (เชื่อม State)
              onChange={(e) => setUsername(e.target.value)} // (อัปเดต State)
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              อีเมล
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700"
              id="email" type="email" placeholder="Email"
              value={email} // (เชื่อม State)
              onChange={(e) => setEmail(e.target.value)} // (อัปเดต State)
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              รหัสผ่าน (อย่างน้อย 8 ตัวอักษร)
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700"
              id="password" type="password" placeholder="******************"
              value={password} // (เชื่อม State)
              onChange={(e) => setPassword(e.target.value)} // (อัปเดต State)
              required
              minLength={8}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full"
              type="submit" // (เปลี่ยนเป็น submit)
            >
              สมัครสมาชิก
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            มีบัญชีผู้ใช้อยู่แล้ว?{' '}
            <Link to="/login" className="font-bold text-blue-500 hover:underline">
              เข้าสู่ระบบที่นี่
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;