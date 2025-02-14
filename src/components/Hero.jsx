import React from 'react'
import saumya from '../assets/saumya.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={saumya} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Saumya Srivastava</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web & app applications.
        </p>
        <div className='mt-8 space-x-4'>
         <Link to="/contact" className="hidden md:inline">
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button></Link>
             <Link to="/resume" className="hidden md:inline">
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button>
            </Link>
        </div>

    </div>
  )
}

export default Hero