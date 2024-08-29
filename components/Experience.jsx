import React from 'react'
import profile from "../photos/profile.jpeg";
import Image from 'next/image'

const Experience = () => {
    return (
        <div id='experience' className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-400 to-teal-300 animate-gradient">
      <div className="max-w-7xl py-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center bg-black-700">
          <h2 className="text-4xl font-extrabold text-gray-900 border-b">My Experiences</h2>
          <p className="mt-4 py-4 text-lg text-gray-600">
            Here are some highlights from my journey so far.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Experience Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">IBM - 1 year 4 months</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Software Developer Intern (Security)</p>
              <p className="mt-4 text-sm text-gray-500">
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
              <li className='mb-1'>Worked 8 months full-time and 8 months part-time at IBM.</li>
                <li>Software Engineered code to be included into the backend systems of Security Intelligence Tools at IBM. </li>
                <li>Developed code using languages like Python that works with Whitesource APIs to extract useful information of different PVRs. </li>
                <li>Understood with the help of my colleague, the process of using Podman. </li>
                <li>Worked with Python, MATLAB, Node.js, Angular, Flask, Bootstrap, Vue.js, SQL, AQL, APIs, Linux, TypeScript, JavaScript, and Docker.</li>
                <li>Performed security validation or web application penetration testing on apps made using Python, MySql, Javascript, Redis, Angular, React, SQL, and Node.js, with tools like BurpSuite, SonarQube and many more on IBM X-Force App Exchange apps.  </li>
                <li>Resolved queries of IBM Qradar Customers with fixing OWASP Top 10 vulnerabilities.  </li>
                <li>Used tools like Mend (WhiteSource), OWASP Dependency Check to find and fix vulnerabilities in IBM and IBM Third-party applications.  </li>
                <li><b>Major Accomplishment:</b> Found Log Injection Vulnerability in IBM’s open-source library.  </li>
                <li>Worked in a DevSecOps environment doing security testing on pre-release version of the apps submitted on IBM X-Force App Exchange.  </li>
              
              </ul>
              </p>
            </div>
          </div>
          {/* Experience Card 2 */}
        
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">IBM Carbon </h3>
              <p className="text-lg font-medium text-gray-900 border-b">Software Developer May 2024 - Present</p>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Developing code for IBM Carbon Open-Source project.</li>
                <li>Using HTML, SCSS, Typescript, JavaScript, and Vue.js to develop code.</li>


              </ul>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Civic Tech Fredericton</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Software Developer March 2024 - Present</p>
              <p className="mt-4 text-sm text-gray-500"></p>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Worked as a Software Developer in the MealPlanner project of Civic Tech Fredericton</li>
                <li>Used programming languages like TypeScript, JavaScript, HTML, CSS, Graphql, and sql to develope code. </li>
                <li>Developed code using languages like Python that works with Whitesource APIs to extract useful information of different PVRs. </li>
                <li>Prepared documentation for the users and Admins of the app.</li>
                <li>Performed Data Analysis on various types of data in the app.</li>
             

              </ul>
                
          
            </div>
          </div>
          {/* Experience Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">UNB - AI and Robotics Research Lab</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Research Assistant - May 2024 - Present</p>
              <p className="mt-4 text-sm text-gray-500">
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Worked as a Research Assistant under Dr. Debasmita Mukherjee</li>
                <li>Gained experience with deep learning and robotics.</li>
                

              </ul>
              </p>
            </div>
          </div>
          {/* Add more experience cards as needed */}
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">UNB - AI and Cybersecurity Research</h3>
              <p className="text-lg font-medium text-gray-900 border-b"> AI Researcher - Thesis Project</p>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Worked under the supervision of Dr. Rongxing Lu (h-index 86) for a research thesis project.</li>
                <li>Researched the different ways of detecting DDOS attacks in IoT devices under the supervision of Dr. Lu</li>
                <li>Found research gaps in existing and current research.</li>
                <li>Evaluated different machine learning algorithms used to detect DDOS attacks in IoT devices.</li><li>Worked 8 months full-time and 8 months part-time at IBM.</li>
              

              </ul>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Lawtons Drugs</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Cashier - Part-time - 4 Months</p>
              <p className="mt-4 text-sm text-gray-500">
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Worked in a team to effectively handle customers, manage cash, and create receipts for customers.</li>
                <li>Understood the importance of time management.</li>
                <li>Raised customer satisfaction by providing them great treatment using strong communication skill. </li>
                <li>Applied various soft-skills while working in a fast-paced environment coordinating and cooperating in a team.</li>

              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      

    </div>
    );
}

export default Experience;