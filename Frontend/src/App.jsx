import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reception from "./pages/Reception";
import Nurse from "./pages/Nurse";
import Doctor from "./pages/Doctor";
// import ReceptionLogin from "./pages/receptionLogin"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Reception />} />
          <Route path="/nurse" element={<Nurse />} />
          <Route path="/doctors" element={<Doctor />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;