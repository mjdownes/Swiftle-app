import './App.css'
import { Route, Routes } from 'react-router-dom'

import Auth from './pages/Auth.tsx'
import Home from './pages/Home.tsx'
import Profile from './pages/Profile.tsx'
import ForgotPassword from './pages/ForgotPassword.tsx'


function App() {

  // Deals with all the routing for navigation in the app

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />


    </Routes>
  )
}

export default App
