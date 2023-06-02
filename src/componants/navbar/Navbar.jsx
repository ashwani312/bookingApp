import { useNavigate } from 'react-router-dom';
import './navbar.css';
import React from 'react'

export default function Navbar() {
const navigate = useNavigate()
const handleLogo = () =>{
  navigate('/')
}
const handleSignUp = () =>{
  navigate('/signup')
}

  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className="logo" onClick={handleLogo}>Booking.com</span>
            <div className="navItems">
                <button className="navButton" onClick={handleSignUp}>Register</button>
                <button className="navButton" onClick={handleSignUp}>Log in</button>
            </div>
        </div>
    </div>
  )
}
