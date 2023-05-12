import React, { useState } from "react";
import places from "../assets/places.js.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import add from "../assets/add (1) 1.png"
import minus from "../assets/minus 1.png"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPlace } from "../features/placeSlice";
export default function Places() {
    const[value1,setValue1]=useState(0);
    const[value2,setValue2]=useState(0);
    const[value3,setValue3]=useState(0);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const addVal1 =(e)=>{
        e.preventDefault();
        setValue1(value1+1);
    }
    const addVal2 =(e)=>{
        e.preventDefault();
        setValue2(value2+1);
    }
    const addVal3=(e)=>{
        e.preventDefault();
        setValue3(value3+1);
    }
    const minusVal1 =(e)=>{
        e.preventDefault();
        if(value1>0){
            setValue1(value1-1);
        }
    }
    const minusVal2 =(e)=>{
        e.preventDefault();
        if(value2>0){
            setValue2(value2-1);
        }
    }
    const minusVal3=(e)=>{
        e.preventDefault();
        if(value3>0){
            setValue3(value3-1);
        }
    }

    const toCart=(e)=>{
        e.preventDefault();
        dispatch(addPlace({
            value1,
            value2,
            value3
        }));
        navigate("/checkout");
    }
  return (
    <div className="relative h-[89vh]">
      <img
        className="w-screen h-72 lg:px-96 lg:h-56  bg-gray-100 "
        src={places}
        alt=""
      />
      <div className="flex bg-gray-200 py-4 justify-between">
        <h3 className="ml-5 text-xl underline text-gray-700">Colour Code</h3>
        <div className="flex space-x-5 mr-5">
          <div className="flex">
            <h3 className="text-pink-500 font-bold">H1 - </h3>
            <div className="h-5 w-5 mt-1 ml-1 rounded-xl bg-pink-500" />
          </div>
          <div className="flex ">
            <h3 className="text-yellow-500 font-bold">H2 - </h3>
            <div className="h-5 w-5 mt-1 ml-1 rounded-xl bg-yellow-500" />
          </div>
          <div className="flex">
            <h3 className="text-indigo-500 font-bold">H3 - </h3>
            <div className="h-5 w-5 mt-1 ml-1 rounded-xl bg-indigo-500" />
          </div>
        </div>
      </div>

      <div className="flex border-b-2 border-gray-100 p-2 justify-between">
        <div className="flex">
          <div className="h-5 w-5 mt-1 ml-3 rounded-xl bg-pink-500" />
          <h3 className="text-pink-500 text-xl ml-10 font-semibold lg:ml-24 ">
            ₹25000
          </h3>
          <h3 className="text-pink-500 ml-10  lg:ml-24 ">32 Sq.Mt.</h3>
        </div>
        <div className="flex space-x-3 mr-2 lg:mr-5" >
            <img onClick={addVal1} className="cursor-pointer w-7 h-7" src={add} alt="" />
            <p className="font-bold">{value1}</p>
            <img onClick={minusVal1} className="cursor- w-7 h-7" src={minus} alt="" />
        </div>
      </div>

      <div className="flex border-b-2 border-gray-100 p-2 justify-between">
        <div className="flex">
          <div className="h-5 w-5 mt-1 ml-3 rounded-xl bg-yellow-500" />
          <h3 className="text-yellow-500 text-xl ml-10 font-semibold lg:ml-24 ">
            ₹35000
          </h3>
          <h3 className="text-yellow-500 ml-10  lg:ml-24 ">24 Sq.Mt.</h3>
        </div>
        <div className="flex space-x-3 mr-2 lg:mr-5" >
            <img onClick={addVal2} className="cursor-pointer w-7 h-7" src={add} alt="" />
            <p className="font-bold">{value2}</p>
            <img onClick={minusVal2} className="cursor-pointer w-7 h-7" src={minus} alt="" />
        </div>
      </div>

      <div className="flex border-b-2 border-gray-100 p-2 justify-between">
        <div className="flex">
          <div className="h-5 w-5 mt-1 ml-3 rounded-xl bg-indigo-500" />
          <h3 className="text-indigo-500 text-xl ml-10 font-semibold lg:ml-24 ">
            ₹55000
          </h3>
          <h3 className="text-indigo-500 ml-10  lg:ml-24 ">18 Sq.Mt.</h3>
        </div>
        <div className="flex space-x-3 mr-2 lg:mr-5" >
            <img onClick={addVal3} className="cursor-pointer w-7 h-7" src={add} alt="" />
            <p className="font-bold">{value3}</p>
            <img onClick={minusVal3} className="cursor-pointer w-7 h-7" src={minus} alt="" />
        </div>
      </div>


    



      
      <div className="flex absolute space-x-2 bottom-5 right-6 ">
        <button onClick={e=>navigate("/city")} className="w-44 py-4  font-bold text-white md:text-sm bg-gradient-to-r from-yellow-400 to-yellow-600  rounded-3xl focus:outline-none  hover:shadow-md  px-5 text-lg">
          City Select <LocationOnIcon className="-mt-1" />
        </button>
        <button onClick={toCart} className="w-44 button px-5">
          Go to Cart <ShoppingBagIcon className="-mt-1" />
        </button>
      </div>
      <p className="text-lg ml-5 mt-5 lg:mt-0 text-gray-400 underline cursor-pointer lg:absolute lg:bottom-5">
        {"< Back to City"}
      </p>
    </div>
  );
}
