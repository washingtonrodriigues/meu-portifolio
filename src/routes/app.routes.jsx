import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import Projects from '../Components/Projects';
import Experience from '../Components/Experience';
import About from '../Components/About';

export default function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}
