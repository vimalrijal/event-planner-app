import React,{useState, useRef,useContext} from 'react'
import { Link, useNavigate, Route, Routes, createSearchParams } from 'react-router-dom';
import { Store } from '../App';

import Event from './Event';

const Create = () => {

    const navigate = useNavigate()
    const user = useContext(Store);

    const eventRef = useRef(null);
    const hostRef = useRef(null);
    const locationRef = useRef(null);
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);

    const validateData = () => {
            
            user.setdata({
                eventName: eventRef.current.value,
                hostName: hostRef.current.value,
                location: locationRef.current.value,
                startDate: startDateRef.current.value,
                endDate: endDateRef.current.value
            })

            navigate('/event')
    }

  return (
    <div className="w-full h-screen flex justify-center bg-purple-200">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 my-[100px]">

            {/* event name input*/}
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Event Name
            </label>
            <input  type="text" placeholder="Username"  ref={eventRef}/>
            </div>

            {/* host name input */}
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                Host Name
            </label>
            <input type="text" placeholder="Hostname" ref={hostRef}/>
            </div>

            {/* place name input */}
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                location
            </label>
            <input type="text" placeholder="postcode, suburb, streetname" ref={locationRef}/>
            </div>

            {/* start date input  */}
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                Start date
            </label>   
            <input  type="date"  name="trip-start"min="2018-01-01" max="2099-12-31" ref={startDateRef}/>
            </div>

            {/* end date input  */}
            <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                End date
            </label>
            <input  type="date"  name="trip-start" min="2018-01-01" max="2099-12-31" ref={endDateRef}/>
           
            </div>

            {/* buttonn  */}
            <div className="flex items-center justify-between">
            
            <button onClick={()=>validateData()}>
                NEXT
               
            </button>
            </div>
        </div>
    
</div>
  )
}

export default Create
