// src/App.tsx
import { Outlet } from 'react-router-dom';
import Header from './components/Header'; // เปลี่ยนจาก Navbar
import Footer from './components/Footer';

function App() {
  return (
    // min-h-screen เพื่อให้ Footer อยู่ล่างสุดเสมอ
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      {/* flex-grow เพื่อดัน Footer ลงไปข้างล่าง */}
      <main className="container mx-auto p-4 flex-grow">
        <Outlet /> 
      </main>

      <Footer />
    </div>
  );
}

export default App;