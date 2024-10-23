import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

function OtpModal({mobile}) {
    const [otpValue,setOtpValue] = useState(new Array())
    const [showInp,setShowInp] = useState(new Array(4).fill(false))

    const oneRef = useRef()
    const twoRef = useRef()
    const threeRef = useRef()
    const fourRef = useRef()

    useEffect(()=>{
        console.log("OTP : ",otpValue);
        console.log(showInp);
        
        if(otpValue?.length === 0){
            oneRef.current.focus()
        }
        if(otpValue?.length === 1){
            twoRef.current.focus()
        }
        if(otpValue?.length === 2){
            threeRef.current.focus()
        }
        if(otpValue?.length === 3){
            fourRef.current.focus()
        }
    },[otpValue])
    
    const handleInsert = (e,index)=>{
        const target = e.target.value;
        let valueToInsert = target.split("")[target.length - 1];
        console.log("VAlye",valueToInsert)
        if(valueToInsert){
            console.log("KERI",otpValue);
            
            setShowInp(prev=>{
                let inpNew = [...prev];
                inpNew[index] = true
                return inpNew
            })
            setOtpValue(prev=>{
                let newOTP = [...prev]
                if(newOTP[index] === ""){
                    newOTP[index] = valueToInsert
                }else{
                    newOTP.push(valueToInsert)
                }
                return newOTP
            })
        }else{
            setOtpValue(prev=>{
                let newOTP = [...prev]
                newOTP[index] = ""
                return newOTP
            })
        }
    }

    const handleShowInp = (index)=>{
        setShowInp(prev=>{
            let newInp = [...prev]
            newInp[index] = false
            return newInp
        })
    }

  return createPortal(
    <div className='fixed h-screen w-screen z-20 top-0 bg-[#00000065] flex justify-center items-center'>
        <div className='bg-white rounded-md w-[80%] sm:w-[70%] md:w-[55%] lg:w-[40%] xl:w-[30%] p-8'>
            <h2 className='text-2xl font-bold text-center'>Enter your OTP</h2>
            <h6 className="text-xs sm:text-sm md:text-base text-center opacity-65">An SMS was sent to +{mobile}</h6>
            <div className='flex justify-evenly my-6 otpInputs'>
                {otpValue[0] && showInp[0]? <p className='font-bold text-2xl'  onClick={()=>handleShowInp(0)}>{otpValue[0]}</p> :<input ref={oneRef} type="number" value={otpValue[0]} onChange={(e)=>handleInsert(e,0)} className='bg-[#EEEEEE] w-[2rem] h-[2rem] px-3 rounded-full' />}
                {otpValue[1] && showInp[1]? <p className='font-bold text-2xl'  onClick={()=>handleShowInp(1)}>{otpValue[1]}</p> :<input ref={twoRef} type="number" value={otpValue[1]} onChange={(e)=>handleInsert(e,1)} className='bg-[#EEEEEE] w-[2rem] h-[2rem] px-3 rounded-full' />}
                {otpValue[2] && showInp[2]? <p className='font-bold text-2xl'  onClick={()=>handleShowInp(2)}>{otpValue[2]}</p> :<input ref={threeRef} type="number" value={otpValue[2]} onChange={(e)=>handleInsert(e,2)} className='bg-[#EEEEEE] w-[2rem] h-[2rem] px-3 rounded-full' />}
                {otpValue[3] && showInp[3]? <p className='font-bold text-2xl'  onClick={()=>handleShowInp(3)}>{otpValue[3]}</p> :<input ref={fourRef} type="number" value={otpValue[3]} onChange={(e)=>handleInsert(e,3)} className='bg-[#EEEEEE] w-[2rem] h-[2rem] px-3  rounded-full' />}
            </div>
            <button className="bg-[#632407] text-white py-2 rounded-sm w-full tracking-wider font-semibold">Verify</button>
            <div className='my-4 flex justify-between'>
                <h3 className='text-xs sm:text-sm'>1 : 23</h3>
                <h2 className="text-xs sm:text-sm text-[#36393F] ">Don't get the code ? <Link  className="text-blue-700">Send again</Link></h2>
            </div>
        </div>
    </div>,
    document.getElementById("modal")
  )
}

export default OtpModal
