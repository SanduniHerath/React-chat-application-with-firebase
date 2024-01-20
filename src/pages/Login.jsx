import React from 'react'
import Add from "../img/addImage.jpg"

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Sanduni Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign in</button>
            </form>
            <p>You do have an account? Register</p>
        </div>
    </div>
  )
}

export default Login
