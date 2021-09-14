import React from 'react'
import logo from '../assets/images/icon-left-font-monochrome-white.svg'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className=' bg-custom-header'>
      <div className='container flex justify-between h-16 max-w-5xl mx-auto'>
        <div className='logo'>
          <a href='/'>
            <img src={logo} alt='logo' className='h-full p-4' />
          </a>
        </div>
        <div className='flex items-center font-bold text-white text-lg'>
          <div>
            <Link to='register' className='signup p-2 text-custom'>
              S'inscrire
            </Link>
          </div>
          <div>
            <Link to='login' className='login p-2 text-custom'>
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
