// src/pages/ShopPage.tsx
import { mockModels } from '../mockData';
import ModelCard from '../components/ModelCard'; // 1. Import ModelCard ที่ย้ายมา

const ShopPage = () => {
  // (ในอนาคต: เราจะใช้ useState เก็บค่า search/filter
  // และกรอง mockModels ก่อนส่งไป map)
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">โมเดลทั้งหมด</h1>
      
      {/* 2. ส่วน Filter และ Search */}
      
      <div className="bg-white shadow-md rounded-lg p-4 mb-8 flex flex-col md:flex-row gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="ค้นหาโมเดล..."
          className="shadow appearance-none border rounded w-full md:w-1/2 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        />
        {/* Filter (Sort) */}
        <select
          className="shadow appearance-none border rounded w-full md:w-1/4 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        >
          <option value="">เรียงตาม</option>
          <option value="price-asc">ราคา: น้อยไปมาก</option>
          <option value="price-desc">ราคา: มากไปน้อย</option>
          <option value="name-asc">ชื่อ: A-Z</option>
        </select>
        {/* Filter (Category) */}
        <select
          className="shadow appearance-none border rounded w-full md:w-1/4 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
        >
          <option value="">หมวดหมู่ทั้งหมด</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="fantasy">Fantasy</option>
          <option value="character">Character</option>
        </select>
      </div>

      {/* 3. รายการโมเดลทั้งหมด (เหมือนเดิม) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockModels.map(model => (
          <ModelCard key={model.id} model={model} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;