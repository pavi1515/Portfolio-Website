import Link from 'next/link'
import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import Image from 'next/image'
import logo from "../photos/new-logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


    return (
        

        <div id='navbar' className = 'fixed w-full h-20 shadow-xl z-[100] bg-gradient-to-br white-800'>
            <div className = 'flex justify-between items-center w-full h-full px-2 2xl:px-16'>

            <Image className='rounded-xl hover:scale-105 ease-in duration-300 overflow-hidden' src = {logo} alt='/' width = '125' height='50'></Image>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'ml-10 text-sm uppercase hover:border-b'>Home</li></Link>
                    <Link href='/#about' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'ml-10 text-sm uppercase hover:border-b'>About</li></Link>
                    <Link href='/#experience' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'ml-10 text-sm uppercase hover:border-b'>Experience</li></Link>
                    <Link href='/#projects' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'ml-10 text-sm uppercase hover:border-b'>Projects</li></Link>
                    <Link href='/#certification' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'ml-10 text-sm uppercase hover:border-b'>Certifications</li></Link>
                    <Link href='/#skills' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'ml-10 text-sm uppercase hover:border-b'>Skills</li></Link>
                    <Link href='/#contact' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'ml-10 text-sm uppercase hover:border-b'>Contact</li></Link>
                </ul>

                </div>

            <div onClick={handleNav} className='md:hidden rounded-xl hover:scale-105 ease-in duration-300 overflow-hidden'>
                <AiOutlineMenu size={30} />
            </div>
        
    
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/80' : ''}>
                <div className={nav ? 'fixed left-0 top-0 w-[75% sm:w-[45%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div className='rounded-xl hover:scale-105 ease-in duration-300 overflow-hidden' onClick={handleNav}>
                        <AiOutlineClose />
                    </div>
                    <div className = 'border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Portfolio Website</p>
                    </div>
                    <div className='py-4 flex-col'>
                        <ul>
                        <Link href='/' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'text-sm uppercase hover:border-b'>Home</li></Link>
                    <Link href='/#about' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'text-sm uppercase hover:border-b'>About</li></Link>
                    <Link href='/#experience' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'text-sm uppercase hover:border-b'>Experience</li></Link>
                    <Link href='/#projects' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'text-sm uppercase hover:border-b'>Projects</li></Link>
                    <Link href='/#certification' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'text-sm uppercase hover:border-b'>Certifications</li></Link>
                    <Link href='/#skills' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'text-sm uppercase hover:border-b'>Skills</li></Link>
                    <Link href='/#contact' className="hover:bg-gray-200 text-black font-bold py-2 px-4 rounded transition duration-300 ease-in-out"><li className = 'text-sm uppercase hover:border-b'>Contact</li></Link>
                        </ul>
                        <div className='pt-40'>
                            <p className='tracking-widest text-[#591e9]'>Contact me: pmodi@unb.ca</p>
                        </div>
                    </div>
                    </div>

            </div>

            </div>

        </div>

    );
};

export default Navbar