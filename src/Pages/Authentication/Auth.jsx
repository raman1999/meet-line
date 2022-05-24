import { useState } from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import "./auth.css";

const Authentication = () => {
  const [toggleLogin,setToggleLogin]=useState(true);
  return (
    <div className="h-screen flex md:flex-col ">
      <div className="flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center md:w-full md:h-80">
        <div className="md: p-10">
          <h1 className="text-white font-bold text-4xl font-sans">MeetLine</h1>
          <p className="text-white mt-1">
            Connect with people around the globe and share your thoughts.
          </p>
        </div>
      </div>
      <div className="flex w-1/2 justify-center items-center bg-white md:w-full">
        <div className="bg-white w-80 max-w-sm md:max-w-full md:p-10 md:w-full">
        <h1 className="text-gray-600 font-bold text-2xl mb-1">
            Welcome to MeetLine !
          </h1>
          <div className="flex gap-2 m-6">
            <span className={`auth-heading  ${toggleLogin&&"active"}`}  onClick={()=>setToggleLogin(true)}>Login</span>
            <span className={`auth-heading ${!toggleLogin&&"active"}`} onClick={()=>setToggleLogin(false)}>Signup</span>
          </div>
          {toggleLogin?<Login/>:<Signup/>}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
