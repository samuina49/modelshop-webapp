// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx'; 
import './index.css';

import { Provider } from 'react-redux';
import { store } from './app/store.ts';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import หน้าทั้งหมด
import HomePage from './pages/HomePage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';
import UploadPage from './pages/UploadPage.tsx';
import DetailPage from './pages/DetailPage.tsx'; // (ใหม่)
import CartPage from './pages/CartPage.tsx';
import AdminPage from './pages/AdminPage.tsx';
import AdminProtectedRoute from './components/AdminProtectedRoute.tsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage.tsx'; 
import ProfilePage from './pages/ProfilePage.tsx';      
import ShopPage from './pages/ShopPage.tsx';       

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'shop', element: <ShopPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'upload', element: <UploadPage /> },
      { path: 'model/:id', element: <DetailPage /> },
      { path: 'cart', element: <CartPage /> },
      {
        path: 'admin',
        element: (
          <AdminProtectedRoute>
            <AdminPage /> {/* เอา AdminPage ไปไว้ข้างใน "ยาม" */}
          </AdminProtectedRoute>
        ),
      },
      { path: 'forgot-password', element: <ForgotPasswordPage /> }, // <-- 3. เพิ่ม
      { path: 'profile', element: <ProfilePage /> },             // <-- 4. เพิ่ม
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);