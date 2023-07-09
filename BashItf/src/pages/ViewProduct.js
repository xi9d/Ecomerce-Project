import React from 'react';
import { useLocation } from 'react-router-dom';

function ViewProduct() {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div>
      <div className='grid grid-rows-1 '>
        <div className='grid grid-cols-2 mx-10 my-5'>
          <div>
          {product.image && (
              <img
                src={`data:image/png;base64,${product.image}`}
                alt="Product"
                className="w-full h-fit object-fill rounded-md"
              />
            )}
          </div>
          <div className='ml-16'>
            <h1 className='font-bold text-4xl text-orange-600'>{product.title}</h1>
            <h2 className='text-slate-600'>Description</h2>
            <p className='text-slate-900'>{product.description}</p>
            
            <h2 className='text-slate-600'>Pricing</h2>
            <p className='text-2xl text-green-600 font-bold'>Now: Ksh {product.discountPrice}</p>
            <p className='text-decoration-line: line-through italic text-slate-400 text-sm'>
              Was: Ksh {product.originalPrice}
            </p>
            <div className='max-w-2xl mx-auto '>
          <button className='text-white rounded-lg font-bold px-2 py-3 bg-orange-700'>Add to cart</button>
        </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default ViewProduct;
