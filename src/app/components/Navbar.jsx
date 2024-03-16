"use client"
import { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <main>
            <div id='navbar' className='fixed w-screen bg-white pt-4 border-b shadow-md p-3'> 
                <ul className='flex justify-between mr-10 min-w-60 font-extrabold'>
                    <Image src="/cg-high-resolution-logo-black-transparent-2.png" width={40} height={40} alt="logo"/>
                    <li className='hidden lg:block svg_hover border-b-blue-500 hover:border-b'><a href='#' >Home</a></li>
                    <li className='hidden lg:block svg_hover border-b-blue-500 hover:border-b'><a href='#'>About</a></li>
                    <li className='hidden lg:block svg_hover border-b-blue-500 hover:border-b'><a href='#'>Projects</a></li>
                    <li className='hidden lg:block svg_hover border-b-blue-500 hover:border-b'><a href='#'>Contact</a></li>
                    <button className='lg:hidden' onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-baseline-density-medium" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 20h16" />
                            <path d="M4 12h16" />
                            <path d="M4 4h16" />
                        </svg>
                    </button>
                </ul>
            </div>
            <div className={showMenu ? '' : '-ml-[200vw] transition-all duration-400'}>
                <ul id='sm_navbar' className='fixed text-6xl p-6 h-screen mt-14 w-screen border shadow-md font-extrabold z-10 bg-white'>
                    <li className='svg_hover'><a href='#'>Home</a></li>
                    <li className='svg_hover'><a href='#'>About</a></li>
                    <li className='svg_hover'><a href='#'>Projects</a></li>
                    <li className='svg_hover'><a href='#'>Contact</a></li>
                </ul>
            </div>
        </main>
    );
};

export default Navbar;