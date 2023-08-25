import { useState } from 'react'
// import './App.css'
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
import Reception from './pages/Reception'
function App() {

  return (
      <div>
        <div>logo</div>
        <div className='flex justify-between hover:text-'>
          <div>welcome to healthsync</div>
          <div>
            <img src="https://healthcarentsickcare.com/cdn/shop/articles/what-is-healthcare-707998.png?v=1677580538">
            </img>
          </div>
        </div>
      </div>

  )
        
}

export default App
