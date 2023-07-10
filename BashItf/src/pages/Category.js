import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProductsService from '../Services/ProductsService';

function Category({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
      try {
        const response = await  ProductsService.getAllProductsByCategory(category);
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleViewProduct = (productId) => {
    const selectedProduct = products.find((item) => item.id === productId);
    navigate(`/viewproduct/${productId}`, { state: { product: selectedProduct } });
  };

  return (
    <div>
      <h1>Category Page</h1>
      {products.map((item) => (
        <div key={item.id} className="px-2 py-2 grid grid-cols-1 w-auto h-auto lg:mx-5 mx-auto my-5 shadow-md">
          <div className="">
            {item.image && (
              <img
                src={`data:image/png;base64,${item.image}`}
                alt="Product"
                className="w-full h-48 object-cover rounded-md hover:scale-125 hover:transition duration-500 ease-in-out cursor-pointer"
                onClick={() => handleViewProduct(item.id)}
              />
            )}
            <h1 className="capitalize font-semibold text-slate-700 cursor-pointer" onClick={() => handleViewProduct(item.id)}>{item.title}</h1>
            <p className="font-bold">Ksh {item.discountPrice}</p>
            <p className="text-decoration-line: line-through italic text-slate-400 text-sm">
              Ksh {item.originalPrice}
            </p>

            <button
              className="bg-orange-700 px-2 py-2 w-full border mx-auto text-white font-semibold rounded-md my-2"
              onClick={() => handleViewProduct(item.id)}
            >
              View Product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
