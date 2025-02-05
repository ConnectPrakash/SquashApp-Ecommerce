import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
function Login() {
  return (
    <div className='Login-cont'>
      <h2>Login</h2>
      <div className='Login-input'>
        <input type='email' placeholder='Email'></input>
      </div>
      <div className='Login-input'>
        <input type='password' placeholder='Password'></input>
      </div>
      <div className='Login-btn'>
        <button>Login</button>
      </div>
      <p>You didn't have account ? <Link to='/signup'>Sign up</Link></p>
    </div>
  )
}

export default Login
