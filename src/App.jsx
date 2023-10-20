import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Register from './pages/Register'
import { GoogleOAuthProvider  } from '@react-oauth/google'

const App = () => {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID}>
    <Routes>
      <Route path='*' element={<Home />}/>
      <Route path='/detailMovie/:id' element={<Detail />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
    </GoogleOAuthProvider>
  )
}

export default App