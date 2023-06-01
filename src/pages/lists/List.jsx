import React, { useState } from 'react'
import Navbar from '../../componants/navbar/Navbar'
import Header from '../../componants/header/Header'
import './list.css'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItem from '../../componants/searchItem/SearchItem'


export default function List() {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [option, setOption] = useState(location.state.option)
  const [openDate, setOpenDate] = useState(false)
  return (
    <div>
      <Navbar />
      <Header type='list' />
      <div className="listContainer">
        <div className="listwrapper">
          <div className="listSearch">
            <h1 className="lstitle">Search</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="lsItem">
              <label >Check-in-Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                onChange={item => setDate([item.selection])} minDate={new Date()} ranges={date}
              />}
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input type="number" className='lsOptionInput' />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input type="number" className='lsOptionInput' />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Adults
                    </span>
                    <input type="number" min={1} className='lsOptionInput' placeholder={option.adults} />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Children
                    </span>
                    <input type="number" min={0} className='lsOptionInput' placeholder={option.children} />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Room
                    </span>
                    <input type="number" min={1} className='lsOptionInput' placeholder={option.room} />
                  </div>
                  </div>
                </div>
              </div>
              <button className='searchBtn'>Search</button>
            </div>
            <div className="listResult">
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
              <SearchItem/>
            </div>
          </div>
        </div>
      </div>
      )
}
