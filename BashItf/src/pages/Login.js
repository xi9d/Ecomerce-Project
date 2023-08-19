import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import the js-cookie library

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        setLoginSuccess(true);
        setLoginError(false);
        
        setTimeout(() => {
          setLoginSuccess(false);
          Cookies.set('token', token, { expires: 7 }); //7 days
          navigate('/index');
        }, 3000); 
        
        console.log("The login was successful " + response.data);
      } else {
        setLoginSuccess(false);
        setLoginError(true);
        navigate('/login');
      }
    } catch (error) {
      console.log("The error from logging in " + error);
    }
  };

  return (
    <>
      <div className='max-w-2xl mx-auto border m-10 px-4 py-4 text-center'>
        {/* Conditional login success message */}
        {loginSuccess && (
          <div className="bg-green-200 p-3 mb-3 rounded-md text-green-800">
            Successful Login!
          </div>
        )}
        {/* Conditional login error message */}
        {loginError && (
          <div className="bg-red-200 p-3 mb-3 rounded-md text-red-800">
            Login failed. Please check your credentials and try again.
          </div>
        )}
        <h1 className='p-5 font-bold capitalize text-slate-600 text-lg'>Login</h1>
        <form
          method='post'
          className='text-left px-4 py-4 font-semibold text-slate-600 capitalize'
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Username(email):</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='border-b-2 h-10 px-2 text-lg w-full'
            required
          /><br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className='border-b-2 h-10 px-2 text-lg w-full'
            required
          /><br />
          <button
            type="submit"
            className='px-4 py-4 mx-auto my-5 font-bold text-white rounded-md w-full bg-orange-700'
          >
            Submit
          </button>
        </form>
        <p className='text-blue-500 p-2'>I Don't have an account?</p>
        <button
          onClick={() => navigate('/')}
          className='rounded-md hover:bg-green-600 hover:text-white font-semibold text-center px-4 py-4 text-blue-600 text border'
        >
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Login;
