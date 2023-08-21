import { Box } from '@mui/material'
import './App.css'
import Profile from './profile'
import Repositories from './repositories'

function App() {
  return (
    <Box border='1px solid #c6c6c6' padding='24px' borderRadius='10px' >
      <Profile />
      <Repositories />
    </Box>
  )
}

export default App
