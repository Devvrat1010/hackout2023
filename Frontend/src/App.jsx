import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reception from "./pages/Reception";
import Nurse from "./pages/Nurse";
import Doctor from "./pages/Doctor";
import ReceptionCounter from "./pages/ReceptionCounter";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";
import GetStarted from "./pages/GetStarted";
// import ReceptionLogin from "./pages/receptionLogin"

function App() {
  return (
    <div className="m-auto">
      <Routes>
        <Route path="/" element={<Reception />} />
        <Route path="/registration" element={<ReceptionCounter />} />
        <Route path="/nurse" element={<Nurse />} />
        <Route path="/doctors" element={<Doctor />} />
        <Route path="/getStarted" element={<GetStarted />} />
      </Routes>
    </div>
  );
}

export default App;
