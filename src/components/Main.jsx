import React from 'react'
import Card from './Card'

function Main() {
  return (
    <div className='font-montserrat w-screen flex flex-col justify-center items-center'>
        <div>
            <h1>Stays in Finland</h1>
            <p>12+ Stays</p>
        </div>
        <Card />
    </div>
  )
}

export default Main