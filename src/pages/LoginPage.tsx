// src/pages/LoginPage.tsx
import { Link } from 'react-router-dom'; // 1. Import Link

const LoginPage = () => {
  return (
    // 2. ปรับ layout ให้กว้างขึ้นเล็กน้อย และจัดให้อยู่กลางจอ
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          เข้าสู่ระบบ
        </h2>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              อีเมล
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              รหัสผ่าน
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full
                         text-lg transition-all duration-300 transform hover:scale-105"
              type="button"
            >
              เข้าสู่ระบบ
            </button>
          </div>
        </form>

        {/* 3. เพิ่มส่วนลิงก์ใหม่ตรงนี้ */}
        <div className="text-center mt-6">
          <Link
            to="/forgot-password" // (เรายังไม่ได้สร้างหน้านี้ แต่ใส่ลิงก์ไว้ก่อน)
            className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
          >
            ลืมรหัสผ่าน?
          </Link>
          <p className="text-sm text-gray-600 mt-4">
            ยังไม่มีบัญชี?{' '}
            <Link
              to="/register"
              className="font-bold text-blue-500 hover:text-blue-700 hover:underline"
            >
              สมัครสมาชิกที่นี่
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;