import React, {useState} from 'react'
import axios from 'axios'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignInForm = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/auth/signin', {
        email,
        password
      })
      if (res.data.token) {
        localStorage.setItem('user', JSON.stringify(res.data))
      }
      window.location = "/"
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='bg-custom-main h-screen p-8'>
      <div className='container flex flex-col rounded-xl max-w-3xl mx-auto p-8 bg-custom-section'>
        <h3 className='text-xl font-bold mb-2'>Connexion</h3>
        <form onSubmit={handleSignInForm} className='flex flex-col'>
          <label className='font-bold my-2' htmlFor='register-email'>
            Adresse e-mail
          </label>
          <input
            className='rounded-xl font-bold p-2'
            type='text'
            name='register-email'
            id='register-email'
            placeholder='j.doe@email.com'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className='font-bold my-2' htmlFor='register-password'>
            Mot de passe
          </label>
          <input
            className='rounded-xl font-bold p-2'
            type='text'
            name='register-password'
            id='register-password'
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
