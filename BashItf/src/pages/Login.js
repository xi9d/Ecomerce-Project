import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/index");
    }
  return (
    <>
    <div className='max-w-2xl mx-auto border m-10 px-4 py-4 text-center'>
    <h1 className='p-5 font-bold capitalize text-slate-600 text-lg'>Login</h1>
    <form method='post' className='text-left px-4 py-4 font-semibold text-slate-600 capitalize'>
        <label for="lname">Username:</label>
        <input type="email" id="lname" placeholder='Email..' name="lname" className='border-b-2 h-10 px-2  text-lg w-full'/><br/>
        <label for="lname">Password:</label>
        <input type="password" id="lname" name="lname" className='border-b-2 h-10 px-2  text-lg w-full'/><br/>
        <button type="submit"
        onClick={() => handleClick()} 
        className='px-4 py-4 mx-auto my-5  font-bold text-white rounded-md w-full bg-orange-700'>Submit</button>
    </form>
    </div>

    </>
  )
}

export default Login