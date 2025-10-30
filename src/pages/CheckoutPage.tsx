// src/pages/CheckoutPage.tsx
import { useSelector } from 'react-redux';
import { type RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';
import { useState, type FormEvent } from 'react';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // 1. ดึงข้อมูลตะกร้าจาก Redux
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  // 2. (จำลอง) ฟังก์ชันยืนยันการสั่งซื้อ
  const handleConfirmOrder = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // (ในอนาคต: เราจะส่งข้อมูลตะกร้า + ที่อยู่ ไปให้ API ของเพื่อน)
    // await apiService.post('/orders', { ... });
    
    // (ปัจจุบัน: จำลองการทำงาน)
    setTimeout(() => {
      setIsLoading(false);
      alert('สั่งซื้อสำเร็จ! (จำลอง)\nขอบคุณที่ใช้บริการครับ');
      
      // (ขั้นสูง: เราควรจะ dispatch action เพื่อล้างตะกร้า)
      // dispatch(clearCart()); 
      
      navigate('/'); // กลับไปหน้าแรก
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center p-8 bg-white shadow rounded-lg">
        <p className="text-xl text-gray-500">คุณไม่มีสินค้าในตะกร้าสำหรับชำระเงิน</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-4xl mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">ยืนยันการสั่งซื้อ</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* 3. คอลัมน์ซ้าย: ฟอร์มที่อยู่ */}
        <div className="bg-white p-8 shadow-xl rounded-lg">
          <h2 className="text-2xl font-bold mb-6">ที่อยู่สำหรับจัดส่ง</h2>
          <form className="space-y-4" onSubmit={handleConfirmOrder}>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                ชื่อ-นามสกุล
              </label>
              <input className="shadow appearance-none border rounded w-full py-3 px-4" id="name" type="text" required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                ที่อยู่
              </label>
              <textarea className="shadow appearance-none border rounded w-full py-3 px-4" id="address" rows={3} required />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                เบอร์โทรศัพท์
              </label>
              <input className="shadow appearance-none border rounded w-full py-3 px-4" id="phone" type="tel" required />
            </div>
            
            {/* 4. ส่วนชำระเงิน (จำลอง) */}
            <h3 className="text-xl font-bold pt-4 mb-2">การชำระเงิน</h3>
            <div className="p-4 bg-gray-100 rounded-lg">
              <label className="flex items-center">
                <input type="radio" name="payment" className="mr-2" defaultChecked />
                เก็บเงินปลายทาง (Cash on Delivery)
              </label>
              <p className="text-xs text-gray-500 mt-2">
                (สำหรับโปรเจกต์นี้ เรารองรับเฉพาะการเก็บเงินปลายทางก่อน)
              </p>
            </div>
            
            {/* 5. ปุ่มยืนยัน */}
            <div className="pt-6">
              <button
                type="submit"
                className={`w-full bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full
                           text-lg transition-all duration-300 transform hover:scale-105
                           ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? 'กำลังดำเนินการ...' : 'ยืนยันการสั่งซื้อ'}
              </button>
            </div>
          </form>
        </div>

        {/* 6. คอลัมน์ขวา: สรุปรายการ */}
        <div className="bg-white p-8 shadow-xl rounded-lg h-fit">
          <h2 className="text-2xl font-bold mb-6">สรุปรายการ ({cartItems.length} ชิ้น)</h2>
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg mr-4" />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <span className="text-sm text-gray-500">1 ชิ้น</span>
                  </div>
                </div>
                <span className="font-medium">{item.price} บาท</span>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-dashed border-gray-200 mt-6 pt-6">
            <div className="flex justify-between items-center text-2xl font-bold">
              <span>ยอดรวม:</span>
              <span className="text-blue-600">{totalPrice} บาท</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;