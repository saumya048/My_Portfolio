import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Somu</div>
        <div className='space-x-6'>
          <Link to="/home" className='hover:text-gray-400'>Home</Link>
          <Link to="/about" className='hover:text-gray-400'>About Me</Link>
          <Link to="/service" className='hover:text-gray-400'>Services</Link>
          <Link to="/project" className='hover:text-gray-400'>Projects</Link>
          <Link to="/contact" className='hover:text-gray-400'>Contact</Link>
          {/* Link to Resume Page */}
          <Link to="/resume" className='hover:text-gray-400'>Resume</Link>
        </div>
        <Link to="/connect" className="hidden md:inline">
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white 
         transform transition-transform duration-300 hover:scale-105 px-4 py-2 
        rounded-full shadow-lg hover:shadow-xl">
        Connect Me
        </button>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
