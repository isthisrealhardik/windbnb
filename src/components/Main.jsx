import React from 'react'
import Card from './Card'
import stays from "../../Assets/stays.json"

function Main() {
  return (
    <div className='font-montserrat text-primaryText w-screen flex flex-col justify-center items-center px-6'>
        <div className='flex justify-between items-center w-full mb-4'>
            <h1 className='font-montserrat font-bold text-xl'>Stays in Finland</h1>
            <p className='font-semibold opacity-60'>12+ Stays</p>
        </div>
        {stays.map(stay => (
          <Card photo={stay.photo} superhost={stay.superHost} type={stay.type} bed={stay.beds} rating={stay.rating} title={stay.title} />
        ))}
    </div>
  )
}

export default Main