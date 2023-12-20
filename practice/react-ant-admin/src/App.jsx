import { useState } from 'react'
import './App.css'

import Configuration from '@/demo/config/context'

function App() {

  return (
    <>
        <div>
            <h1>{MENU_PATH}</h1>
            <h1>{Configuration.mode}</h1>
        </div>
    </>
  )
}

export default App
