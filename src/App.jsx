import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/dashboard/:id' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
