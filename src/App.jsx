import { Routes, Route } from 'react-router-dom'

import { Login, Signup, Posts, PostDetails } from './pages'
import { LOGIN_ROUTE, SIGNUP_ROUTE, POSTS_ROUTE, POSTS_DETAILS } from './constants'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={SIGNUP_ROUTE} element={<Signup />} />
        <Route path={POSTS_ROUTE} element={<Posts />} />
        <Route path={POSTS_DETAILS(':id')} element={<PostDetails />} />
      </Routes>
    </>
  )
}

export default App
