import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const Post = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://127.0.0.1:3000/posts')
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <main className='bg-custom-main h-full p-8'>
      <div className='container flex flex-col rounded-xl max-w-3xl mx-auto p-8 bg-custom-section'>
        <h2 className='text-xl font-bold mb-2'>Publications</h2>
        {data.map((posts) => (
          <Card key={posts.id} posts={posts} />
        ))}
      </div>
    </main>
  )
}

export default Post
