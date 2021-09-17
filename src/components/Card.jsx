import React from 'react'

const Card = (props) => {
  const {posts} = props

  return (
    <article className='container flex flex-col'>
      <h3 className='font-bold my-2'>{posts.title}</h3>
      <img src={posts.image} alt='postimage' className='h-60 object-cover' />
      <p className='my-2'>{posts.content}</p>
    </article>
  )
}

export default Card
