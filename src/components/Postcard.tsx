import React from 'react'

const Postcard = ({ post }) => {
  return (
    <div className='mt-5 cursor-pointer bg-slate-800 rounded-2xl sm:w-[360px] w-full h-[360px]' key={post?.id}>
        <h3 className='flex justify-evenly text-white font-bold w-full h-[50px] p-10'>{post?.title?.length > 20 ? post.title.substring(0, 20) + '...' : post.title}</h3>
        <p className='flex w-full h-[280px] mt-2 text-secondary text-[14px] px-8'>{post?.content?.length > 300 ? post.content.substring(0, 300-3) + '... See More' : post.content}</p>
    </div>
  )
}

export default Postcard;