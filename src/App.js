import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Work from './components/Work'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden bg-slate-400'>
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/header" element={<Header />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <div className='h-[4000px]'></div> 
    </div>
  );
};

export default App