import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UploadFile from './components/UploadFile'
import MarketingPage from './components/MarketingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MarketingPage/>
    </>
  )
}

export default App
