import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../utils/userContext'

const UserProfile = () => {
  const [user, setUser] = useContext(UserContext)
  const history = useHistory()

  const handleClick = (e) => {
    e.preventDefault()
    history.push('/update-profile')
  }

  return (
    <main className='bg-custom-main h-screen p-8'>
      <div className='container flex flex-col items-center rounded-xl max-w-3xl mx-auto p-8 bg-custom-section'>
        <h2 className='text-xl font-bold mb-2'>Mon profil</h2>
        {user && (
          <>
            <label className='font-bold'>Nom</label>
            <p>{user.lastname}</p>
            <label className='font-bold'>Prénom</label>
            <p>{user.firstname}</p>
            <label className='font-bold'>Email</label>
            <p>{user.email}</p>
            <button onClick={handleClick} className='bg-custom-button rounded-xl font-bold mt-4 p-2' type='button'>
              Modifier mon profil
            </button>
          </>
        )}
      </div>
    </main>
  )
}

export default UserProfile
