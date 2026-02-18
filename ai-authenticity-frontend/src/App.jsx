import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TextVerifier from "./pages/TextVerifier";
import DocumentCheck from "./pages/DocumentCheck";
import About from "./pages/About";
import { Toaster } from "react-hot-toast";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<TextVerifier />} />
        <Route path="/document" element={<DocumentCheck />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-slate-100 pt-20">
        <Navbar />
        <Toaster position="top-right" />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
