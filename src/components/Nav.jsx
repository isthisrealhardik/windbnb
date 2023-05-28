import React, { useState } from 'react'
import Logo from "../../Assets/logo.png"
import Search from "../../Assets/search.svg"
import "../styles.css"
import Close from "../../Assets/close.svg"


function Nav() {

    const [Location, setLocation] = useState('')
    const [Guests, setGuests] = useState('')

    const closeSearch = () => {
        const touched = document.getElementById('touched')
        touched.classList.remove('flex')
        touched.classList.add('hidden')
    }
    const openSearch = () => {
        const touched = document.getElementById('touched')
        touched.classList.remove('hidden')
        touched.classList.add('flex');
    }

  return (
    <div className=' w-screen bg-primary font-mulish text-primaryText px-4 py-6 flex flex-col justify-center items-center'>
        {/* non-touched */}
        <img src={Logo} alt="Logo" className=' mb-6' />
        <div className='flex w-full drop-shadow' onClick={openSearch}>
            <input value={Location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder='Add locations' className='bg-primary rounded-l-2xl w-36 h-14 px-4 border-r border-secondaryText border-opacity-20' />
            <input value={Guests} onChange={(e) => setGuests(e.target.value)} type="text" placeholder='Add guests' className='bg-primary w-28 h-14 px-4 border-r border-secondaryText border-opacity-20' />
            <button className='bg-primary rounded-none rounded-r-2xl h-14'>
                <img src={Search} alt="Search Icon" className='colorChange w-8' />
            </button>
        </div>
        {/* touched */}
        <div id='touched' className='z-30 border-b border-b-primaryText border-opacity-20 drop-shadow absolute w-screen h-[80%] hidden flex-col px-4 py-2 bg-primary top-0 left-0 justify-between'>
            <div>
                <div className='w-full flex justify-between items-center my-4'>
                    <p className='font-extrabold font-mulish text-sm'>Edit your search</p>
                    <img src={Close} alt="Close icon" className='w-6' onClick={closeSearch} />
                </div>
                <div className='drop-shadow-2xl rounded-xl border border-primaryText border-opacity-5'>
                    <div className='my-3'>
                        <p className='uppercase font-extrabold text-xs px-4'>location</p>
                        <input value={Location} onChange={(e) => setLocation(e.target.value)} type="text" placeholder='Add locations' className='pb-2 pt-1 px-4 bg-transparent border-0 placeholder:text-primaryText placeholder-opacity-100 border-b border-b-primaryText border-opacity-10 w-full' />
                    </div>
                    <div>
                        <p className='uppercase font-extrabold text-xs px-4'>guests</p>
                        <input value={Guests} onChange={(e) => setGuests(e.target.value)} type="text" placeholder='Add guests' className='pb-2 pt-1 px-4 bg-transparent border-0 placeholder:text-primaryText placeholder-opacity-100 w-full' />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center'>
                <button className='bg-secondary h-12 rounded w-32 flex justify-center items-center'>
                    <img src={Search} alt="Search Icon" className='w-6 whiteColor' />
                    <p className='text-primary font-mulish text-sm mx-2'>Search</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Nav