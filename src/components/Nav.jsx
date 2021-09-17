import React from 'react'
import {Link} from 'react-router-dom'

/* const signOut = localStorage.removeItem("user") */

const Nav = () => {
  const user = JSON.parse(localStorage.getItem('user'))

  return (
    <>
      {user ? (
        <div className=''>
            <button className='bg-custom-section rounded-xl font-bold'>Logout</button>
        </div>
      ) : (
        <div className='flex items-center font-bold text-white text-lg'>
          <div>
            <Link to='signup' className='p-4 text-custom'>
              S'inscrire
            </Link>
          </div>
          <div>
            <Link to='signin' className='p-4 text-custom'>
              Se connecter
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav
