import React from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

export default function Header() {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rental</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Attractions</span>
                    </div>

                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Airport Taxis</span>
                    </div>
                </div>
                <h1 className="headerTitle">
                    A lifetime of discount? It's Genious.
                </h1>
                <p className="headerDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti optio voluptatibus tenetur, ad fugit sint molestiae praesentium? Hic, doloribus atque!
                </p>
                <button className='headerBtn'>Sign in / Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='headerIcon' />
                        <input type="text" placeholder='where are you going?' className='headerSearchInput' />
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendar} className='headerIcon' />
                       <span className='headerSearchText'>date to date</span>
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span className="headerSearchText">2 adults 2 children 1 room</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
