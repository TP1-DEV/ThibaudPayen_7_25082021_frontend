import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/icon-left-font-monochrome-white.svg'
import Nav from './Nav'

const Header = () => {
  return (
    <div className=' bg-custom-header'>
      <div className='container flex justify-between h-16 max-w-4xl mx-auto'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='logo' className='h-full p-4' />
          </Link>
        </div>
        <Nav />
      </div>
    </div>
  )
}

export default Header
