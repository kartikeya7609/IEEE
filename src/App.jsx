import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScoreBoard from './components/ScoreBoard.jsx'
import Footer from './components/Footer.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
  <ScoreBoard />    
  <Footer />
    </>
  )
}

export default App
