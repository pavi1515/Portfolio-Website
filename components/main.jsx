"use client";
import React from 'react'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image'
import profile from "../photos/profile.jpeg";
import {FaGithub, FaLinkedin} from 'react-icons/fa';



const Main = () => {
    
    return (
        <div id='main' className = 'w-full h-screen text-center bg-gradient-to-r from-gray-400 to-teal-300 animate-gradient'>

            <div class="absolute inset-0 bg-white opacity-20"></div>
        
            
            <div className = 'max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-teal-900'>Hello!</p>
                    <h1 className='py-4 text-gray-700'>My name is <span className='shadow-md'>Pavitra</span></h1>
                    <TypeAnimation
                    className='text-gray-800 shadow-md'
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'I am a developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'I am a CyberSecurity Developer/Analyst',
                        1000,
                        'I am a Machine Learning Developer',
                        1000,
                        'I am a Data Scientist',
                        1000
                    ]}
                    wrapper="span"
                    speed={30}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                </div>
            </div>
            <div className='flex items-center justify-between mt+3 max-w-[330px] m-auto py-4'>
                    <a
                    href="https://github.com/invisible-pvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    >   
                    <div className='rounded-full text-3xl shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-510 ease-in duration 300'>
                        <FaGithub />
                    </div>
                    </a>
                    <div className='rounded-full shadow-lg text-3xl shadow-gray-400 p-6 cursor-pointer hover:scale-510 ease-in duration 300'>
                        <FaLinkedin />
                    </div>
            </div>
        </div>
       
    );

};

export default Main;