import React from 'react'
import {useLocation} from 'react-router-dom'
import Card from './Card'

const UserPosts = () => {
  const location = useLocation()
  const {user} = location.state

  return (
    <main className='bg-custom-main h-full p-8'>
      <div className='container flex flex-col rounded-xl max-w-3xl mx-auto py-8 px-12 bg-custom-section'>
        <h2 className='text-xl font-bold mb-2'>Publications de {user.firstname}</h2>
        {user.posts &&
          user.posts
            .sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate))
            .map((posts) => <Card key={posts.id} posts={posts} />)}
      </div>
    </main>
  )
}

export default UserPosts
