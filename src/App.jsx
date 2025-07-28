import './App.css'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home.tsx'


function App() {

  // Deals with all the routing for navigation in the app

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
