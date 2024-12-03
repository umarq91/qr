import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { QRCodeGenerator } from '../components/QRCodeGenerator';
import { products } from '../data/products';
import { ArrowLeft } from 'lucide-react';

export const ProductPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <button
          onClick={() => navigate('/')}
          className="text-blue-500 hover:text-blue-600"
        >
          Return to Home
        </button>
      </div>
    );
  }

  const productUrl = window.location.href;

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-blue-500 hover:text-blue-600 mb-6"
      >
        <ArrowLeft size={20} />
        Back to Products
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div>
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-3">Scan & Share</h2>
            <QRCodeGenerator url={productUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};