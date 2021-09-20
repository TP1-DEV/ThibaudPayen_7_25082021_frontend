import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  const token = sessionStorage.getItem('token')

  const signOut = () => {
    sessionStorage.clear()
    window.location = '/'
  }

  return (
    <>
      {token ? (
        <div className='flex items-center font-bold text-white text-lg'>
          <div>
            <Link to='newpost' className='p-4 text-custom '>
              Nouvelle publication
            </Link>
            <Link to='profil' className='p-4 text-custom '>
              Profil
            </Link>
            <button onClick={signOut} className='p-4 text-custom font-bold'>
              Se deconnecter
            </button>
          </div>
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
