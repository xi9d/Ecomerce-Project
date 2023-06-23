import React from 'react'
import { useNavigate } from 'react-router-dom'

function Aside() {
  const navigate = useNavigate()
  const openCategory = () =>{
    navigate("/category")
  }
  return (
    <div className='hidden lg:block w-72 overflow-y-scroll aside'>
    <div className="px-4">
    <h1 className="text-lg font-bold capitalize  text-slate-700 bg-white py-5">Categories</h1>
    <ul className="text-slate-800 font-semibold">
      <li className="py-2 px-2 cursor-pointer border" onClick={() => openCategory()}>Vans</li>
   
    </ul>
    </div>
    </div>
  )
}

export default Aside