import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import header_bg_color from '../assets/header-bg-color.png'
import arrow_icon from '../assets/arrow-icon.png'
import menu_black from '../assets/menu-black.png'
import close_black from '../assets/close-black.png'

const Navbar = () => {

  const sideMenuRef = useRef();
  const navRef = useRef();
  const navLinkRef = useRef();

  const openMenu = ()=> {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }

  const closeMenu = ()=> {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(()=>{

    window.addEventListener('scroll', ()=> {
        if(scrollY > 50){
          navRef.current.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
          navLinkRef.current.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50');
        } else {
          navRef.current.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm');
          navLinkRef.current.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50');
        }
    })

  }, [])

  return (
    <>
    <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <img src={header_bg_color} alt="" className="w-full"/>
    </div>

    <nav ref={navRef} className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <img src={logo} alt="Logo" className="w-28 cursor-pointer mr-14" />

        <ul ref={navLinkRef} className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo">
            <li><a href="#top">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#work">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>

        <div className="flex items-center gap-4">
            <a href="#contact" 
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo">
            Contato
            <img src={arrow_icon} alt="" className="w-3" />
            </a>

            <button className="block md:hidden ml-3" onClick={openMenu}>
                <img src={menu_black} alt="" className="w-6" />
            </button>
        </div>

        {/* -- ----- mobile menu ------  -- */}
        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo">
            <div className="absolute right-6 top-6" onClick={closeMenu}>
                <img src={close_black} alt="" className="w-5 cursor-pointer" />
            </div>

            <li><a href="#top" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About me</a></li>
            <li><a href="#work" onClick={closeMenu}>My Work</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact me</a></li>
        </ul>
    
    </nav>
    </>
  )
}

export default Navbar
