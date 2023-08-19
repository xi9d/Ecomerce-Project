import React from 'react'
import CartService from '../Services/CartService';
import { useNavigate } from 'react-router-dom';

function Cart({product, deleteProduct}) {
    const navigate = useNavigate();
    const handleViewProduct = (productId) => {
        const selectedProduct = product.find((item) => item.id === productId);
        navigate(`/viewproduct/${productId}`, { state: { product: selectedProduct } });
      };
      console.log("Data ",product.title);
      
  return (  
    <> 
        <tr key={product.id} className='my-4 p-2'>
         <td className="text-left  ">
        <div className="text-sm text-gray-500">{product.title}</div>
         </td>
    
        <td className="text-left  ">
        <div className="text-sm text-gray-500">{product.discountPrice}</div>
         </td>
    <td className="text-left font-medium text-sm">
        <div>
        <a  className="hover:cursor-pointer border rounded-md mx-1 text-green-500 hover:text-green-300 py-1 px-4">Buy</a>
        <a  
        onClick={(e, id) => deleteProduct(product.id)}
        className="hover:cursor-pointer border rounded-md mx-1 text-red-700 hover:text-red-500 py-1 px-4">Delete</a>
        </div>
  </td>

     </tr>
    </>
  )
}

export default Cart;