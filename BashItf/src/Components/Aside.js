import React from 'react'
import { useNavigate } from 'react-router-dom'

function Aside() {
  const navigate = useNavigate();
  const openCategory = (category) => {
    navigate(`/category/${category}`);
  };
  
  return (
    <div>
  <div className='flex flex-col mx-2 my-4'>
  <p className='text-slate-600 font-bold text-lg '>Categories</p>
  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('Electronics')}>Electronics</p>
  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('Clothing')}>Clothing</p>
  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('Home Appliances')}>Home Appliances</p>
  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('Furniture')}>Furniture</p>
  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('Beauty and Personal Care')}>Beauty and Personal Care</p>
  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('Sports and Fitness')}>Sports and Fitness</p>
  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('Books and Stationery')}>Books and Stationery</p>
  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('Toys and Games')}>Toys and Games</p>
  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('Health and Wellness')}>Health and Wellness</p>
  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('Grocery')}>Grocery</p>
  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('Others')}>Others</p>
  </div>
  
      <br/>
    </div>
  )
}

export default Aside