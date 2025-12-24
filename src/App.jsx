import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <div className="App">
          <Navbar/>
          <Home />
        </div>
      } />
    </Routes>
  )
}

export default App
