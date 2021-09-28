import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const SignUpForm = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const handleSignUpForm = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/users/signup', {
        firstname,
        lastname,
        email,
        password
      })
      if (res.status === 201) {
        history.push('/signin')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='bg-custom-main h-screen p-8'>
      <div className='container flex flex-col rounded-xl max-w-3xl mx-auto p-8 bg-custom-section'>
        <h2 className='text-xl font-bold mb-2'>Inscription</h2>
        <form onSubmit={handleSignUpForm} className='flex flex-col'>
          <label className='font-bold my-2' htmlFor='signup-lastname'>
            Nom
          </label>
          <input
            className='rounded-xl p-2'
            type='text'
            name='signup-lastname'
            id='signup-lastname'
            placeholder='DOE'
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          />
          <label className='font-bold my-2' htmlFor='signup-firstname'>
            Prénom
          </label>
          <input
            className='rounded-xl p-2'
            type='text'
            name='signup-firstname'
            id='signup-firstname'
            placeholder='John'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
          <label className='font-bold my-2' htmlFor='signup-email'>
            Adresse e-mail
          </label>
          <input
            className='rounded-xl p-2'
            type='text'
            name='signup-email'
            id='signup-email'
            placeholder='j.doe@email.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className='font-bold my-2' htmlFor='signup-password'>
            Mot de passe
          </label>
          <input
            className='rounded-xl p-2'
            type='password'
            name='signup-password'
            id='signup-password'
            placeholder='********'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className='bg-custom-button rounded-xl font-bold mt-4 p-2' type='submit'>
            S'inscrire
          </button>
        </form>
      </div>
    </main>
  )
}

export default SignUpForm
