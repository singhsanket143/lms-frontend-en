import './App.css'

import { Route, Routes } from 'react-router-dom'

import Aboutus from './pages/Aboutus'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Aboutus />} />
    </Routes>
  )
}

export default App
