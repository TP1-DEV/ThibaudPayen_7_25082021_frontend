import React, {useState, useContext} from 'react'
import {UserContext} from '../../utils/userContext'
import {FaComments, FaHeart, FaTrash} from 'react-icons/fa'
import axios from 'axios'
import Comment from './Comment'

const Card = (props) => {
  const {posts, data, setData} = props
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)
  const [commentsData, setCommentsData] = useState([])

  const handleRemovePost = async (e) => {
    e.preventDefault()
    try {
      const getToken = localStorage.getItem('user')
      const token = JSON.parse(getToken).token
      const res = await axios.delete(`http://localhost:3000/posts/${posts.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (res.status === 200) {
        setData(
          data.filter((post) => {
            return post.id !== posts.id
          })
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleComment = async (e) => {
    e.preventDefault()
    try {
      const getToken = localStorage.getItem('user')
      const token = JSON.parse(getToken).token
      const res = await axios.get(`http://127.0.0.1:3000/${posts.id}/comments`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (res.status === 200) {
        setCommentsData(res.data)
        setIsOpen(!isOpen)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <article className='container flex flex-col rounded-xl my-4'>
      <h3 className='font-bold my-2'>{posts.title}</h3>
      <p className='my-2 break-all'>{posts.content}</p>
      {posts.file && <img src={posts.file} alt='postfile' className='h-64 object-cover rounded-xl' />}
      <div className='flex justify-between mx-20 mt-2'>
        <button onClick={handleComment}>
          <FaComments size={20} />
        </button>
        <button>
          <FaHeart size={20} />
        </button>
        <button onClick={handleRemovePost}>
          <FaTrash size={20} />
        </button>
      </div>
      {user ? <Comment isOpen={isOpen} postId={posts.id} commentsData={commentsData} setCommentsData={setCommentsData}/> : null}
    </article>
  )
}

export default Card
