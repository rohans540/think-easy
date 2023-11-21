import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllPosts, getPostByUserId } from '../store/app.slice';
import { logout } from '../store/auth.slice';
import { Postcard, CreatePost, Custombutton, Loader } from '../components';
import { LOGIN_ROUTE, POSTS_DETAILS } from '../constants';
import CustomInput from '../components/CustomInput';


const Posts = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [user,setUser] = useState({} as any);
  const [search, setSearch] = useState('' as any);
  const { posts, createSuccess, loading } = useSelector((state: any) => state.app);
  const { authSuccess } = useSelector((state: any) => state.auth);

  useState(() => {
    const userData = localStorage.getItem('user');
    if(userData)
      setUser(JSON.parse(userData));
  }, []);

  useEffect(() => {
    if(!authSuccess)
      navigate(LOGIN_ROUTE)
  }, [authSuccess])

  useEffect(() => {
    if(search === '')
      dispatch(getAllPosts())
  }, [search])

  useEffect(() => {
    if(createSuccess) setIsOpen(false);
    dispatch(getAllPosts())
  }, [createSuccess])

  const handleChangeSearch = (e: any) => {
    const { value } = e?.target;
    setSearch(value);
  }

  const handleSearchSubmit = () => {
    dispatch(getPostByUserId(search))
  }

  return (
    <div className='flex flex-col w-full h-full items-center justify-center py-10'>
      <div className='flex justify-center items-center w-[100px] h-[30px] absolute left-[80%] top-0 text-white hover:underline cursor-pointer' onClick={() => dispatch(logout())}>
        Logout
      </div>
      <div className='flex justify-between gap-40 items-center w-full h-[50px] top-10'>
        <h1 className='flex justify-center items-center w-[120px] h-[30px] text-white'>Welcome {user.firstname}</h1>
        <span onClick={() => setIsOpen(true)} className='flex justify-center items-center w-[100px] h-[30px] text-white hover:underline cursor-pointer'>Create Post</span>
      </div>
      
      <div className='flex h-[70px] justify-center gap-2 items-center'>
          <CustomInput 
            value={search}
            handleChange={handleChangeSearch}
            inputType="text"
            name="search"
            placeHolder="Search by ID"
            style={{ width: '500px', height: '50px' }}
          />

          <Custombutton 
            btnType="submit"
            title="Search"
            handleClick={handleSearchSubmit}
            styles="bg-[#874ce8] hover:text-[#874ce8] hover:bg-white transition-all duration-500 ease-in-out w-[100px] h-[50px] font-epilogue"
            disabled={!search}
          />
      </div>
      
      <div className='w-full h-full flex justify-center flex-wrap gap-7'>
          {posts?.length > 0 && posts.map((post: any) => (
              <Postcard post={post} onClick={() => navigate(POSTS_DETAILS(post.id))} />
          ))}
      </div>
      {isOpen && 
        <CreatePost 
          isOpen={isOpen} 
          setIsOpen={setIsOpen} 
        />}
      <Loader isOpen={loading} />
    </div>
  )
}

export default Posts;