// src/pages/ProfilePage.tsx
import { useState } from 'react'; // 1. Import useState
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { type RootState, type AppDispatch } from '../app/store';
import { setLogout } from '../features/authSlice';
// 2. Import Mock Data (สำหรับจำลอง API)
import { mockModels } from '../mockData'; 
import { mockOrders } from '../mockData';

const ProfilePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  
  // 3. สร้าง State สำหรับควบคุมแท็บ
  const [activeTab, setActiveTab] = useState('details'); // 'details', 'uploads', 'orders'

  const { user } = useSelector((state: RootState) => state.auth);
  
  // 4. (จำลอง) ดึงข้อมูลประวัติ
  // (ในอนาคต: เราจะใช้ useEffect + apiService.get('/users/me/models') แทน)
  const uploadHistory = mockModels; // (สมมติว่า user นี้อัปโหลดทุกชิ้น)
  const orderHistory = mockOrders; // (สมมติว่า user นี้สั่งทุกออเดอร์)

  const handleLogout = () => {
    dispatch(setLogout());
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  if (!user) {
    return <p>กำลังโหลดข้อมูลผู้ใช้...</p>;
  }

  // 5. ส่วน UI สำหรับแท็บ (แยกเป็น Component ย่อยๆ เพื่อความสะอาดตา)
  const renderTabContent = () => {
    switch (activeTab) {
      case 'details':
        return (
          <div className="space-y-4">
            <div>
              <label className="text-sm font-bold text-gray-600">ชื่อผู้ใช้</label>
              <p className="text-lg p-3 bg-gray-100 rounded-md">{user.username}</p>
            </div>
            <div>
              <label className="text-sm font-bold text-gray-600">อีเมล</label>
              <p className="text-lg p-3 bg-gray-100 rounded-md">{user.email}</p>
            </div>
            <div className="mt-10 text-center">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full"
              >
                ออกจากระบบ
              </button>
            </div>
          </div>
        );
      case 'uploads':
        return (
          <div className="space-y-4">
            {uploadHistory.length === 0 ? <p>คุณยังไม่เคยอัปโหลดโมเดล</p> : (
              uploadHistory.map(model => (
                <div key={model.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <img src={model.imageUrl} alt={model.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                    <div>
                      <h3 className="font-bold">{model.name}</h3>
                      <span className="text-sm text-gray-500">{model.price} บาท</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-green-600">เผยแพร่แล้ว</span>
                </div>
              ))
            )}
          </div>
        );
      case 'orders':
        return (
          <div className="space-y-6">
            {orderHistory.length === 0 ? <p>คุณยังไม่เคยสั่งซื้อ</p> : (
              orderHistory.map(order => (
                <div key={order.id} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-4 border-b pb-2">
                    <div>
                      <h3 className="font-bold text-lg">รหัสสั่งซื้อ: {order.id}</h3>
                      <p className="text-sm text-gray-500">วันที่: {order.date}</p>
                    </div>
                    <span className="font-bold text-xl text-blue-600">{order.total} บาท</span>
                  </div>
                  <p className="font-semibold mb-2">รายการสินค้าในออเดอร์:</p>
                  <ul className="list-disc list-inside space-y-1">
                    {order.items.map(item => (
                      <li key={item.id} className="text-sm">{item.name}</li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    // 6. ขยายความกว้างหน้าเว็บ
    <div className="max-w-5xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        โปรไฟล์ของ {user.username}
      </h1>
      
      {/* 7. ส่วนปุ่มแท็บ */}
      <div className="flex border-b border-gray-300 mb-8">
        <button
          className={`py-3 px-6 font-medium transition-colors ${
            activeTab === 'details'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('details')}
        >
          ข้อมูลส่วนตัว
        </button>
        <button
          className={`py-3 px-6 font-medium transition-colors ${
            activeTab === 'uploads'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('uploads')}
        >
          ประวัติการอัปโหลด
        </button>
        <button
          className={`py-3 px-6 font-medium transition-colors ${
            activeTab === 'orders'
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('orders')}
        >
          ประวัติการสั่งซื้อ
        </button>
      </div>

      {/* 8. ส่วนแสดงเนื้อหาแท็บ */}
      <div className="bg-white shadow-xl rounded-lg p-8">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ProfilePage;