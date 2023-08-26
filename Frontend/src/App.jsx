import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reception from "./pages/Reception";
import Nurse from "./pages/Nurse";
import Doctor from "./pages/Doctor";
import ReceptionCounter from "./pages/ReceptionCounter";
// import ReceptionLogin from "./pages/receptionLogin"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Reception />} />
        <Route path="/registration" element={<ReceptionCounter />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/doctors" element={<Doctor />} />
      </Routes>
    </>
  );
}

export default App;
