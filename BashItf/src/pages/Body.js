import React, { useState, useEffect } from 'react';
import Products from '../pages/Products';
import ProductsService from '../Services/ProductsService';

function Body() {
  const [currentPage, setCurrentPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (page) => {
    setLoading(true);
    try {
      const response = await ProductsService.getAllProducts(page);
      setProducts(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-slate-700 font-bold capitalize text-lg m-5"></h1>
      <Products products={products} loading={loading} />
      <div className="flex justify-center items-center text-white">
        <button
          className="px-2 py-2 my-5 mx-auto bg-green-700 hover:bg-green-500 font-bold text-lg w-40 rounded-md"
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        <button
          className="px-2 py-2 my-5 mx-auto bg-orange-700 hover:bg-orange-500 font-bold text-lg w-40 rounded-md"
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Body;
