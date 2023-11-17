import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getAllPosts } from '../store/app.slice';


const Home = () => {

  const dispatch = useDispatch();
  const { loggedIn, user } = useSelector((state: any) => state.auth);
  const { posts } = useSelector((state: any) => state.app);

  useEffect(() => {
    dispatch(getAllPosts())
  }, [])

  return (
    <div>Welcome {user.firstname} you are {loggedIn ? 'Logged in' : 'Unauthenticated'}</div>
  )
}

export default Home