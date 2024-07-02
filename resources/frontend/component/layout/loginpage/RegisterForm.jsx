import React from 'react'
import './Login.css';
import CLIHeaderLogo from '../../../../../public/Images/CLIheaderLogo.png';
import FbLogo from '../../../../../public/Images/Facebook.svg';
import GoogleLogo from '../../../../../public/Images/googleLogo.svg';



const RegisterForm = ({ handleToggle }) => {
  return (
    <>
     <div className="bg-white px-6 py-7 md:px-11 md:py-6 rounded-xl shadow-custom w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-108 mx-auto shrink">
          <div className='flex justify-between mb-3'>
            <img className='flex headerLogoSize' src={CLIHeaderLogo} alt="cli header logo" />
            <a className='text-sm self-center text-accent'>Learn More</a>
          </div>
          <h2 className="text-2xl font-bold mb-1 text-start">Register</h2>
          <h4 className='text-sm font-normal text-start text-gray-500 mb-4'>Register your account in seconds</h4>
          <input type="text" placeholder="First Name" className="input input-bordered input-sm w-full  mb-2" />
          <input type="text" placeholder="Last Name" className="input input-bordered input-sm w-full  mb-2" />
          <input type="text" placeholder="Email Address" className="input input-bordered input-sm w-full mb-2" />
          <input type="password" placeholder="Password" className="input input-bordered input-sm w-full  mb-2" />
          <input type="password" placeholder="Confirm Password" className="input input-bordered input-sm w-full mb-7" />
          <button className="font-bold flex justify-center items-center w-full text-sm border rounded-lg bg-primary hover:bg-secondary text-white py-2 mb-1">
            Sign Up
          </button>
          <p className='text-sm2 text-gray-400 mb-1 flex justify-center'>- or continue with -</p>
          <button className="relative flex justify-center items-center w-full text-sm border rounded-lg border-green-600 hover:bg-primary hover:border-green-600 text-green-600 hover:text-white py-2 mb-2">
            <img src={GoogleLogo} className="h-5 w-5 mr-6" /><span className='relative right-3'>Login with Google</span>
          </button>
          <button className="relative flex justify-center items-center w-full text-sm border rounded-lg border-green-600 hover:bg-primary hover:border-green-600 text-green-600 hover:text-white py-2 mb-3">
            <img src={FbLogo} className="text-blue-600 w-5 h-5 mr-3" /><span className='relative'>Login with Facebook</span>
          </button>
          <div className='flex justify-center items-center'>
            <button
              onClick={handleToggle}
              className="flex justify-center items-center bg-blue-600 text-white py-1 px-3 rounded-lg text-sm hover:bg-blue-500 ">
              Back to login
            </button>
          </div>
          
        </div>
    </>
  )
}

export default RegisterForm