// src/pages/ProfilePage.tsx
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type AppDispatch } from '../app/store';
import { setLogout } from '../features/authSlice'; // Import action ที่เราสร้างไว้

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  
  // (สมมติว่าเราดึงข้อมูล user มาจาก Redux หรือ fetch มา)
  // ตอนนี้เราจะใช้ข้อมูลจำลองไปก่อน
  const user = {
    username: 'DemoUser',
    email: 'demo@models.com',
  };

  // ฟังก์ชันสำหรับ Logout
  const handleLogout = () => {
    dispatch(setLogout()); // สั่ง Redux ให้อัปเดต state เป็น Logout
    navigate('/'); // กลับไปหน้าแรก
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        โปรไฟล์ของฉัน
      </h1>
      
      {/* ส่วนข้อมูลผู้ใช้ */}
      <div className="space-y-4 mb-8">
        <div>
          <label className="text-sm font-bold text-gray-600">ชื่อผู้ใช้</label>
          <p className="text-lg p-3 bg-gray-100 rounded-md">{user.username}</p>
        </div>
        <div>
          <label className="text-sm font-bold text-gray-600">อีเมล</label>
          <p className="text-lg p-3 bg-gray-100 rounded-md">{user.email}</p>
        </div>
      </div>

      {/* ส่วนโมเดลของฉัน */}
      <h2 className="text-2xl font-bold mb-4 text-gray-800">โมเดลของฉัน</h2>
      <div className="p-4 bg-gray-50 rounded-lg text-center text-gray-500">
        <p>(ส่วนนี้จะแสดงรายการโมเดลที่คุณอัปโหลด)</p>
        <p className="text-sm">(จะดึงข้อมูลมาแสดงเมื่อเชื่อมต่อ Backend)</p>
      </div>

      {/* ปุ่ม Logout */}
      <div className="mt-10 text-center">
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full
                     text-lg transition-all duration-300 transform hover:scale-105"
        >
          ออกจากระบบ
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;