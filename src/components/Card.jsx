import React from 'react'
import axios from 'axios'
import {FaComments, FaHeart, FaTrash} from 'react-icons/fa'

const Card = (props) => {
  const {posts, data, setData} = props

  const handleRemovePost = (e) => {
    e.preventDefault()
    try {
      axios.delete(`http://localhost:3000/posts/${posts.id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
      setData(data.filter(post => {
        return post.id !== posts.id
      }))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <article className='container flex flex-col'>
      <h3 className='font-bold my-2'>{posts.title}</h3>
      <p className='my-2'>{posts.content}</p>
      <img src={posts.file} alt='postimage' className='h-60 object-cover' />
      <div className='flex justify-between mx-12 mt-2'>
        <button><FaComments size={20} /></button>
        <button><FaHeart size={20}/></button>
        <button onClick={handleRemovePost}><FaTrash size={20}/></button>
      </div>
    </article>
  )
}

export default Card
