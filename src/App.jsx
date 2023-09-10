import './App.css'

import { Route, Routes } from 'react-router-dom'

import Aboutus from './pages/Aboutus'
import Home from './pages/Home'
import Notfound from './pages/Notfound'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<Aboutus />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  )
}

export default App
