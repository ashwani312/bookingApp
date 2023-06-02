import React, { useState } from 'react'
import Header from '../../componants/header/Header'
import './hotel.css'
import Navbar from '../../componants/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../componants/mailList/MailList'
import Footer from '../../componants/Footer/Footer'
export default function Hotel() {
  const [sliderNumber, setSliderNumber] = useState(0)
  const [open , setOpen] = useState(false)
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/90168125.webp?k=f290bb1bc7b7b41c199a7c01912c825b9df85d39db91d1461958e2cd5980f956&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o="
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square600/64768746.webp?k=0c33d15be1f0c9ebd0ede9b85565c3233ef836884a40d785dd6b36f9f0f50c04&o="
    }

  ]
  const handleOpen = (i) =>{
    setSliderNumber(i)
    setOpen(true)
  }
  const handleArrow = (direction) =>{
    let newSlideNumber;
    if(direction === 'l'){
      newSlideNumber = sliderNumber === 0? 5 : sliderNumber -1
    }else{
      newSlideNumber = sliderNumber === 5? 0 : sliderNumber + 1
    }
    setSliderNumber(newSlideNumber)
  }
  return (
    <>
      <Navbar />
      <Header type='list' />
      <div className="hotelContainer">
       { open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleArrow('l')}/>
          <div className="sliderWrapper">
            <img src={photos[sliderNumber].src} alt="" className='sliderImg' />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleArrow('r')}/>
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or book now</button>
          <h1 className="hotelTitle">Grand Hotel</h1
          >
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Exellence location 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo,i) => (
              <div className="hotelImgWrapper">
              <img src={photo.src} alt="" className="hotelImg" 
              onClick={()=>handleOpen(i)}/>
            </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hoteldetailText">
              <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
              <p className="hotelDesc">
                You're eligible for a Genius discount at Zulu Land cottages - near Curlies beach shack and shiva valley - Anjuna beach! To save at this property, all you have to do is sign in.

                Located in Anjuna, a few steps from Anjuna Beach, Zulu Land cottages - near Curlies beach shack and shiva valley - Anjuna beach provides accommodation with a fitness centre, free private parking, a garden and a restaurant. Among the facilities at this property are room service and a 24-hour front desk, along with free WiFi throughout the property. Guests can make use of a bar.
                At the resort, rooms have a balcony with a garden view. Every room is equipped with a private bathroom with a bath, free toiletries and bathrobes. All units will provide guests with air conditioning, a safety deposit box and a flat-screen TV.

                Breakfast is available daily, and includes à la carte, continental and Asian options.

                Zulu Land cottages - near Curlies beach shack and shiva valley - Anjuna beach offers a sun terrace.


              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an excellence location score of 9.9!
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book now</button>
            </div>
          </div>

        </div>
        <MailList />
      <Footer />
      </div>
     
    </>
  )
}
