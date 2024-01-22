import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Selina Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/11440206/pexels-photo-11440206.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <span>Lazzy</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
