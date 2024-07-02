import React from 'react'
import { Link } from "react-router-dom"

const NavbarMain = () => {
  return (
    <div className='flex justify-between items-center h-24 w-screen mx-auto px-4 bg-white'>
        <h1 className='w-80 text-3xl font-bold text-primary'>Cebu Landmasters</h1>
        <ul className='flex justify-center items-center'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About us</li>
            <li className='p-4'><Link to="/login">Login</Link></li>
        </ul>
    </div>
  )
}

export default NavbarMain