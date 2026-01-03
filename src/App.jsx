import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import LinksPage from './pages/LinksPage'
import Navbar from './components/Navbar'

function App() {
  // Verifica se está no subdomínio links
  const hostname = window.location.hostname;
  const isLinksSubdomain = hostname.startsWith('links.');

  // Se for o subdomínio links, renderiza apenas a LinksPage
  if (isLinksSubdomain) {
    return <LinksPage />;
  }

  // Caso contrário, renderiza o app principal
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
