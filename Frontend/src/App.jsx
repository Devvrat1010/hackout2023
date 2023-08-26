import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reception from "./pages/Reception";
// import ReceptionLogin from "./pages/receptionLogin"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Reception />} />
<<<<<<< HEAD
          {/* <Route path="/reception" element={<ReceptionLogin />} /> */}
=======
>>>>>>> refs/remotes/origin/main
        </Routes>
      </Router>
    </>
  );
}

export default App;