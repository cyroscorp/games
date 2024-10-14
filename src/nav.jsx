import React, { useState } from 'react';
import W from './assets/w.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-red p-4">
      <div className="flex items-center justify-between">
     
        <div>
            <img src={W}
             className="w-11 h-auto"/></div>
      
        <button 
          onClick={toggleMenu} 
          className="text-white block md:hidden focus:outline-none"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
       
        <div className={`mt-2 md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <a href="#" className="block mt-2 md:mt-0 md:ml-6 hover:text-gray-300">About</a>
          <a href="#" className="block mt-2 md:mt-0 md:ml-6 hover:text-gray-300">Why CA</a>
          <a href="#" className="block mt-2 md:mt-0 md:ml-6 hover:text-gray-300">Incentives</a>
          <a href="#" className="block mt-2 md:mt-0 md:ml-6 hover:text-gray-300">Responsibilities</a>
          <a href="#" className="block mt-2 md:mt-0 md:ml-6 hover:text-gray-300">FAQ</a>
          <a href="#" className="block mt-2 md:mt-0 md:ml-6 hover:text-gray-300">Contacts</a>
          <a href="#" className="block mt-2 md:mt-0 md:ml-6 hover:text-gray-300">Sponsors</a>
          
         
        </div>
        <a 
            href="#" 
            className="mt-2 md:mt-0 md:ml-6 px-4 py-2 border rounded-md border-red-500 bg-red-500 hover:text-white"
          >
            Dashboard
          </a>
      </div>
    </nav>
  );
};

export default Navbar;
