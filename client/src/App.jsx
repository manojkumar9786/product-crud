import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

function App() {
  return (
    <div className='flex'>
        <div>
           <Sidebar />
        </div>
        <div className='w-full'>
          <Home />
        </div>
    </div>
  )
}

export default App
