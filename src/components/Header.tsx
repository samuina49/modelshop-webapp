// src/components/Header.tsx
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from '../app/store';
import { setLogout } from '../features/authSlice'; // Import action

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // 1. ดึง State จาก Redux
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const cartItemCount = useSelector((state: RootState) => state.cart.items.length);

  // 2. สร้างฟังก์ชัน Logout สำหรับปุ่มใน Header
  const handleLogout = () => {
    dispatch(setLogout());
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* ... (Logo) ... */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Model<span className="text-blue-500">Shop</span>
        </Link>
        
        <div className="flex items-center space-x-6">
          {/* ... (Links: หน้าแรก, อัปโหลด, Admin, ตะกร้า) ... */}
          <Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors">
            หน้าแรก
          </Link>
          <Link to="/shop" className="text-gray-600 hover:text-blue-500 transition-colors">
            โมเดลทั้งหมด
          </Link>
          <Link to="/upload" className="text-gray-600 hover:text-blue-500 transition-colors">
            อัปโหลด
          </Link>
          <Link to="/admin" className="text-gray-600 hover:text-blue-500 transition-colors">
            จัดการ (Admin)
          </Link>

          {/* 3. ส่วน Dynamic ที่เปลี่ยนตาม isLoggedIn */}
          {isLoggedIn ? (
            <>
              {/* ถ้าล็อกอินแล้ว */}
              <Link to="/profile" className="text-gray-600 hover:text-blue-500 font-medium">
                โปรไฟล์
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300"
              >
                ออกจากระบบ
              </button>
            </>
          ) : (
            <>
              {/* ถ้ายังไม่ล็อกอิน */}
              <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300">
                เข้าสู่ระบบ
              </Link>
            </>
          )}
          <Link to="/cart" className="relative text-gray-600 hover:text-blue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;