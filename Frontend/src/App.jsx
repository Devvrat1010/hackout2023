import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Routes , Route , Link} from 'react-router-dom'
import Reception from './pages/Reception'
function App() {

  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Reception />} />
                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
        </Router>

    </>
  )
}

export default App
