import React, {useContext, useState, useEffect} from 'react'
import {useHistory} from 'react-router'
import {UserContext} from '../utils/userContext'
import FormData from 'form-data'
import axios from 'axios'

const CreatePost = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState('')

  const {tokenCtx} = useContext(UserContext)
  const [token, setToken] = tokenCtx

  const history = useHistory()

  const formData = new FormData()
  formData.append('title', title)
  formData.append('content', content)
  formData.append('file', file)

  useEffect(() => {
    if (token) {
      return token
    } else if (localStorage.getItem('user')) {
      const isToken = localStorage.getItem('user')
      const getToken = JSON.parse(isToken)
      setToken(getToken.token)
    } else {
      setToken(null)
    }
  })

  const handleNewPost = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/posts', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (res.status === 201) {
        history.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='bg-custom-main h-screen p-8'>
      <div className='container flex flex-col rounded-xl max-w-3xl mx-auto p-8 bg-custom-section'>
        <h2 className='text-xl font-bold mb-2'>Nouvelle publication</h2>
        <form onSubmit={handleNewPost} className='flex flex-col'>
          <label className='font-bold my-2' htmlFor='post-title'>
            Titre
          </label>
          <input
            className='rounded-xl font-bold p-2'
            type='text'
            name='post-title'
            id='post-title'
            placeholder='Mon titre'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label className='font-bold my-2' htmlFor='post-content'>
            Message
          </label>
          <textarea
            className='rounded-xl p-2'
            type='text'
            name='post-content'
            id='post-content'
            placeholder='Mon message'
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          <input
            className='font-bold mt-4'
            type='file'
            name='post-file'
            id='post-file'
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className='bg-custom-button rounded-xl font-bold mt-4 p-2' type='submit'>
            Ajouter publication
          </button>
        </form>
      </div>
    </main>
  )
}

export default CreatePost
