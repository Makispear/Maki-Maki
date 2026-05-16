import type { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar/Navbar";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
