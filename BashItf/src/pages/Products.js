import React from 'react';
import { useNavigate } from 'react-router-dom';

function Products({ products, loading, page, totalPages }) {
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleViewProduct = (productId) => {
    const selectedProduct = products.find((item) => item.id === productId);
    navigate(`/viewproduct/${productId}`, { state: { product: selectedProduct } });
  };
  console.log(products);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
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
            <h1 className="capitalize font-semibold text-slate-700 cursor-pointer"onClick={() => handleViewProduct(item.id)}>{item.title}</h1>
            <p className="font-bold">Ksh {item.discountPrice}</p>
            <p className="text-decoration-line: line-through italic text-slate-400 text-sm">
              Ksh {item.originalPrice}
            </p>
            <p className=" italic text-red-200 text-sm">
             {item.save}%
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
      <div className="flex justify-center items-center text-white">
        <p>Page: {page + 1}</p>
        <p>Total Pages: {totalPages}</p>
      </div>
    </div>
  );
}

export default Products;
