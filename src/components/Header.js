import React from 'react'
import logo from '../assets/images/icon-left-font-monochrome-white.svg'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <div className=' bg-custom-header'>
      <div className='flex justify-between h-16 max-w-4xl mx-auto'>
        <div className='logo'>
          <a href='/'>
            <img src={logo} alt='logo' className='h-full p-4' />
          </a>
        </div>
        <div className='flex items-center font-bold text-white text-lg'>
          <div>
            <NavLink exact to='signup' className='signup p-2 text-custom'>
              Signup
            </NavLink>
          </div>
          <div>
            <NavLink exact to='login' className='login p-2 text-custom'>
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
