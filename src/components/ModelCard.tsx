// src/components/ModelCard.tsx
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from '../app/store';
import { type IModel } from '../types';
import { addToCart } from '../features/cartSlice';

const ModelCard = ({ model }: { model: IModel }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCart(model));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:scale-105
                    flex flex-col">
      
      <Link to={`/model/${model.id}`}>
        <img className="w-full h-56 object-cover" src={model.imageUrl} alt={model.name} />
      </Link>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2 h-14 overflow-hidden">
          <Link to={`/model/${model.id}`} className="hover:text-blue-500 line-clamp-2">
            {model.name}
          </Link>
        </h3>
        <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden line-clamp-4">
          {model.description}
        </p>
        
        <div className="flex justify-between items-center mt-auto"> 
          <span className="text-2xl font-bold text-blue-600">{model.price} บาท</span>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full
                       transition-transform duration-200 hover:scale-110"
          >
            เพิ่มลงตะกร้า
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;