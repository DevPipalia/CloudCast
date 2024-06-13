import React from 'react'
import { BiSearch,BiCurrentLocation } from 'react-icons/bi'



const Inputs = () => {
  return (
    <>
        <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row justify-center w-3/4 items-center space-x-4'>
            <input type='text' placeholder='search by city' className='text-gray-600 text-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder:lowercase'/>
            <BiSearch size={30} className='cursor-pointer transition ease-out hover:scale-125' color='white'/>
            <BiCurrentLocation size={30} className='cursor-pointer transition ease-out hover:scale-125' color='white'/>
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'> 
            <button className='text-2xl font-medium transition ease-out hover:scale-125 text-white' >°C</button>
            <button className='text-2xl font-medium mx-1  text-white'>|</button>
            <button className='text-2xl font-medium transition ease-out hover:scale-125  text-white' >°F</button>
        </div>
        </div>
    </>
  )
}

export default Inputs