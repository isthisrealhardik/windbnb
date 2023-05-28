import React from 'react'
import stays from "../../Assets/stays.json"
import star from "../../Assets/star.svg"
import "../styles.css"

function Card() {
  return (
    <div className='w-[90%] flex flex-col justify-center items-center'>
        {/* photo */}
        <img src={stays[0].photo} alt="Photo" />
        <div>
            {/* superhost */}
            {stays[0].superHost && ( <div> <p>Super Host</p> </div> )}
            <div>
                {/* type */}
                <p>{stays[0].type},</p>
                {/* beds */}
                <p>{stays[0].beds}</p>
            </div>
            {/* rating */}
            <div>
              <img src={star} alt="Star Icon" className='colorChange' />
              <p>{stays[0].rating}</p>
            </div>
        </div>
        {/* title */}
        <h1>{stays[0].title}</h1>
    </div>
  )
}

export default Card