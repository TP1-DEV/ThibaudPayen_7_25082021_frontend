import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { UserContext } from '../utils/userContext'

const Nav = () => {
  const [user, setUser] = useContext(UserContext)

  const history = useHistory()

  const signOut = () => {
    localStorage.clear()
    setUser(null)
    history.push('/')
  }

  return (
    <>
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
    </>
  )
}

export default Nav
