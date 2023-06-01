import React from 'react'
import Header from '../../componants/header/Header'
import './hotel.css'
import Navbar from '../../componants/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
export default function Hotel() {
  const photos = [
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/square600/90168125.webp?k=f290bb1bc7b7b41c199a7c01912c825b9df85d39db91d1461958e2cd5980f956&o="
    },
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
    },
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
    },
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o="
    },
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o="
    },
    {
      src : "https://cf.bstatic.com/xdata/images/hotel/square600/64768746.webp?k=0c33d15be1f0c9ebd0ede9b85565c3233ef836884a40d785dd6b36f9f0f50c04&o="
    }

  ]
  return (
    <>
    <Navbar/>
    <Header type= 'list'/>
    <div className="hotelContainer">
      <div className="hotelWrapper">
        <h1 className="hotelTitle">Grand Hotel</h1>
        <div className="hotelAddress">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span>Elton St 125 New York</span>
        </div>
        <span className="hotelDistance">
          Exellence location 500m from center
        </span>
        <span className="hotelPriceHighlight">
          Book a stay over $114 at this property and get a free airport taxi
        </span>
        <div className="hotelImages">
               {photos.map(photo =>(
                <div className="hotelImgWrapper">
                  <img src={photo.src} alt="" className="hotelImg" />
                </div>
               ))}
        </div>
      </div>
    </div>
    </>
  )
}
