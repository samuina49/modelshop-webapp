// src/pages/CartPage.tsx
import { useSelector, useDispatch } from 'react-redux';
import { type RootState, type AppDispatch } from '../app/store';
import { removeFromCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  // คำนวณราคารวม
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">ตะกร้าสินค้าของคุณ</h1>
      {cartItems.length === 0 ? (
        <div className="text-center p-8 bg-white shadow rounded-lg">
          <p className="text-xl text-gray-500">ตะกร้าของคุณว่างเปล่า</p>
          <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
            กลับไปเลือกซื้อสินค้า
          </Link>
        </div>
      ) : (
        <div className="bg-white shadow-xl rounded-lg">
          <div className="divide-y divide-gray-200">
            {/* รายการสินค้า */}
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="flex items-center p-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
                <div className="flex-grow">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-600">{item.price} บาท</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  ลบ
                </button>
              </div>
            ))}
          </div>
          
          {/* สรุปยอด */}
          <div className="p-6 border-t-2 border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-gray-800">ราคารวม:</span>
              <span className="text-3xl font-extrabold text-blue-600">{totalPrice} บาท</span>
            </div>
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg
                         transition-all duration-300 transform hover:scale-105"
            >
              ดำเนินการสั่งซื้อ (จำลอง)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;