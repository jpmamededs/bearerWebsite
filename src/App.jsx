import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import DashboardPage from './pages/DashboardPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={
        <div className="App">
          <Navbar/>
          <Home/>
        </div>
      } />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  )
}

export default App
