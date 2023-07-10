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
  onClick={() => openCategory('electronics')}>Electronics</p>

  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('clothing')}>Clothing</p>

  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('home Appliances')}>Home Appliances</p>

  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('furniture')}>Furniture</p>

  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('beauty and Personal Care')}>Beauty and Personal Care</p>

  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('sports and Fitness')}>Sports and Fitness</p>

  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('books and Stationery')}>Books and Stationery</p>

  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('toys and Games')}>Toys and Games</p>

  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('health and Wellness')}>Health and Wellness</p>

  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('grocery')}>Grocery</p>

  <p className='text-slate-600 font-semibold text-md cursor-pointer hover:text-orange-700'
  onClick={() => openCategory('others')}>Others</p>
  </div>
  
      <br/>
    </div>
  )
}

export default Aside