import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPostById } from '../store/app.slice';
import { Loader } from '../components';

const PostDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { currentPost, loading } = useSelector((state: any) => state.app);

    useEffect(() => {
        dispatch(getPostById(id));
    }, [])
    
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <h1 className='text-[#dce1e3] text-4xl font-bold pt-5 w-full h-[50px] my-[50px]'>{currentPost.title}</h1>
        <p className='mt-2 text-white text-[18px] p-[100px]'>{currentPost.content}</p>
        <Loader isOpen={loading} />
    </div>
  )
}

export default PostDetails