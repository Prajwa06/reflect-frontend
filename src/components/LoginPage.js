import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import home from "../assets/undraw_login_re_4vu2 1.png"
import vector1 from "../assets/Vector (1).png"
import vector2 from "../assets/Vector.png"
import google from "../assets/Group 8.png"
import fb from "../assets/Group 9.png"
import { useNavigate } from 'react-router-dom'
import { login } from '../features/userSlice'

export default function LoginPage() {
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const[username,setUsername]=useState("");
    const handleLogin =()=>{
        dispatch(login({
            user:username
        }));
        navigate("/city");
    }

  return (
    <div>
    <div className=' lg:flex lg:justify-around my-16'>
      <div >
        <img className='h-48 mx-auto md:h-80' src={home} alt="" />
      </div>

      <div className='mt-5 ml-[70px] md:mt-0 md:ml-0'>
        <form action="">
        <h3 className='font-bold text-2xl text-start'>Login Here!</h3>
        <div className='flex flex-col relative'>
        <input className='border outline-none border-gray-400 mt-5 p-3 w-72 rounded' type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}   placeholder='Username or Phone' />
         <input className='border outline-none border-gray-400 mt-3 p-3 w-72 rounded' type="password" placeholder='Password' />
         <p className='mt-1  md:absolute -bottom-8 right-0 text-gray-400 hover:text-gray-600 cursor-pointer'>Forget Password?</p>
        </div>
        <button onClick={handleLogin} className='button w-72 mt-9 cursor-pointer'>Login</button>
        <div className='flex mt-10 md:mt-2'>
            <div className='h-1 w-[85px] bg-gradient-to-r from-white to-pink-800 mt-3'></div>
            <p className='px-1'>Or Sign up With</p>
            <div className='h-1 w-[85px] bg-gradient-to-r from-pink-800 to-white mt-3'></div>
        </div>
        <div className=' flex mt-5 ml-20  '>
            <img className='h-16 p-2  cursor-pointer hover:shadow-md ' src={google} alt="google" />
            <img className='h-16 p-2 cursor-pointer hover:shadow-md' src={fb} alt="facebbok" />
        </div>
        </form>
      </div>
    </div>
    <img className='h-48 lg:h-80 w-screen  fixed bottom-0 shadow-lg ' src={vector2} alt="" />
    <img className='lg:visible w-screen fixed bottom-0 z-1 shadow-2xl' src={vector1} alt="" />
    </div>
  )
}
