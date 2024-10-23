import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Emailform from './Emailform';
import Mobileform from './Mobileform';
import RightFace from './RightFace';

function Register() {
    const [type,setType] = useState("EMAIL");

  return (
<div className="flex flex-col-reverse md:flex-row md:h-screen justify-between w-screen">
      <div className="w-[100%] md:w-[50%] lg:w-[40%] flex flex-col items-center justify-between  ">
        <div className="flex flex-col gap-5 w-[80%] sm:w-[55%] overflow-hidden mt-[2rem] md:my-auto">
            <div className="w-[5rem] p-[0.25rem] bg-[#EEEEEE] rounded-md">
                <img src={'/assets/515676b7c807ece1ab42ac89174a8fdc.png'} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-2 w-[85%]">
                <h2 className="text-3xl font-medium">Create Your Account</h2>
                <p>Register with your {type === "EMAIL" ? "email address" : "phone number"}</p>
            </div>
            {
                type === "EMAIL" ?
                <Emailform/>
                :
                <Mobileform/>
            }
            <h2 className="text-xs text-[#36393F] ">Already have an account ? <Link to={"/login"} className="text-blue-700">Login</Link></h2>
            <div className='w-full relative  my-6'>
                <h2 className='z-10 bg-white p-3 absolute left-[45%] -top-6'>OR</h2>
                <div className='w-full h-[1px] bg-[#6C6C6C] opacity-80'></div>
            </div>
            <button onClick={()=>setType(type === "EMAIL" ? "MOBILE" : "EMAIL")} className='border-2 border-[#632407] text-[#632407] py-2 rounded-sm'>Register With {type === "MOBILE" ? "Email" : "Phone Number"}</button>
        </div>
        <div className="flex items-center text-xs md:text-base gap-4 my-[1.5rem]"><h6>Terms and Conditions</h6><div className="bg-black w-[5px] h-[5px] rounded-full"></div><h6>Privacy Policy</h6></div>
      </div>
      <RightFace/>
    </div>
  )
}

export default Register
