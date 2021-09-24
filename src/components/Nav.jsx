import React, {useEffect, useContext} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { UserContext } from '../utils/userContext'

const Nav = () => {
  const {userCtx} = useContext(UserContext)
  const [user, setUser] = userCtx

  const history = useHistory()

  useEffect(() => {
    if (user) {
      return user
    } else if (localStorage.getItem('user')) {
      const isUser = localStorage.getItem('user')
      const getUser = JSON.parse(isUser)
      setUser(getUser.user)
    } else {
      setUser(null)
    }
  })

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
