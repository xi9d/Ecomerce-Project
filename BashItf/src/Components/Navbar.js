import React from 'react'
import cart from './cart.png'
import  menu from './menu.png'
import account from './templatepic2.jpg'
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

       <div className='mt-3 mx-5 cursor-pointer flex'>
        <img src={cart} 
        className='lg:w-6 mt-3 lg:h-6 w-2 h-2 '
        onClick={() => navigate("/cart")}/>
        <p className='-ml-3 -mt-1 text-orange-700  font-bold h-4 w-4 '>0</p>
       </div>

        
       <p  className='my-4 font-semibold text-white mx-4  px-2 py-2 cursor-pointer bg-orange-700 flex rounded-md'
        onClick={() => navigate("/account")}>
       <img src={account} className='w-5  h-5 mx-2 mt-1 '
       />profile</p>
        </div>
      
      </div>
    </div>
  )
}

export default Navbar