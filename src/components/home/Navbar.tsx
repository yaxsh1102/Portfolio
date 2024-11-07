import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState<string>('Home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const options: string[] = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-[#171717]">
      <div className="w-full md:w-[40%] flex justify-between items-center text-white px-4 py-6 relative mx-auto">
        <button
          className="md:hidden block bg-transparent p-2"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes color="#ffffff" size={24} /> : <FaBars size={24} />}
        </button>

        <div className="md:flex md:justify-evenly md:items-center md:static hidden w-full">
          {options.map((option: string) => (
            <div
              key={option}
              className="flex justify-center items-center flex-col my-2 md:my-0 cursor-pointer"
              onClick={() => {
                navigate(option === 'Home' ? '' : option.toLowerCase());
                setCurrentPage(option);
              }}
            >
              <p className={currentPage === option ? 'font-medium' : ''}>
                {option}
              </p>
              {currentPage === option && (
                <p className="md:flex hidden w-[80%] h-[2px] bg-white rounded-full"></p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`md:hidden fixed top-0 left-0 w-[250px] h-full bg-[#171717] z-50 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={toggleMenu}
        >
          <FaTimes size={30} />
        </button>

        <div className="flex flex-col items-center mt-16 text-white">
          {options.map((option: string) => (
            <div
              key={option}
              className="flex justify-center items-center flex-col my-2 cursor-pointer"
              onClick={() => {
                navigate(option === 'Home' ? '' : option.toLowerCase());
                setCurrentPage(option);
                setIsMenuOpen(false); 
              }}
            >
              <p className={currentPage === option ? 'font-medium' : ''}>
                {option}
              </p>
              {currentPage === option && (
                <p className="w-[80%] h-[2px] bg-white rounded-full"></p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
