import React, {useState} from 'react'
import CommentList from './CommentList'
import axios from 'axios'

const Comment = (props) => {
  const {isOpen, postId, commentsData, setCommentsData, commentsCount, setCommentsCount} = props
  const [newComment, setNewComment] = useState('')

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
      if (res.status === 201) {
        setCommentsData(commentsData => [...commentsData, res.data])
        setNewComment('')
        setCommentsCount(commentsCount + 1)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={isOpen ? 'flex flex-col my-4 p-4 rounded-xl bg-custom-header' : 'hidden'}>
      <form onSubmit={handleNewComment} className='text-center'>
        <textarea
          className='rounded-xl p-4 w-full h-40'
          type='text'
          name='comment-content'
          id='comment-content'
          placeholder='Mon message'
          onChange={(e) => setNewComment(e.target.value)}
          value={newComment}
        />
        <button className='bg-custom-button rounded-xl font-bold m-4 p-2' type='submit'>
          Ajouter commentaire
        </button>
      </form>
      {commentsData &&
        commentsData
          .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
          .map((comments) => <CommentList key={comments.id} comments={comments} commentsData={commentsData} setCommentsData={setCommentsData} commentsCount={commentsCount} setCommentsCount={setCommentsCount}/>)}
    </div>
  )
}

export default Comment
