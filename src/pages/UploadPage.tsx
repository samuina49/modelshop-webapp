// src/pages/UploadPage.tsx
const UploadPage = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        อัปโหลดโมเดลใหม่
      </h2>
      <form className="space-y-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modelName">
            ชื่อโมเดล
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="modelName" type="text" placeholder="เช่น 'Low Poly Sword'"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            คำอธิบาย
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description" placeholder="รายละเอียดโมเดล..." rows={4}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            ราคา (บาท)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700"
            id="price" type="number" placeholder="150"
          />
        </div>
         <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="imageFile">
            รูปภาพตัวอย่าง (Image)
          </label>
          <input
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            id="imageFile" type="file" accept="image/*"
          />
        </div>
         <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="modelFile">
            ไฟล์โมเดล (.zip, .fbx, .obj)
          </label>
          <input
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
            id="modelFile" type="file"
          />
        </div>
        <div className="flex items-center justify-center pt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full
                       text-lg transition-all duration-300 transform hover:scale-105"
            type="button"
          >
            ยืนยันอัปโหลด
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadPage;