import React, {useState, useContext, useEffect} from 'react'
import {UserContext} from '../../utils/userContext'
import {useHistory} from 'react-router'
import {FaComments, FaHeart, FaTrash} from 'react-icons/fa'
import axios from 'axios'
import Comment from './Comment'

const Card = (props) => {
  const {posts, data, setData} = props
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UserContext)
  const [isOpen, setIsOpen] = useState(false)
  const [commentsData, setCommentsData] = useState([])
  const [likesCount, setLikesCount] = useState(0)
  const [commentsCount, setCommentsCount] = useState(0)
  const [color, setColor] = useState('black')

  const history = useHistory()

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:3000/posts/${posts.id}/likes`)

        if (res.status === 200) {
          setLikesCount(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likesCount])

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`http://localhost:3000/${posts.id}/comments`)
        if (res.status === 200) {
          setCommentsCount(res.data.length)
        }
      } catch (error) {
        console.log(error)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentsCount])

  const handleUserPosts = async (e) => {
    e.preventDefault()
    try {
      const getToken = localStorage.getItem('user')
      const token = JSON.parse(getToken).token
      const res = await axios.get(`http://localhost:3000/users/${user.id}/posts`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (res.status === 200) {
        history.push({pathname: '/user/posts', state: {user: res.data}})
      }
    } catch (error) {
      console.log(error)
    }
  }

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
      const res = await axios.get(`http://localhost:3000/${posts.id}/comments`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (res.status === 200) {
        setCommentsData(res.data)
        setIsOpen(!isOpen)
      }
    } catch (error) {
      window.alert('Veuillez vous connecter pour voir les commentaires')
    }
  }

  const handleLikePost = async (e) => {
    e.preventDefault()
    try {
      const getToken = localStorage.getItem('user')
      const token = JSON.parse(getToken).token
      const res = await axios.post(`http://localhost:3000/posts/${posts.id}/likes`, null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (res.status === 201) {
        setLikesCount(likesCount + 1)
        if (color === 'black') {
          setColor('red')
        } else {
          setColor('black')
        }
      }
    } catch (error) {
      window.alert('Veuillez vous connecter pour like')
    }
  }

  return (
    <article className='container flex flex-col rounded-xl my-4'>
      <div className='flex'>
        <h3 className='font-bold flex-1'>{posts.title}</h3>
        {posts.user ? (
          <button onClick={handleUserPosts} className='text-sm'>
            <span className='font-bold '>{posts.user.firstname}</span> le{' '}
            {new Date(posts.updatedDate).toLocaleDateString('fr-FR')}
          </button>
        ) : null}
      </div>

      <p className='my-2 break-all'>{posts.content}</p>
      {posts.file && <img src={posts.file} alt='postfile' className='h-64 object-cover rounded-xl' />}
      <div className='flex justify-between mx-20 mt-2'>
        <button onClick={handleComment} className='flex'>
          <FaComments size='20' className='self-center mr-2' />
          <span>{commentsCount}</span>
        </button>
        <button onClick={handleLikePost} className='flex'>
          <FaHeart size='20' color={color} className='self-center mr-2' />
          <span>{likesCount}</span>
        </button>
        {user && (user.id === posts.user.id || user.isAdmin === true) ? (
          <button onClick={handleRemovePost}>
            <FaTrash size='20' />
          </button>
        ) : null}
      </div>
      {user ? (
        <Comment
          isOpen={isOpen}
          postId={posts.id}
          commentsData={commentsData}
          setCommentsData={setCommentsData}
          commentsCount={commentsCount}
          setCommentsCount={setCommentsCount}
        />
      ) : null}
    </article>
  )
}

export default Card
