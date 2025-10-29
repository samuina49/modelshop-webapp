// src/pages/ForgotPasswordPage.tsx
import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-md w-full bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          ลืมรหัสผ่าน
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
              placeholder="กรอกอีเมลของคุณที่ใช้สมัคร"
            />
            <p className="text-xs text-gray-500 mt-2">
              เราจะส่งลิงก์สำหรับรีเซ็ตรหัสผ่านไปให้คุณทางอีเมล
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full
                         text-lg transition-all duration-300 transform hover:scale-105"
              type="button"
            >
              ส่งลิงก์รีเซ็ตรหัสผ่าน
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <Link
            to="/login"
            className="text-sm text-blue-500 hover:text-blue-700 hover:underline"
          >
            จำรหัสผ่านได้แล้ว? กลับไปเข้าสู่ระบบ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;