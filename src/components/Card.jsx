import React, { useState } from 'react'
import axios from 'axios'
import {FaComments, FaHeart, FaTrash} from 'react-icons/fa'
import NewComment from './NewComment'

const Card = (props) => {
  const {posts, data, setData} = props
  const [isOpen, setIsOpen] = useState(false)


  const handleRemovePost = (e) => {
    e.preventDefault()
    try {
      axios.delete(`http://localhost:3000/posts/${posts.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setData(data.filter(post => {
        return post.id !== posts.id
      }))
    } catch (error) {
      console.log(error)
    }
  }

  const handleComment = (e) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <article className='container flex flex-col rounded-xl my-4'>
      <h3 className='font-bold my-2'>{posts.title}</h3>
      <p className='my-2 break-all'>{posts.content}</p>
      {posts.file && <img src={posts.file} alt='postfile' className='h-64 object-cover rounded-xl' />}      
      <div className='flex justify-between mx-20 mt-2'>
        <button onClick={handleComment}><FaComments size={20} /></button>
        <button><FaHeart size={20}/></button>
        <button onClick={handleRemovePost}><FaTrash size={20}/></button>
      </div>
      <NewComment isOpen={isOpen} />
    </article>
  )
}

export default Card
