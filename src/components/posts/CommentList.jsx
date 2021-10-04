import React from 'react'
import {FaTrash} from 'react-icons/fa'
import axios from 'axios'

const CommentList = (props) => {
    const {comments, commentsData, setCommentsData} = props

    console.log(commentsData)

    const handleRemoveComment = async (e) => {
        e.preventDefault()
        try {
          const getToken = localStorage.getItem('user')
          const token = JSON.parse(getToken).token
          const res = await axios.delete(`http://localhost:3000/${comments.postId}/comment/${comments.id}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          if (res.status === 200) {
            setCommentsData(
              commentsData.filter((comment) => {
                return comment.id !== comments.id
              })
            )
          }
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <article className='flex flex-col my-4 p-4 rounded-xl bg-white'>
            <p>{comments.comment}</p>
            <div className='flex'>
            <div className='flex-1'>Commentaire ajouté le {new Date(comments.updatedDate).toLocaleDateString("fr-FR")}</div>
            <button onClick={handleRemoveComment} className='self-center'><FaTrash /></button>
            </div>
        </article>
    )
}

export default CommentList