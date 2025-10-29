import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // ใช้คลาส Tailwind ที่เราติดตั้ง (ผ่าน CDN)
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          ModelShop
        </Link>
        <div className="flex gap-4">
          <Link to="/" className="text-white hover:text-gray-300">หน้าแรก</Link>
          <Link to="/upload" className="text-white hover:text-gray-300">อัปโหลด</Link>
          <Link to="/login" className="text-white hover:text-gray-300">ล็อกอิน</Link>
          <Link to="/register" className="text-white hover:text-gray-300">สมัครสมาชิก</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;