import React, { useState } from 'react'
import './Login.css';
import CLILogo from '../../../../../public/Images/CLI20-Logo.png';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';


const Login = () => {

  const [isRegister, setIsRegister] = useState(false);

  const handleToggle = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      {/* Large Screen Layout */}
      <div className="hidden lg:flex h-screen w-full relative overflow-hidden">
        <div className={`bg-left-side absolute h-full lg:w-1/2 w-full transition-all duration-1000 ${isRegister ? 'left-1/2' : 'left-0'} z-10 bg-cover bg-center`}></div>
        <div className={`w-1/2 ml-auto flex flex-col items-center justify-center relative p-8 ${isRegister ? 'animate-fadeinright' : 'animate-fadeoutright'}`}>
          <RegisterForm handleToggle={handleToggle} />
        </div>
        <div className={`w-1/2 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 z-2 ${isRegister ? 'animate-fadeoutleft' : 'animate-fadeinleft'}`}>
          <LoginForm handleToggle={handleToggle} />
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="lg:hidden flex h-screen w-full relative overflow-hidden mobilebg">
        <div className="flex w-full items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 animate-fadeout">
          {isRegister ? (
                <RegisterForm handleToggle={handleToggle} />
          ) : (
                <LoginForm handleToggle={handleToggle} />
          )}
          </div>
        </div>
    </>
    
  );



  /* return (
  <div className='flex h-screen'>
    <div className='lg:w-3/5 md:w-full bg-left-side'>
      <div className='flex justify-center lg:justify-start lg:ml-8'>  
        <img className='logoSize' src={CLILogo} alt="cli logo" />
      </div>
      <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 mt-20 lg:hidden">
        <LoginForm/>
      </div>
    </div>
    <div className="hidden lg:flex w-1/2 items-center justify-center bg-gray-50">
      <LoginForm/>
    </div>
  </div>
  ) */

}

export default Login