// src/types.ts

// พิมพ์เขียวสำหรับโมเดล
export interface IModel {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // URL ของภาพ Preview
  fileUrl: string; // URL ของไฟล์โมเดล .zip/.obj
  
  // (เผื่อไว้สำหรับข้อมูลจริงจาก Backend)
  _id?: string; 
  uploader?: { 
    _id: string;
    username: string;
  }
}

// พิมพ์เขียวสำหรับการสั่งซื้อ
export interface IOrder {
  id: string;
  date: string;
  items: IModel[];
  total: number;
}