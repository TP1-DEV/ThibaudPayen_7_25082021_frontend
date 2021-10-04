import React, {useContext, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {UserContext} from '../../utils/userContext'
import axios from 'axios'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext)
  const history = useHistory()

  const handleSignInForm = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/auth/signin', {
        email,
        password
      })
      if (res.data) {
        setUser(res.data.user)
        localStorage.setItem('user', JSON.stringify(res.data))
      }
      history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='bg-custom-main h-screen p-8'>
      <div className='container flex flex-col rounded-xl max-w-3xl mx-auto p-8 bg-custom-section'>
        <h2 className='text-xl font-bold mb-2'>Connexion</h2>
        <form onSubmit={handleSignInForm} className='flex flex-col'>
          <label className='font-bold my-2' htmlFor='signin-email'>
            Adresse e-mail
          </label>
          <input
            className='rounded-xl p-2'
            type='text'
            name='signin-email'
            id='signin-email'
            placeholder='j.doe@email.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className='font-bold my-2' htmlFor='signin-password'>
            Mot de passe
          </label>
          <input
            className='rounded-xl p-2'
            type='password'
            name='signin-password'
            id='signin-password'
            placeholder='********'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className='bg-custom-button rounded-xl font-bold mt-4 p-2' type='submit'>
            Se connecter
          </button>
        </form>
      </div>
    </main>
  )
}

export default SignInForm
