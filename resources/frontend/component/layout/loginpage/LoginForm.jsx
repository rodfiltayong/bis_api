import React from 'react'
import './Login.css';
import CLIHeaderLogo from '../../../../../public/Images/CLIheaderLogo.png';
import FbLogo from '../../../../../public/Images/Facebook.svg';
import GoogleLogo from '../../../../../public/Images/googleLogo.svg';
import { Link } from 'react-router-dom';




const LoginForm = ({ handleToggle }) => {
  return (
    <>
     <div className="bg-white pr-8 pl-8 pb-8 pt-5 rounded-xl shadow-custom w-96 sm:w-90">
          <div className='flex justify-end mb-3'>
            <img className='headerLogoSize' src={CLIHeaderLogo} alt="cli header logo" />
          </div>
          <h2 className="text-2xl font-bold mb-1 text-start">Login</h2>
          <h4 className='text-sm font-normal text-start text-gray-500 mb-4'>Don't have an account? <a onClick={handleToggle} className='cursor-pointer text-sm text-blue-400 mt-6 hover:underline'>Register Here!</a></h4>
          <label className="input input-sm  input-bordered flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-sm input-bordered flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd" />
            </svg>
            <input type="password" className="grow" placeholder='password' />
          </label>
          <button 
          className="font-bold flex justify-center items-center w-full text-sm border rounded-lg bg-primary hover:bg-secondary text-white py-2 mb-1">
            Login
          </button>
          <p className='text-sm2 text-gray-400 mb-1 flex justify-center'>- or continue with -</p>
          <button className="relative flex justify-center items-center w-full text-sm border rounded-lg border-green-600 hover:bg-primary hover:border-green-600 text-green-600 hover:text-white py-2 mb-2">
            <img src={GoogleLogo} className="h-5 w-5 mr-6" /><span className='relative right-3'>Login with Google</span>
          </button>
          <button className="relative flex justify-center items-center w-full text-sm border rounded-lg border-green-600 hover:bg-primary hover:border-green-600 text-green-600 hover:text-white py-2 mb-3">
            <img src={FbLogo} className="text-blue-600 w-5 h-5 mr-3" /><span className='relative'>Login with Facebook</span>
          </button>
        </div>
    </>
  )
}

export default LoginForm