import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home.tsx'
import Profile from './pages/Profile.tsx'


function App() {

  // Deals with all the routing for navigation in the app

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  )
}

export default App
