import React from 'react'

import cakeImg from '../assets/images/Birthday-cake.png'

import { HiOutlineCalendar,HiLocationMarker,HiChevronRight } from "react-icons/hi";

function Event() {
  return (
    <div className='w-full h-screen flex justify-between bg-purple-50'>

        <div className='flex flex-col ml-[240px]'>

            <h1 className='text-5xl mt-[184px] text-center text-violet-900'>Birthday Bash</h1>
            <p className='mt-[5px] text-gray-500'>Hosted by <span className='font-bold'>Vimal Rijal</span></p>

            <div className='flex flex-col ml-[10px] mt-[25px]'>
                <div className='flex justify-between'>
                <HiOutlineCalendar/>
                <div className='flex flex-col '>
                    <h1 className='text-violet-900 font-bold'>18 august 6:00pm</h1>
                    <h1>to 19 august 1:00pm</h1>
                </div>
                <HiChevronRight/>
                </div>
                <div className='flex justify-between mt-[20px]'>
                <HiLocationMarker/>
                <div className='flex flex-col '>
                    <h1 className='text-violet-900 font-bold'>Street name</h1>
                    <h1>Suburb, postcode, street</h1>
                </div>
                <HiChevronRight/>
                </div>
                
            </div>

        </div>

        <div>
            <img className='w-[500px] h-[500px] mt-[184px] mr-[240px]' src={cakeImg}/>
        </div>

    </div>
  )
}

export default Event