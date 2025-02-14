import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import ConnectWithMe from './components/ConnectWithMe';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main Homepage */}
        <Route path="" element={
          <>
            <Hero />
            <About />
            <Service />
            <Projects />
            <Contact />
            <Footer />
          </>
        } />

        {/* Resume Page */}
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about"  element={<About />}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/connect' element={<ConnectWithMe/>}/>
        <Route path='/home' element={<Home />} />

      </Routes>
    </Router>
  );
};

export default App;
