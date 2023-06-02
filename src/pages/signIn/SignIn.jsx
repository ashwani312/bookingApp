import React from 'react'
import './signup.css'
import Navbar from '../../componants/navbar/Navbar'


export default function SignIn() {
  return (
    <>
   <Navbar/>
    <div className='container'>
        <div className="box">
         
            <h2>Email</h2>
            <input type="email" className='emailBox' required placeholder='enter your email here'/>
            <h2>Password</h2>
            <input type="password"className='passwordBox' required placeholder='enter your password'/>
            <button type="submit">Submit</button>
        </div>
    </div>
    </>
  )
}
