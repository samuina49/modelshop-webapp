// src/pages/DetailPage.tsx
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { mockModels } from '../mockData';
import { addToCart } from '../features/cartSlice';
import { type AppDispatch } from '../app/store';

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  
  // ค้นหาโมเดลจาก mockData (เมื่อมี API ค่อยเปลี่ยนเป็น fetch)
  const model = mockModels.find(m => m.id === id);

  if (!model) {
    return <h2 className="text-2xl text-center text-red-500">ไม่พบโมเดล (ID: {id})</h2>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(model));
  };

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto">
      <div className="md:flex">
        <div className="md:w-1/2">
          <img className="w-full h-full object-cover" src={model.imageUrl} alt={model.name} />
        </div>
        <div className="md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{model.name}</h1>
          <p className="text-gray-600 text-lg mb-6">{model.description}</p>
          <div className="mb-6">
            <span className="text-4xl font-extrabold text-blue-600">{model.price} บาท</span>
          </div>
          <div className="flex flex-col space-y-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg
                         transition-transform duration-200 transform hover:scale-105"
            >
              เพิ่มลงตะกร้า
            </button>
            <a
              href={model.fileUrl} // (ตอนนี้เป็น # อยู่)
              download
              className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg text-lg text-center
                         transition-transform duration-200 transform hover:scale-105"
            >
              ดาวน์โหลด (จำลอง)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;