import React from 'react'
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCity } from '../features/citySlice';

export default function Citybar(Props) {
    const{name,date}=Props;
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const selectCity=()=>{
        dispatch(addCity({
            city:name,
        }));
        navigate("/place")
    }
  return (
    <div className='flex bg-white justify-between py-2 border-b-2 border-gray-200'>
    <div className='flex '>
    <LocationCityIcon className='text-gray-400 ml-5'/>
      <h1 className='font-bold ml-3'>{name}</h1>
    </div>
        <div className=' '>
        <h3 className='text-start text-gray-400'>{date}</h3>
        </div>
    <ArrowForwardIosIcon onClick={selectCity} className='mr-5 text-gray-300 cursor-pointer hover:text-gray-500'
    />
    </div>
  )
}
