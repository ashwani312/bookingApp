import React from 'react'
import './searchItem.css'
import { useLocation, useNavigate } from 'react-router-dom'

export default function SearchItem() {
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/hotel')
  }

  return (
    <div className='SearchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" alt="" className='siImg'/>
        <div className="siDesk">
          <h1 className='siTitle'>Tower Street Apartment</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubTitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Entire studio . 1 bathroom . 21m 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle" >
            you can cancel later so lock in this great price today
          </span>

        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Exellence</span>
            <button>8.9</button>
          </div>
          <div className="siDetailsTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Include taxes and fees</span>
            <button className="siCheckButton" onClick={handleClick}>See availibility</button>
          </div>
        </div>
    </div>
  )
}
