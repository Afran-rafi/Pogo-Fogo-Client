import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/Pogo-Fogo.jpeg'
import '../CSS/Navbar.css'

const Navbar = () => {
    let links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/' },
        { name: 'Products', link: '/' },
        { name: 'Blogs', link: '/' },
        { name: 'Contact', link: '/' }
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
                <div className='flex font-bold cursor-pointer text-2xl items-center text-gray-800'>
                    <img src={logo} alt="" />
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <i className={`${open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}`}></i>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] opacity-0'} md:opacity-100`}>
                    {
                        links.map(link => <li
                            className='md:ml-8 text-lg font-semibold md:my-0 my-5'
                            key={link.name}>
                            <NavLink className='navbar-animation' to={link.link}>{link.name}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;