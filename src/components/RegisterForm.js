import React, {useState} from 'react'
import axios from 'axios'

const RegisterForm = () => {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegisterForm = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/users/signup', {
        firstname,
        lastname,
        email,
        password
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='bg-custom-main h-screen p-8'>
      <div className='container flex flex-col rounded-xl max-w-4xl mx-auto p-8 bg-custom-section'>
        <h3 className='text-xl font-bold mb-2'>Inscription</h3>
        <form onSubmit={handleRegisterForm} className='flex flex-col'>
          <label className='font-bold my-2' htmlFor='register-lastname'>
            Nom
          </label>
          <input
            className='rounded-xl font-bold p-2'
            type='text'
            name='register-lastname'
            id='register-lastname'
            placeholder='DOE'
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
          />
          <label className='font-bold my-2' htmlFor='register-firstname'>
            Prénom
          </label>
          <input
            className='rounded-xl font-bold p-2'
            type='text'
            name='register-firstname'
            id='register-firstname'
            placeholder='John'
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
          />
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
            S'inscrire
          </button>
        </form>
      </div>
    </main>
  )
}

export default RegisterForm
