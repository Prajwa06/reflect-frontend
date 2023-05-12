import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCity, selectCity } from "../features/citySlice";
import { removePlace, selectPlace } from "../features/placeSlice";
import { selectUser } from "../features/userSlice";
import EmptyCart from "../assets/image 5.png";
import header from "../assets/Shopping Bag - Checkout 🛒.png";


export default function Checkout() {
  const city = useSelector(selectCity);
  const place = useSelector(selectPlace);
  const user = useSelector(selectUser);
  const [inDiv1, setInDiv1] = useState(false);
  const [inDiv2, setInDiv2] = useState(false);
  const [inDiv3, setInDiv3] = useState(false);
  const dispatch=useDispatch();
  console.log(user, place, city);
  let total = 0;
  if (city) {
    total = city.value1 * 25000 + city.value2 * 35000 + city.value3 * 55000;
  }
  const handlePayment=(e)=>{
    e.preventDefault();
    dispatch(removeCity());
    dispatch(removePlace());
    alert(`Payment Succesfull Your Transaction completed `);
  }

  return (
    <div>
      <img
        className="mx-auto px-10  lg:px-96 py-8 text-4xl font-semibold text-gray-700 border-b-[1px] border-gray-50 shadow-sm"
        src={header}
        alt=""
      />
      {city ? (
        <div className="">
          <div
            onMouseEnter={() => setInDiv1(true)}
            onMouseLeave={() => setInDiv1(false)}
          
            className='flex relative my-2 border-b-[1px] border-gray-50 cursor-pointer
            shadow-sm'>
            <div className="h-5 w-5 rounded-2xl bg-pink-500 ml-5 mb-2 mt-1"></div>
            <h3 className="text-pink-500 font-bold text-xl ml-5 mb-2">
              ₹ 25000
            </h3>
            {!inDiv1 && <p className="absolute right-5 bg-gray-300 border border-black p-1 rounded-full ">
              {city.value1}
            </p>}
           
          </div>
          {inDiv1 && <div className="ml-10">
                <h3 className="text-gray-400 font-bold">{place.city} | Quantity:- {city.value1} | Stall Details</h3>
                <p>Terms & Conditions:- <span className="text-gray-300">Select your favourite social network and share our icon with your friends</span></p>
          </div>}


          <div
            onMouseEnter={() => setInDiv2(true)}
            onMouseLeave={() => setInDiv2(false)}
          
            className='flex relative my-2 border-b-[1px] border-gray-50 cursor-pointer
            shadow-sm'>
            <div className="h-5 w-5 rounded-2xl bg-pink-500 ml-5 mb-2 mt-1"></div>
            <h3 className="text-pink-500 font-bold text-xl ml-5 mb-2">
              ₹ 35000
            </h3>
            {!inDiv2 && <p className="absolute right-5 bg-gray-300 border border-black p-1 rounded-full ">
              {city.value2}
            </p>}
            
          </div>
          {inDiv2 && <div className="ml-10">
                <h3 className="text-gray-400 font-bold">{place.city} | Quantity:- {city.value2} | Stall Details</h3>
                <p>Terms & Conditions:- <span className="text-gray-300">Select your favourite social network and share our icon with your friends</span></p>
          </div>}

          <div
             onMouseEnter={() => setInDiv3(true)}
            onMouseLeave={() => setInDiv3(false)}
          
            className='flex relative my-2 border-b-[1px] border-gray-50 cursor-pointer
            shadow-sm'>
            <div className="h-5 w-5 rounded-2xl bg-indigo-500 ml-5 mb-2 mt-1"></div>
            <h3 className="text-indigo-500 font-bold text-xl ml-5 mb-2">
              ₹ 55000
            </h3>
            {!inDiv3 && <p className="absolute right-5 bg-gray-300 border border-black p-1 rounded-full ">
              {city.value3}
            </p>}
            
          </div>
          {inDiv3 && <div className="ml-10">
                <h3 className="text-gray-400 font-bold">{place.city} | Quantity:- {city.value3} | Stall Details</h3>
                <p>Terms & Conditions:- <span className="text-gray-300">Select your favourite social network and share our icon with your friends</span></p>
          </div>}
          

          <div className="w-screen bg-gray-100 absolute bottom-0 ">
            <h4 className="mx-10 text-pink-600 text-xl font-semibold py-2">
              We levy a 50% Advance on all our stall sales. The rest 50% shall
              be credited post event
            </h4>
            <div className="flex justify-between pt-5">
              <h3 className="ml-10 font-bold text-gray-400 text-lg">
                SubTotal
              </h3>
              <h3 className="mr-10 font-bold text-gray-400 text-lg">
                ₹ {total}
              </h3>
            </div>
            <div className="flex justify-between pb-5">
              <h3 className="ml-10 font-bold text-gray-400 text-lg">Tax</h3>
              <h3 className="mr-10 font-bold text-gray-400 text-lg">
                ₹ {total / 10}
              </h3>
            </div>
            <div className="flex justify-between">
              <h3 className="ml-10 font-bold  text-2xl">Total</h3>
              <h3 className="mr-10 font-bold  text-2xl">
                ₹ {total + total / 10}
              </h3>
            </div>
            <div className="flex justify-center items-center py-5 lg:mb-2">
              <button onClick={handlePayment} className="button w-96">Pay Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          <div className="flex flex-col justify-center items-center ">
            <img className="lg:h-52 lg:w-52" src={EmptyCart} alt="" />
            <h1 className="text-center text-4xl text-gray-400 border-b-[1px] border-gray-50">
              Add items to cart to get started!
            </h1>
            <hr className="border-b-[1px] border-gray-50 w-screen shadow-sm mt-5" />

            <div className="w-screen bg-gray-100 absolute bottom-0">
              <h4 className="mx-10 text-pink-600 text-xl font-semibold py-2">
                We levy a 50% Advance on all our stall sales. The rest 50% shall
                be credited post event
              </h4>
              <div className="flex justify-between pt-5">
                <h3 className="ml-10 font-bold text-gray-400 text-lg">
                  SubTotal
                </h3>
                <h3 className="mr-10 font-bold text-gray-400 text-lg">₹ 0</h3>
              </div>
              <div className="flex justify-between pb-5">
                <h3 className="ml-10 font-bold text-gray-400 text-lg">Tax</h3>
                <h3 className="mr-10 font-bold text-gray-400 text-lg">₹ 0</h3>
              </div>
              <div className="flex justify-between">
                <h3 className="ml-10 font-bold  text-2xl">Total</h3>
                <h3 className="mr-10 font-bold  text-2xl">₹ 0</h3>
              </div>
              <div className="flex justify-center items-center pt-3 mb-1 lg:mb-2">
                <button  className="px-2 py-5 w-96 font-bold text-white md:text-sm bg-gradient-to-r from-gray-400 to-gray-500  rounded-3xl focus:outline-none  hover:shadow-md">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
