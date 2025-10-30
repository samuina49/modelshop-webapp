// src/mockData.ts
import { type IModel, type IOrder } from './types';

export const mockModels: IModel[] = [
  {
    id: 'm1',
    name: 'Low Poly Sword',
    description: 'ดาบสไตล์ Low Poly พร้อมสำหรับเกมแนวแฟนตาซี',
    price: 150,
    imageUrl: 'https://img.cgtrader.com/items/2569022/b7c4c1a833/large/low-poly-sword-3d-model-low-poly-obj-fbx-blend.jpg',
    fileUrl: '#',
  },
  {
    id: 'm2',
    name: 'Sci-Fi Crate',
    description: 'กล่องสมบัติสไตล์ Sci-Fi สำหรับตกแต่งฉาก',
    price: 300,
    imageUrl: 'https://img.cgtrader.com/items/2432867/57a70c3558/large/sci-fi-crate-pbr-3d-model-low-poly-obj-fbx-ma-m.jpg',
    fileUrl: '#',
  },
  {
    id: 'm3',
    name: 'Cyberpunk Character',
    description: 'ตัวละครไซเบอร์พังค์ พร้อม Rigging (ไม่รวมในราคานี้)',
    price: 950,
    imageUrl: 'https://img.cgtrader.com/items/4089069/9638b971a1/large/cyberpunk-girl-full-character-low-poly-3d-model-low-poly-obj-fbx-stl-blend.jpg',
    fileUrl: '#',
  },
];

export const mockOrders: IOrder[] = [
  {
    id: 'ORDER-001',
    date: '2025-10-30',
    // (จำลองว่า Order นี้ซื้อ 2 ชิ้น)
    items: [mockModels[0], mockModels[1]], 
    total: mockModels[0].price + mockModels[1].price,
  },
  {
    id: 'ORDER-002',
    date: '2025-10-25',
    // (จำลองว่า Order นี้ซื้อ 1 ชิ้น)
    items: [mockModels[2]],
    total: mockModels[2].price,
  },
];