import React from 'react'
import profile from "../photos/profile.jpeg";
import Image from 'next/image'
const About = () => {
    return (
        <div id='about' className='bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-400 to-teal-300 animate-gradient'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <h2 className='py-4 border-b'> About</h2>
                    
                    <p className='py-2 text-gray-600'>Hi! My name is Pavitra. I am a 3rd year Software Engineering student at the University of New Brunswick. I have more than 1.5 years of experience doing Software development, security analysis, and AI at companies and organizations like <b>IBM</b> and <b>Civic Tech Fredericton</b>. </p>
                    <p className='py-2 text-gray-600'> I have research experience with world-renowned researchers like Dr. Rongxing Lu. I am currently doing researching on the Detection of IoT DDoS attacks using Machine Learning algorithms. I am also doing research with Dr. Debasmita Mukherjee on Explainable AI systems. </p>
                    <p className='py-2 text-gray-600'>My hobbies include playing sports like Tennis. I also like singing differnt types of songs. I have made several singing performances at several events at the University of New Brunswick.</p>
                </div>
                <div>
                <Image class="rounded-full absolute  h-auto m-auto shadow-xl shadow-gray-400 flex items-center justify-center p-4 hover: scale-500 ease-in duration-300" src={profile} alt="Your Photo" width={300} height={300}></Image>
                </div>
            </div>
        </div>
    )
}

export default About;
