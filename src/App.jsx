import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import "./App.css";
import Students from "./pages/Students";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import StudentProfile from "./pages/StudentProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/students" element={<Students />} />
          <Route path="/students/:id" element={<StudentProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
