
import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='bg-slate-700 text-white  rounded-lg font-bold'>
      <div className='h-12 flex items-center justify-around px-4 md:px-10'>
        <h1 className='text-xl'><a href="#nav" className='hover:text-cyan-400'>Portfolio</a></h1>

        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <HiX size={25} /> : <HiMenu size={25} />}
          </button>
        </div>

        <ul className='hidden md:flex gap-10'>
          <li><a href="#home" className='hover:text-cyan-400'>Home</a></li>
          <li><a href="#about" className='hover:text-cyan-400'>About</a></li>
          <li><a href="#portfolio" className='hover:text-cyan-400'>Portfolio</a></li>
          <li><a href="#contact" className='hover:text-cyan-400'>Contact</a></li>
          <li><a href="#skills" className='hover:text-cyan-400'>Skills</a></li>
        </ul>
      </div>
      {isOpen && (
        <ul className='flex flex-col items-center gap-4 py-4 md:hidden'>
          <li><a href="#home" onClick={toggleMenu} className='hover:text-cyan-400'>Home</a></li>
          <li><a href="#about" onClick={toggleMenu} className='hover:text-cyan-400'>About</a></li>
          <li><a href="#portfolio" onClick={toggleMenu} className='hover:text-cyan-400'>Portfolio</a></li>
          <li><a href="#contact" onClick={toggleMenu} className='hover:text-cyan-400'>Contact</a></li>
          <li><a href="#skills" onClick={toggleMenu} className='hover:text-cyan-400'>Skills</a></li>
        </ul>
      )}
    </div>
  );
};

export default Nav;

