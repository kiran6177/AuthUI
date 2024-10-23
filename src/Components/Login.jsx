import React from "react";
import { Link } from "react-router-dom";
import RightFace from "./RightFace";
function Login() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:h-screen justify-between w-screen">
      <div className="w-[100%] md:w-[50%] lg:w-[40%] flex flex-col items-center justify-between  ">
        <div className="flex flex-col gap-5 w-[80%] sm:w-[55%] overflow-hidden mt-[2rem] md:my-auto">
            <div className="w-[5rem] p-[0.25rem] bg-[#EEEEEE] rounded-md">
                <img src={'/assets/515676b7c807ece1ab42ac89174a8fdc.png'} alt="" className="w-full" />
            </div>
            <div className="flex flex-col gap-2 w-[75%]">
                <h2 className="text-3xl font-medium">Welcome Back!</h2>
                <p>Log in with your email Id or phone number to enter.</p>
            </div>
            <form action="" className="flex flex-col gap-4">
                <input type="text" placeholder="Email or Phone Number" className="bg-[#EEEEEE] text-xs p-3 rounded-sm"  />
                <input type="password" placeholder="Password" className="bg-[#EEEEEE] text-xs p-3 rounded-sm"  />
                <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                        <input type="checkbox" id="logged" />
                        <label htmlFor="logged" className="text-xs text-[#36393F]">Keep me logged in</label>
                    </div>
                    <Link  className="text-xs text-blue-700">Forgot your password ?</Link >
                </div>
                <button className="bg-[#632407] text-white py-2 rounded-sm">Login</button>
            </form>
            <h2 className="text-xs text-[#36393F] ">Need an account ? <Link to={"/register"} className="text-blue-700">Register</Link></h2>
        </div>
        <div className="flex items-center text-xs md:text-base gap-4 my-[1.5rem]"><h6>Terms and Conditions</h6><div className="bg-black w-[5px] h-[5px] rounded-full"></div><h6>Privacy Policy</h6></div>
      </div>
      <RightFace/>
    </div>
  );
}

export default Login;
