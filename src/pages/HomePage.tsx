// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';
import { mockModels } from '../mockData';
import ModelCard from '../components/ModelCard'; // Import ModelCard

const HomePage = () => {
  // ดึงมาแค่ 3 ชิ้นสำหรับหน้าแรก
  const featuredModels = mockModels.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* 1. Hero Section (ส่วนต้อนรับ) */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-12 md:p-20 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          ยินดีต้อนรับสู่ ModelShop
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          แหล่งรวมโมเดล 3D คุณภาพสูงสำหรับโปรเจกต์ของคุณ
        </p>
        <Link
          to="/shop" // ลิงก์ไปหน้า ShopPage ใหม่
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full
                     text-lg transition-all duration-300 transform hover:scale-105"
        >
          เลือกซื้อโมเดลทั้งหมด
        </Link>
      </div>

      {/* 2. Featured Models (ส่วนโมเดลแนะนำ) */}
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center">โมเดลแนะนำ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredModels.map(model => (
            <ModelCard key={model.id} model={model} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;