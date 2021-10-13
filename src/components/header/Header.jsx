import logo from '../../assets/images/icon-left-font-monochrome-white.svg'
import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {UserContext} from '../../utils/userContext'

const Header = () => {
  const [user, setUser] = useContext(UserContext)
  const history = useHistory()

  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
    history.push('/')
  }

  return (
    <div className=' bg-custom-header'>
      <div className='container flex justify-between h-16 max-w-4xl mx-auto'>
        <h1 className='logo'>
          <Link to='/'>
            <img src={logo} alt='groupomania-logo' className='h-full p-4' />
          </Link>
        </h1>
        {user ? (
          <div className='flex items-center font-bold text-white text-lg'>
            <div>
              <Link to='newpost' className='p-4 text-custom '>
                Nouvelle publication
              </Link>
              <Link to='profile' className='p-4 text-custom '>
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
      </div>
    </div>
  )
}

export default Header
