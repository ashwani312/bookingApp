import React from 'react'
import './featuredPropertise.css'
export default function FeaturedPropertise() {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/105762573.webp?k=2d60f1bc92863378df6d230f19d726197363e101ca22090bf88810eb89dea86b&o=" alt="" />
                <span className="fpName">Aparthotel stare Miasto</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from 120$</span>
                <div className="fpRating">
                    <button>7.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o=" alt="" />
                <span className="fpName">Aparthotel stare Miasto</span>
                <span className="fpCity">New City</span>
                <span className="fpPrice">Starting from 130$</span>
                <div className="fpRating">
                    <button>8.0</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=" alt="" />
                <span className="fpName">Aparthotel stare Miasto</span>
                <span className="fpCity">Goa</span>
                <span className="fpPrice">Starting from 140$</span>
                <div className="fpRating">
                    <button>8.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img className='fpImg' src="https://cf.bstatic.com/xdata/images/hotel/square600/216475546.webp?k=b3803ba3bc1f5c3b481ac390a752a7a3787c58a2b5c5e2081ecdc1c81fc11cd0&o=" alt="" />
                <span className="fpName">Aparthotel stare Miasto</span>
                <span className="fpCity">Chennai</span>
                <span className="fpPrice">Starting from 150$</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

        </div>
    )
}
