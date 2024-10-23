import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import OtpModal from './OtpModal'

function Mobileform() {
    const [isOTP,setIsOTP] = useState(false)
    const [mobile,setMobile] = useState("")
    const [code,setCode] = useState("91")

    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsOTP(true)
    }

  return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className='flex gap-1 w-full'>
        <select name="" value={code} onChange={(e)=>setCode(e.target.value)} id="" className='bg-[#EEEEEE] text-xs p-3 rounded-sm'>
            <option value="91">IN +91</option>
            <option value="1">DU +1</option>
        </select>
        <input
        type="number"
        value={mobile}
        placeholder="Phone Number"
        className="bg-[#EEEEEE] text-xs w-full p-3 rounded-sm"
        onChange={(e)=>setMobile(e.target.value)}
      />
      </div>
      <div className="flex justify-between">
      <div className="text-xs text-[#6C6C6C]">
            View Our <Link className="text-blue-600 font-medium">Privacy Policy</Link>
        </div>
      </div>
      <button className="bg-[#632407] text-white py-2 rounded-sm">
        Send OTP
      </button>
    </form>
    {isOTP && <OtpModal mobile={code+mobile}/>}
    </>

  )
}

export default Mobileform
