import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  
  return (
    <nav className={'sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-transparent'} >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">

        <Link to="/" className="flex items-center gap-2" onClick={() => {setActive(""); window.scrollTo(0,0); }}>
          <p className="text-white text-[26px] font-bold cursor-pointer">
            Riskipad
          </p>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((navLink) => (
            <li key={navLink.id} className="text-secondary text-[18px] font-bold hover:text-white">
              <a href={`#${navLink.id}`}> {navLink.title} </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex flex-row gap-10">
          <a href="https://github.com/Riskipad" className="px-5 py-2 text-[#804dee] bg-transparent hover:bg-slate-800/75 ease-in-out duration-200 rounded-lg border-solid border-2 border-[#804dee] text-[16px] font-bold cursor-pointer">
            My Github
          </a>
        </div>

        <Menu as="div" className="md:hidden relative inline-block text-left">
       
          <div>
            <MenuButton>
              <img src={toggle ? close : menu } alt="menu" className="w-[30px] h-[30px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)}/>
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
          >
            <div className="py-1">
              <MenuItem>
                <a href="#work" className="block px-4 py-2 text-md text-secondary hover:bg-slate-800 hover:text-white" onClick={() => setToggle(!toggle)}>
                  Work
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#project" className="block px-4 py-2 text-md text-secondary hover:bg-slate-800 hover:text-white" onClick={() => setToggle(!toggle)}>
                  Project
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#contact" className="block px-4 py-2 text-md text-secondary hover:bg-slate-800 hover:text-white border-b-2 border-slate-800" onClick={() => setToggle(!toggle)}>
                  Contact
                </a>
              </MenuItem>
      
              <div className="w-full py-4 pt-5 items-center text-center">
              <a href="https://github.com/Riskipad" className="mt-5 px-16 py-2 text-[#804dee] bg-transparent hover:bg-slate-800/75 ease-in-out duration-200 rounded-md border-solid border-2 border-[#804dee] text-sm font-bold cursor-pointer" onClick={() => setToggle(!toggle)}>
                My Github
              </a>
            </div>

            </div>
            
          </MenuItems>
        </Menu>

      </div>
    </nav>
  )
}

export default Navbar;
