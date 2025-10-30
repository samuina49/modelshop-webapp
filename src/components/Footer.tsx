// src/components/Footer.tsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-12">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="text-3xl font-extrabold text-white mb-4 inline-block">
              Model<span className="text-blue-500">Shop</span>
            </Link>
            <p className="text-slate-400 mb-4">
              แพลตฟอร์มสำหรับซื้อขายโมเดล 3D คุณภาพสูง
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">ลิงก์ด่วน</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-white hover:underline">หน้าแรก</Link></li>
              <li><Link to="/shop" className="text-slate-400 hover:text-white hover:underline">โมเดลทั้งหมด</Link></li>
              <li><Link to="/upload" className="text-slate-400 hover:text-white hover:underline">อัปโหลด</Link></li>
              <li><Link to="/cart" className="text-slate-400 hover:text-white hover:underline">ตะกร้าสินค้า</Link></li>
            </ul>
          </div>

          {/* Column 3: Account */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">บัญชีและนโยบาย</h3>
            <ul className="space-y-2">
              <li><Link to="/profile" className="text-slate-400 hover:text-white hover:underline">โปรไฟล์ของฉัน</Link></li>
              <li><Link to="/login" className="text-slate-400 hover:text-white hover:underline">เข้าสู่ระบบ</Link></li>
              <li><Link to="/register" className="text-slate-400 hover:text-white hover:underline">สมัครสมาชิก</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-700 pt-6 text-center">
          <p className="text-sm text-slate-500">
            &copy; 2025 ModelShop. Final Project by [ชื่อของคุณ].
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;