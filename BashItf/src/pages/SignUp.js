import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [signupError, setSignupError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSignupSuccess(true);
        setSignupError(false);
        setTimeout(() => {
          setSignupSuccess(false);
          navigate('/login');
        }, 3000); 
        
      } else {
        setSignupSuccess(false);
        setSignupError(true);
        navigate('/');
      }
    } catch (error) {
      console.log("There is an error from the signup " + error);
    }
  };

  return (
    <>
      <div className='max-w-2xl mx-auto border m-10 px-4 py-4 text-center'>
        {/* Conditional success message */}
        {signupSuccess && (
          <div className="bg-green-200 p-3 mb-3 rounded-md text-green-800">
            Successful SignUp! You can now log in with your credentials.
          </div>
        )}
        {/* Conditional error message */}
        {signupError && (
          <div className="bg-red-200 p-3 mb-3 rounded-md text-red-800">
            Signup failed. Please check your details and try again.
          </div>
        )}
        <h1 className='p-5 font-bold capitalize text-slate-600 text-lg'>Sign Up</h1>
        <form
          method='post'
          className='text-left px-4 py-4 font-semibold text-slate-600 capitalize'
          onSubmit={handleSubmit}
        >
          <label htmlFor="fname">First name:</label>
          <input
            type="text"
            id="fname"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className='border-b-2 h-10 px-2 text-lg w-full'
            required
          /><br />
          {/* Repeat similar input fields for lastName, email, and password */}
          <label htmlFor="fname">Last name:</label>
          <input
            type="text"
            id="lname"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className='border-b-2 h-10 px-2 text-lg w-full'
            required
          /><br />
          <label htmlFor="fname">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='border-b-2 h-10 px-2 text-lg w-full'
            required
          /><br />
          <label htmlFor="fname">Password:</label>
          <input
            type="password"
            id="pass"
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
        <p className='text-blue-500 p-2'>Already have an account?</p>
        <button
          onClick={() => navigate('/login')}
          className='rounded-md hover:bg-green-600 hover:text-white font-semibold text-center px-4 py-4 text-blue-600 text border'
        >
          Log In
        </button>
      </div>
    </>
  );
}

export default Account;
