// Login.js
import React, { useState } from 'react';  
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Validation from './LoginValidation';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    console.log('Form submitted');  // Add this line
    console.log('Validation Errors:', validationErrors);  // Add this line
    
    // Check if there are no errors (i.e., no error messages)
    if (Object.values(validationErrors).every(error => error === '')) {
      console.log('Sending POST request');  // Add this line
      axios.post('http://localhost:7999/login', values)
        .then(res => {
          console.log('Response:', res);  // Add this line
          if(res.data === "Successfully logged in") {
            navigate('/home');
          } else {
            alert("No record found");
          }
        })
        .catch(err => {
          console.log('Error:', err);  // Add this line
        });
    }
  };
  
  
  
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input 
              type='email' 
              placeholder='Enter Email' 
              name='email'
              onChange={handleInput} 
              className='form-control rounded-0'
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>

          <div className='mb-3'>
            <label htmlFor='password'><strong>Password</strong></label>
            <input 
              type='password' 
              placeholder='Enter Password' 
              name='password'
              onChange={handleInput} 
              className='form-control rounded-0'
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>

          <button type='submit' className='btn btn-success w-100 rounded-0'>Log In</button>
          <p>You agree to our terms and policies.</p>
          <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
