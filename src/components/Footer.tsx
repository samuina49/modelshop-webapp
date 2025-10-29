// src/components/Footer.tsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-10">
        
        {/* 1. ส่วนลิงก์หลัก (แบ่งเป็น 3 คอลัมน์บนจอใหญ่) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* คอลัมน์ 1: Brand และ Social */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-4 inline-block">
              Model<span className="text-blue-500">Shop</span>
            </Link>
            <p className="text-gray-400 mb-4">
              แพลตฟอร์มสำหรับซื้อขายโมเดล 3D คุณภาพสูง
            </p>
            {/* Social Icons (จำลอง) */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* (ในอนาคตสามารถใส่ SVG ไอคอน Facebook) */}
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* (ไอคอน Twitter/X) */}
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* (ไอคอน Instagram) */}
                Instagram
              </a>
            </div>
          </div>

          {/* คอลัมน์ 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white hover:underline">หน้าแรก</Link></li>
              <li><Link to="/shop" className="text-gray-400 hover:text-white hover:underline">โมเดลทั้งหมด</Link></li>
              <li><Link to="/upload" className="text-gray-400 hover:text-white hover:underline">อัปโหลด</Link></li>
              <li><Link to="/cart" className="text-gray-400 hover:text-white hover:underline">ตะกร้าสินค้า</Link></li>
            </ul>
          </div>

          {/* คอลัมน์ 3: Legal & Account */}
          <div>
            <h3 className="text-lg font-bold mb-4">บัญชีและนโยบาย</h3>
            <ul className="space-y-2">
              <li><Link to="/profile" className="text-gray-400 hover:text-white hover:underline">โปรไฟล์ของฉัน</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-white hover:underline">เข้าสู่ระบบ</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-400 hover:text-white hover:underline">ข้อตกลงในการใช้งาน</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white hover:underline">นโยบายความเป็นส่วนตัว</Link></li>
            </ul>
          </div>
        </div>

        {/* 2. ส่วน Copyright (เส้นคั่นและข้อความ) */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 ModelShop. Final Project by [ชื่อของคุณ].
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;