import React from 'react'
import './mailList.css'

export default function MailList() {
  return (
    <div className='mail'>
        <h1 className="mailTile">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>subscribe</button>
        </div>
    </div>
  )
}
