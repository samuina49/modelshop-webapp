// src/pages/AdminPage.tsx
import { mockModels } from '../mockData';
import { type IModel } from '../types';

const AdminPage = () => {
  // ในอนาคต เราจะ fetch ข้อมูล และเก็บใน React State (useState)
  const models = mockModels; 

  const handleEdit = (id: string) => {
    alert(`(Admin) แก้ไขโมเดล ID: ${id}`);
    // (ในอนาคต: navigate to /admin/edit/id)
  };

  const handleDelete = (id: string) => {
    if (window.confirm(`(Admin) ยืนยันลบโมเดล ID: ${id} หรือไม่?`)) {
      alert('ลบสำเร็จ (จำลอง)');
      // (ในอนาคต: ยิง API DELETE /models/id แล้ว fetch ข้อมูลใหม่)
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">จัดการโมเดล (Admin)</h1>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">โมเดล</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ราคา</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">จัดการ</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {models.map((model: IModel) => (
              <tr key={model.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img className="w-12 h-12 object-cover rounded-md mr-4" src={model.imageUrl} alt={model.name} />
                    <span className="font-medium text-gray-900">{model.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">{model.price} บาท</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                  <button
                    onClick={() => handleEdit(model.id)}
                    className="text-yellow-600 hover:text-yellow-900"
                  >
                    แก้ไข
                  </button>
                  <button
                    onClick={() => handleDelete(model.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    ลบ
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;