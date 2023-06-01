import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';


export default function Header(props) {
    console.log(props.type)
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOption, setOpenOption] = useState(false);
    const [option, setOption] = useState({
        adult: 1,
        children: 0,
        room: 1

    })
    return (
        <div className="header">
            <div className={props.type === 'list'?"headerContainer headerWidth" : "headerContainer"}>
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

              {  props.type !== 'list' &&<div>

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
                        <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                        <span className='headerSearchText' onClick={() => {
                            setOpenDate(!openDate)
                        }}>
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}

                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='datePicker'
                        />}
                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                        <span onClick={() => setOpenOption(!openOption)} className="headerSearchText">{option.adult} adult . {option.children} children . {option.room} room</span>
                        {openOption && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">1</span>
                                    <button className="optionCounterButton">+</button>
                                </div>

                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">1</span>
                                    <button className="optionCounterButton">+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">room</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton">-</button>
                                    <span className="optionCounterNumber">1</span>
                                    <button className="optionCounterButton">+</button>
                                </div>
                            </div>
                        </div>}

                    </div>

                    <div className="headerSearchItem">
                        <button className="headerBtn">search</button>
                    </div>
                    </div>
                </div>}
            </div>

        </div>
    )
}
