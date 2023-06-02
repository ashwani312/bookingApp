import React from 'react'
import './searchItem.css'
import { useNavigate } from 'react-router-dom'

export default function SearchItem(props) {
  console.log(props)
  const navigate = useNavigate()

  const handleClick = () =>{
    navigate('/hotel')
  }

  return (
    <div className='SearchItem'>
        <img src={props.url} alt="" className='siImg'/>
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
