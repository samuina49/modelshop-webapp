// src/components/AdminProtectedRoute.tsx
import { useSelector } from 'react-redux';
import { type RootState } from '../app/store';
import { Navigate } from 'react-router-dom';

// Component นี้จะรับ "children" (คือหน้าที่เราจะป้องกัน) เข้ามา
const AdminProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  // ดึงสถานะปัจจุบันจาก Redux
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  // 1. ถ้ายังไม่ล็อกอิน, ส่งไปหน้า Login
  if (!isLoggedIn) {
    // `replace` คือการบอกว่าไม่ต้องจำหน้านี้ไว้ใน history
    return <Navigate to="/login" replace />;
  }

  // 2. ถ้าล็อกอินแล้ว แต่ *ไม่ใช่* Admin, ส่งกลับหน้าแรก
  if (!user?.isAdmin) {
    return <Navigate to="/" replace />;
  }

  // 3. ถ้าผ่านหมด (ล็อกอินแล้ว และเป็น Admin), แสดงหน้าที่ต้องการ
  return <>{children}</>;
};

export default AdminProtectedRoute;