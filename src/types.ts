// src/types.ts
export interface IModel {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string; // URL ของภาพ Preview
  fileUrl: string; // URL ของไฟล์โมเดล .zip/.obj
}