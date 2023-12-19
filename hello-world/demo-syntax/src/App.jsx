import { useState } from 'react'
import './App.css'

import StateDemo from './components/test/syntax/StateDemo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <StateDemo />
    </>
  )
}

export default App
