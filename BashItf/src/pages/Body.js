import React from 'react'

import Products from '../Components/Products'

function Body() {
  return (
  
    <div className='w-full '>
    <h1 className='text-slate-700 font-bold capitalize  text-lg m-5'>Nike Shoes</h1>
    <Products/>
   <div className='flex justify-center items-center text-white '>
    <button className='px-2 py-2 my-5 mx-auto bg-green-700 hover:bg-green-500 font-bold text-lg w-40 rounded-md'>Previous</button>
    <button className='px-2 py-2 my-5 mx-auto bg-orange-700 hover:bg-orange-500 font-bold text-lg w-40 rounded-md'>Next</button>
   </div>
   </div>

  )
}

export default Body