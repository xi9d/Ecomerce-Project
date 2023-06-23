import React, { useState } from 'react'
import image from "./templatepic1.png"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import ProductsService from '../Services/ProductsService';
function Products() {
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      const fetchData = async () =>{
        setLoading(true);
        try{
          const response = await ProductsService.getAllProducts();
          setProduct(response.data);
        }catch (e){
          console.log(e)
        }
        setLoading(false)
      };
      fetchData();
    },[]);

    return (
      <>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {product &&
            product.map((item) => (
              <div key={item.id} className="px-2 py-2 grid grid-cols-1 w-auto h-auto lg:mx-5 mx-auto shadow-sm">
                
                <div className="">
                  <h1 className="capitalize font-semibold text-slate-700">{item.title}</h1>
                  <p className="font-bold">Ksh {item.discountPrice}</p>
                  <p className="text-decoration-line: line-through italic text-slate-400 text-sm">
                    Ksh {item.originalPrice}
                  </p>
                  <button
                    className="bg-orange-700 px-2 py-2 w-full border mx-auto text-white font-semibold rounded-md my-2"
                    onClick={() => navigate("/view")}
                  >
                    View Product
                  </button>
                </div>
              </div>
            ))}
        </div>
      </>
    );
    
    
}

export default Products