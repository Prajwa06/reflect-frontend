import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Citybar from './Citybar';
import location from "../assets/PngItem_453216 1.png"

export default function Cities() {
    const cities=[
        {name:"Raipur  " , date:"10/11/2023"},
        {name:"Haryana " , date:"09/12/2023"},
        {name:"Amritsar" , date:"02/01/2024"},
        {name:"Nagpur  " , date:"18/11/2023"},
        {name:"Pune    " , date:"22/11/2023"},
        {name:"Nashik  " , date:"15/01/2024"},
        {name:"Goa     " , date:"05/05/2024"},

]

  return (
    <div className='relative bg-gray-100 h-[92vh] lg:h-[89vh]'>
    <div className='flex justify-center'>
      <h1 className='text-center text-gray-600 font-semibold text-2xl lg:text-4xl py-10 lg:py-5 '>Select Your Location </h1>
      <img className='ml-5 h-12 mt-8 lg:mt-5' src={location} alt="" />
      </div>
        {cities.map(city=>(
            <Citybar key={city.name} name={city.name} date={city.date}/>
        ))}
        <h3 className='text-center text-3xl mx-10 py-10 lg:py-5 text-gray-400 '>Not Found the City you were looking for😕?</h3>
        <div className='flex flex-col items-center justify-center'>
        <button className='px-5 py-4 bg-white  shadow-md rounded-full my-2 hover:shadow-xl active:scale-90 transition duration-150 text-lg'>Contact Sales ☎️</button>
        </div>
        <button className='absolute bottom-10 right-5 button px-5'>Go to Cart <ShoppingBagIcon className='-mt-1'/></button>
    </div>
  )
}
