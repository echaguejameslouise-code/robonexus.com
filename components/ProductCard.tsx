
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-900 border border-white/20">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-2 flex justify-between items-start">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
          <span className="text-lg font-display font-bold text-slate-900">
            ${product.price.toLocaleString()}
          </span>
        </div>
        
        <p className="text-slate-600 text-sm mb-6 line-clamp-2">
          {product.description}
        </p>
        
        <div className="space-y-2 mb-6 flex-grow">
          {Object.entries(product.specs).slice(0, 2).map(([key, val]) => (
            <div key={key} className="flex justify-between text-xs border-b border-slate-50 pb-1">
              <span className="text-slate-400 uppercase tracking-tighter">{key}</span>
              <span className="text-slate-700 font-medium">{val}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => onAddToCart(product)}
          className="w-full py-3 bg-blue-50 text-blue-700 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
