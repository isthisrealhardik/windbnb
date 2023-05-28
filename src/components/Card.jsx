import React from 'react'
import stays from "../../Assets/stays.json"
import star from "../../Assets/star.svg"
import "../styles.css"

function Card({ photo, superhost, type, bed, rating, title }) {
  return (
    <div className='w-full flex flex-col justify-center items-center text-primaryText my-4'>
        {/* photo */}
        <img src={photo} alt="Photo" className='rounded-2xl w-full h-60 object-cover' />
        <div className='flex justify-between w-full items-center mt-2'>
            {/* superhost */}
            {superhost && ( <div className='text-primaryText border border-primaryText rounded-full px-2 py-1 mx-1'> <p className='text-xs'>Super Host</p> </div> )}
            <div className='flex justify-center items-center opacity-70 text-base space-x-2'>
                {/* type */}
                <p>{type}, </p>
                {/* beds */}
                <p>{bed} beds</p>
            </div>
            {/* rating */}
            <div className='flex justify-center space-x-1 items-center'>
              <img src={star} alt="Star Icon" className='colorChange w-5' />
              <p className='opacity-70'>{rating}</p>
            </div>
        </div>
        {/* title */}
        <h1 className='font-montserrat font-bold text-base mt-1'>{title}</h1>
    </div>
  )
}

export default Card