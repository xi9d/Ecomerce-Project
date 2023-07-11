import React, { useEffect, useState } from 'react'
import CartService from '../Services/CartService';
import Cart from '../Components/Cart';

function ShoppingCart() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
      const fetchData = async () =>{
          setLoading(true);
          try {
              const response = await CartService.getAllProductsInCart();
              setProducts(response.data);
              console.log(response.data)
          }catch (e){
              console.log(e);
          }
          setLoading(false)
      };
      fetchData();
  }, []);

  const deleteProduct = async (id) =>{
    try {
        await CartService.deleteProductFromCart(id);
        setProducts(prevProducts => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
        console.log(error);
    }
  };
  if (products.length > 0) {
    console.log(products[0].title); 
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="container mx-auto my-8">
        
        <div className=" shadow border-b">
          <table className="min-w-full">
            <thead className="bg-gray-50 px-2 py-5">
              <tr>
                <th className="p-4 ">Name Of Product</th>
                <th className="p-4">Price</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products.map((product) => (
                <tr key={product.id} className="my-4 p-2">
                  <td className="text-left">
                    <div className="text-sm text-gray-500">{product.title}</div>
                  </td>
                  <td className="text-left">
                    <div className="text-sm text-gray-500">{product.discountPrice}</div>
                  </td>
                  <td className="text-left font-medium text-sm">
                    <div>
                      <a className="hover:cursor-pointer border rounded-md mx-1 text-green-500 hover:text-green-300 py-1 px-4">Buy</a>
                      <a
                        onClick={(e) => deleteProduct(product.id)}
                        className="hover:cursor-pointer border rounded-md mx-1 text-red-700 hover:text-red-500 py-1 px-4"
                      >
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart;