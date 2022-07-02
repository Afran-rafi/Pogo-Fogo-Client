import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../Images/Pogo-Fogo.jpeg'

const Navbar = () => {
    let [open, setOpen] = useState(false);
    let links = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Service', link: '/services' },
        { name: 'Room', link: '/room' },
        { name: 'Blog', link: '/blogs' },
        { name: 'Contact', link: '/contact' },
    ];

    return (
        <div className='sticky z-50 font-[Poppins]'>
            <div className='nav shadow-md lg:shadow-none w-full lg:top-12 left-0'>
                <div className='lg:flex flex items-center justify-between lg:mx-20 h-20'>
                    <div className='cursor-pointer'>
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
                        <i className={`${open ? 'fa-solid fa-x' : 'fa-solid fa-bars'}`}></i>
                    </div>
                    <ul className={`lg:flex lg:items-center lg:pb-0 pb-8 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-7 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'} lg:opacity-100`}>
                        {
                            links.map(link => <li
                                className='lg:ml-8 text-xl lg:my-0 my-5'
                                key={link.name}>
                                <NavLink className='navbar-animation' to={link.link}>{link.name}</NavLink>
                            </li>)
                        }
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default Navbar;