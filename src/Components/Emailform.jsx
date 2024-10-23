import React from "react";
import { Link } from "react-router-dom";

function Emailform() {
  return (
    <form action="" className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Email"
        className="bg-[#EEEEEE] text-xs p-3 rounded-sm"
      />
      <input
        type="text"
        placeholder="Display Name"
        className="bg-[#EEEEEE] text-xs p-3 rounded-sm"
      />
      <input
        type="password"
        placeholder="New Password"
        className="bg-[#EEEEEE] text-xs p-3 rounded-sm"
      />
      <p className="text-[#6C6C6C] text-xs">
        Password must be 8 or more characters
      </p>
      <div className="flex justify-between">
        <div className="text-xs text-[#6C6C6C]">
          By registering, you agree to Orgface{" "}
          <Link className="text-blue-600 font-medium">Privacy Policy</Link> and{" "}
          <Link className="text-blue-600 font-medium">Terms of service</Link>
        </div>
      </div>
      <button className="bg-[#632407] text-white py-2 rounded-sm">
        Create an account
      </button>
    </form>
  );
}

export default Emailform;
