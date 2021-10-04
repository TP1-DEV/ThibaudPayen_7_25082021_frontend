import React, {useState, useEffect} from 'react'
import CommentList from './CommentList'
import axios from 'axios'

const Comment = (props) => {
  const {isOpen, postId} = props
  const [commentsData, setCommentsData] = useState([])
  const [newComment, setNewComment] = useState('')

  useEffect(() => {
    (async () => {
      try {
        const getToken = localStorage.getItem('user')
        const token = JSON.parse(getToken).token
        const res = await axios.get(`http://127.0.0.1:3000/${postId}/comments`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (res.status === 200) {
         setCommentsData(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const handleNewComment = async (e) => {
    e.preventDefault()
    try {
      const getToken = localStorage.getItem('user')
      const token = JSON.parse(getToken).token
      const res = await axios.post(
        `http://localhost:3000/${postId}/comments`,
        {
          comment: newComment
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      if (res.status === 200) {
        setNewComment(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={isOpen ? 'flex flex-col my-4 p-4 rounded-xl bg-custom-header' : 'hidden'}>
      <form onSubmit={handleNewComment} className='text-center'>
        <label htmlFor='newComment'>
          <textarea
            className='rounded-xl p-4 w-full h-40'
            type='text'
            name='newComment'
            id='newComment'
            placeholder='Mon message'
            onChange={(e) => setNewComment(e.target.value)}
            value={newComment}
          />
        </label>
        <button className='bg-custom-button rounded-xl font-bold mt-4 p-2' type='submit'>
          Ajouter commentaire
        </button>
      </form>
      {commentsData &&
        commentsData
          .sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate))
          .map((comments) => (
            <CommentList
              key={comments.id}
              comments={commentsData.filter((comments) => comments.post.id === postId)}
              commentsData={commentsData}
              setCommentsData={setCommentsData}
            />
          ))}
    </div>
  )
}

export default Comment
