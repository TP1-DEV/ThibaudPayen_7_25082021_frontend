import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router'
import {UserContext} from '../../utils/userContext'
import axios from 'axios'

const ProfileForm = () => {
  const [user, setUser] = useContext(UserContext)
  const [firstname, setFirstName] = useState()
  const [lastname, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const updateUser = {
        firstname,
        lastname,
        email,
        password
      }
      const getToken = localStorage.getItem('user')
      const token = JSON.parse(getToken).token
      const res = await axios.put(`http://localhost:3000/users/${user.id}`, updateUser, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (res.status === 200) {
        const res = await axios.get(`http://localhost:3000/users/${user.id}`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const {...userInLocalStorage} = JSON.parse(localStorage.getItem('user'))
        userInLocalStorage.user = res.data
        setUser(userInLocalStorage.user)
        localStorage.setItem('user', JSON.stringify(userInLocalStorage))
        history.push('/profile')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='bg-custom-main h-screen p-8'>
      <div className='container flex flex-col items-center rounded-xl max-w-3xl mx-auto p-8 bg-custom-section'>
        <h2 className='text-xl font-bold mb-2'>Mon profil</h2>
        <form onSubmit={handleSubmit} className='flex flex-col items-center'>
          <label className='font-bold my-2' htmlFor='profile-lastname'>
            Nom
          </label>
          <input
            className='rounded-xl font-bold p-2'
            type='text'
            name='profile-lastname'
            id='profile-lastname'
            placeholder={user.lastname}
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          />
          <label className='font-bold my-2' htmlFor='profile-firstname'>
            Prénom
          </label>
          <input
            className='rounded-xl font-bold p-2'
            type='text'
            name='profile-firstname'
            id='profile-firstname'
            placeholder={user.firstname}
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
          <label className='font-bold my-2' htmlFor='profile-email'>
            Adresse e-mail
          </label>
          <input
            className='rounded-xl font-bold p-2'
            type='text'
            name='profile-email'
            id='profile-email'
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className='font-bold my-2' htmlFor='profile-password'>
            Mot de passe
          </label>
          <input
            className='rounded-xl font-bold p-2'
            type='text'
            name='profile-password'
            id='profile-password'
            placeholder='********'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className='bg-custom-button rounded-xl font-bold mt-4 p-2' type='submit'>
            Valider modifications
          </button>
        </form>
      </div>
    </main>
  )
}

export default ProfileForm
