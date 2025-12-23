import { useState } from 'react'
import './App.css'

import Menu from './Components/Menu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Menu/>
      </div>
      
    </>
  )
}

export default App
