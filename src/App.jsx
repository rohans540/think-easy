import { Routes, Route } from 'react-router-dom'

import { Login, Signup, Home } from './pages'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
