// src/api/apiService.ts
import axios from 'axios';

// URL หลักของ Backend ของเรา
const API_URL = 'http://localhost:3000';

// สร้าง instance ของ axios ที่ตั้งค่าไว้แล้ว
const apiService = axios.create({
  baseURL: API_URL,
});

export default apiService;