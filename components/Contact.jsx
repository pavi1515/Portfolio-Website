import React from 'react'
import profile from "../photos/profile.jpeg";
import Image from 'next/image'
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Contact = () => {
    return (
        <div id='contact' className='bg-gray-100 min-h-screen py-20 px-4 sm:px-6 lg:px-5 bg-gradient-to-r from-gray-400 to-teal-300 animate-gradient'>
            <div className='max-w-[1200px] mx-auto flex flex-col justify-center h-full'>
                <h2 className='py-4 border-b'>Contact Me: </h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                <h3>GitHub</h3>
                <a
                    href="https://github.com/invisible-pvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    >   
                    <div className='rounded-full text-3xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-510 ease-in duration 300'>
                        <FaGithub />
                    </div>
                    </a>
                    
                </div>
                
                </div>


                

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <h3>Linkedin</h3>
                <a
                    href="https://www.linkedin.com/in/pavi-p-3a614421a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >   
                    <div className='rounded-full text-3xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-510 ease-in duration 300'>
                        <FaLinkedin />
                    </div>
                    </a>
                    
                </div>
                
                </div>


                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center '>
                <h3>Email: pmodi@unb.ca</h3>
                    
                </div>
                
                </div>



                </div>
            </div>
            
        </div>
    );
}

export default Contact;