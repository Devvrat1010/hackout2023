import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Reception from "./pages/Reception";
function App() {
  return (
    <>
<<<<<<< HEAD
        <Router>
            <Routes>
                <Route path="/" element={<Reception />} />
                {/* <Route path="/about" element={<About />} /> */}
            </Routes>
        </Router>

=======
      <Router>
        <Routes>
          <Route path="/" element={<Reception />} />
          
        </Routes>
      </Router>
>>>>>>> b38d1d4aae39f1f23f1c467bf6cfdbafaaa41bc7
    </>
  );
}

export default App;
