import React from 'react'
import Header from '../components/Header'

const Login = () => {
  return (
    <div className='bg-custom-main h-screen'>
      <Header />
      <main className='max-w-4xl mx-auto'>
        <div className='bg-custom-section flex flex-col rounded-xl m-8 p-8'>
          <h3 className='text-xl font-bold mb-2'>Connexion</h3>
          <form className='flex flex-col' method='POST'>
            <label className="font-bold my-2" htmlFor='login-email'>Adresse e-mail</label>
            <input className="rounded-xl font-bold py-2" type='text' name='login-email' id='login-email' />
            <label className="font-bold my-2" htmlFor='login-password'>Mot de passe</label>
            <input className="rounded-xl font-bold py-2" type='text' name='login-password' id='login-password' />
            <button className="bg-custom-button rounded-xl font-bold mt-4 p-2" type='submit'>Se connecter</button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default Login
