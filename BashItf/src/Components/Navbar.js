import React from 'react'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  const navigate = useNavigate()
  
  
  return (
    <div className=' bg-green-900  flex w-full space-x-40 sticky lg:justify-between h-fit  shadow-md'>
      
      <h1 className=" text-orange-400 h-8 mt-5 ml-5 cursor-pointer font-bold capitalize lg:text-4xl md:text-lg sm:text-sm"
      onClick={() => navigate("/index")}>FoxBash Inc.</h1>
      
      <div className='flex flex-nowrap'>
        <input type='search'placeholder='Search products' 
        className=' cursor-text placeholder:text-slate-400 text-slate-600 hidden lg:block px-4 capitalize mt-4   rounded-md mr-5 h-10'/> 
         
      <div className='flex'>
          <p className='my-4  text-white px-2 py-2 cursor-pointer bg-orange-700 flex rounded-md'
          onClick={() => navigate("/addProduct")}>Add product</p>

        </div>
      
      </div>
    </div>
  )
}

export default Navbar