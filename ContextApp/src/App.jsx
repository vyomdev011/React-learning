import { useState } from 'react'
import Login from './components/login'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Profile from './components/profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    <h1>understanding context api </h1>
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
    </>
   
  )
}

export default App
