// src/components/UserProtectedRoute.tsx
import { useSelector } from 'react-redux';
import { type RootState } from '../app/store';
import { Navigate, Outlet } from 'react-router-dom';

const UserProtectedRoute = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);

  // ถ้าล็อกอินแล้ว, อนุญาตให้ไปต่อ (แสดง <Outlet />)
  // ถ้ายังไม่ล็อกอิน, "เด้ง" (Navigate) ไปหน้า /login
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default UserProtectedRoute;