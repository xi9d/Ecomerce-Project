import React, { useState } from 'react'
import product from '../Components/templatepic1.png'
import Navbar from '../Components/Navbar'
import Products from '../Components/Products'

function ViewProduct() {
    
  return (
    <div>
        <div className='grid grid-rows-2 '>
            <div className='grid grid-cols-2 mx-10 my-5'>
                <div>
               <img src={product} className='w-fit h-fit '/>
               </div>
               <div className='' >
                <h1 className='text-center font-bold text-4xl text-orange-600'>Nike Air 370</h1>
                <h2 className='text-slate-600'>Description</h2>
                <p className='text-slate-900'>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's
                     standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a 
                      type specimen book. It has survived not only five centuries, 
                      but also the leap into electronic typesetting, remaining
                       essentially unchanged. It was popularised in the 1960s with 
                       the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus
                         PageMaker including versions of Lorem Ipsum.</p>
                <h2 className='text-slate-600'>Pricing</h2>
                <p className='text-2xl text-green-600 font-bold'>Ksh 5000</p>
                <p className='text-decoration-line: line-through italic text-slate-400 text-sm'>Ksh 7000</p>
               </div>
            </div>
            <div className='max-w-2xl mx-auto '>
                <button className='text-white rounded-lg font-bold px-4 py-5 bg-orange-700'
                >
                    Add to cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default ViewProduct