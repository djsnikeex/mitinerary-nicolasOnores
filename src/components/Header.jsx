import React from 'react';
import { Link as LinkRouter } from 'react-router-dom'
import links from '../utiles/links'
import useShowMenu from '../utiles/useShowMenu';


const Header = () => {
  const [showMenu, toggleMenu] = useShowMenu();

  return (
    <header className='bg-gray-800 
    
    '>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          
          <div className="text-center sm:text-left flex  items-center gap-3 text">
          <img src="https://icones.pro/wp-content/uploads/2022/07/symbole-de-la-planete-terre-bleu.png" className="h-8 object-cover object-center px-3" alt="logo" />
            <h1 className="text-2xl font-bold text-white-900 sm:text-3xl">
              MyTinary
            </h1>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center
          sm:gap-6
          ">
      <button className='p-2 border-sky-800 border-[1px] rounded-md' onClick={toggleMenu}>{showMenu ? 'Hide menu' : 'Show menu'}</button>
                {
                  showMenu ? links.map((link) => (<LinkRouter key={link.title} to={link.to}
                    className='navbar-linkinline-flex items-center justify-center gap-1.5 rounded-lg border text-center border-gray-200 px-5 py-3 text-white transition hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring'
                  > {link.title}
                  </LinkRouter> )): null
        }    
            <a
              className="flex rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium justify-center text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              href="#"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            </a>
            

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header