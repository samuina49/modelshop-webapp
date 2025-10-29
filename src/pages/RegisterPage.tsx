// src/pages/RegisterPage.tsx
import { Link } from 'react-router-dom'; // 1. Import Link

const RegisterPage = () => {
  return (
    // 2. ปรับ layout ให้จัดกลางจอเหมือนหน้า Login
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          สมัครสมาชิก
        </h2>
        <form className="space-y-6">
          {/* ... (ส่วนฟอร์ม username, email, password เหมือนเดิม) ... */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              ชื่อผู้ใช้
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username" type="text" placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              อีเมล
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              รหัสผ่าน
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" type="password" placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full
                         text-lg transition-all duration-300 transform hover:scale-105"
              type="button"
            >
              สมัครสมาชิก
            </button>
          </div>
        </form>

        {/* 3. เพิ่มส่วนลิงก์ใหม่ตรงนี้ */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            มีบัญชีผู้ใช้อยู่แล้ว?{' '}
            <Link
              to="/login"
              className="font-bold text-blue-500 hover:text-blue-700 hover:underline"
            >
              เข้าสู่ระบบที่นี่
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;