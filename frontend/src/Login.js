import React from 'react'

function Login() {
  return (
    <div>
      <div>
        <form action=''>
          <div classname='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' />
          </div>
          <div classname='mb-3'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' />
          </div>
          <button className='btn btn-succcess'>Login</button>
          <p> Don't have an account? <a href='/register'>Register</a></p>
          <button className='btn btn-default border'>Create Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login
