import React from 'react'
import { useNavigate, Routes, Route ,Link} from 'react-router-dom'

import Landing_page_image from '../assets/images/Landing-page-image.svg'
import Create from './Create';

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='w-full h-screen flex justify-between bg-purple-100'>
            {/* card sectionn  */}
            <div className='ml-[170px] mt-[100px] mb-[106.31px]'>
                <img src={Landing_page_image}/>
            </div> 

            {/* heading section  */}
            <div className='mt-[306px] mr-[160px] '>
                <div className='flex flex-col'> 
                    <h1 className='text-6xl font-bold text-right leading-[73.59px]'>Imagine if <br/>snapchat <br/>had an event</h1>
                    <p className='text-right'>Easily Host and share events with your friend <br/> across any social media</p>
                    <button 
                    onClick={()=>navigate('/create')}>
                                 🎉 Create my event
                        <Link to={'/create'}></Link>
                        </button>
                </div>
            </div>

            <Routes>
            <Route path="/create" element={<Create />} />
            </Routes>
            
    </div>
    </>
  )
}

export default Home