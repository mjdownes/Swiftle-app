import './App.css'
import { Route, Routes } from 'react-router-dom'

import Auth from './pages/Auth.tsx'
import Home from './pages/Home.tsx'
import Profile from './pages/Profile.tsx'
import ForgotPassword from './pages/ForgotPassword.tsx'
import ChangePassword from './pages/ChangePassword.tsx'
import ResetPassword from './pages/ResetPassword.tsx'
import GameBoard from './pages/GameBoard.tsx'


function App() {

  // Deals with all the routing for navigation in the app

  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/gameBoard" element={<GameBoard />} />


    </Routes>
  )
}

export default App
