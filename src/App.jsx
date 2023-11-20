import { Routes, Route } from 'react-router-dom'

import { Login, Signup, Posts } from './pages'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </>
  )
}

export default App
