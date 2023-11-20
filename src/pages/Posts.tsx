import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getAllPosts } from '../store/app.slice';
import { Postcard, CreatePost } from '../components';


const Posts = () => {

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { loggedIn, user } = useSelector((state: any) => state.auth);
  const { posts, createSuccess } = useSelector((state: any) => state.app);

  useEffect(() => {
    if(createSuccess) setIsOpen(false);
    dispatch(getAllPosts())
  }, [createSuccess])

  return (
    <div className='flex flex-col w-full h-full items-center justify-center py-10'>

      <div onClick={() => setIsOpen(true)} className='flex w-[100px] h-[50px] top-10 hover:underline absolute left-[90%] cursor-pointer'>
        <span className='flex h-[20px] w-full text-white'>Create Post</span>
      </div>
      
      <h1 className='flex w-full justify-center items-center h-[50px] mt-4 text-white'>Welcome {user.firstname}</h1>
      <div className='w-full h-full flex justify-center flex-wrap gap-7'>
          {posts?.length > 0 && posts.map((post: any) => (
              <Postcard post={post} />
          ))}
      </div>
      {isOpen && 
        <CreatePost 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
        />}
    </div>
  )
}

export default Posts;