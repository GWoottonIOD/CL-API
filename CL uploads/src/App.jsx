import { useState } from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import AppAppBar from './components/AppAppBar'
import AppTheme from './shared-theme/AppTheme'
import { CssBaseline } from '@mui/material'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppTheme {...props}>
        <CssBaseline enableColorScheme />
        <AppAppBar />
        <AppRoutes />
      </AppTheme>
    </>
  )
}

export default App
