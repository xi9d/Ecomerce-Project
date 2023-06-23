import React from 'react'
import Login from './Login'
import { useNavigate } from 'react-router-dom'

function Account() {
  const navigate = useNavigate()
  const handleClick = (e) =>{
    e.preventDefault();
    navigate("/index");
}
  return (
    <>
    <div className='max-w-2xl mx-auto border m-10 px-4 py-4 text-center'>
    <h1 className='p-5 font-bold capitalize text-slate-600 text-lg'>Sign Up</h1>
    <form method='post' className='text-left px-4 py-4 font-semibold text-slate-600 capitalize'>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" className='border-b-2 h-10 px-2  text-lg w-full'/><br/>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" className='border-b-2 h-10 px-2  text-lg w-full'/><br/>
        <label for="lname">Email:</label>
        <input type="email" id="lname" name="lname" className='border-b-2 h-10 px-2  text-lg w-full'/><br/>
        <label for="lname">Password:</label>
        <input type="password" id="lname" name="lname" className='border-b-2 h-10 px-2  text-lg w-full'/><br/>
        <button type="submit" onClick={(e)=> handleClick(e)} className='px-4 py-4 mx-auto my-5  font-bold text-white rounded-md w-full bg-orange-700'>Submit</button>
    </form>
    <button 
    onClick={() => navigate("/login")}
    className='rounded-md hover:bg-green-600 hover:text-white font-semibold text-center px-4 py-4 text-blue-600 text border'>Log In</button>
    </div>
    

    </>
  )
}

export default Account