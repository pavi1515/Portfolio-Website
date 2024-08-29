import React from 'react'
import profile from "../photos/profile.jpeg";
import Image from 'next/image'
import { useState } from 'react';

  
const contributions = [
    {
      title: 'Civic Tech Fredericton',
      description: 'MealPlanner App',
      link: 'https://github.com/CivicTechFredericton/mealplanner',
    },
    {
      title: 'IBM Carbon',
      description: 'IBM Carbon Product',
      link: 'https://github.com/carbon-design-system/carbon',
    },
    // Add more contributions as needed
  ];
  

const Projects = () => {

    return (
        <div id='projects' className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-400 to-teal-300 animate-gradient">
      <div className="max-w-7xl py-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center bg-black-700">
          <h2 className="text-4xl font-extrabold text-gray-900 border-b">My Projects</h2>
          <p className="mt-4 py-4 text-lg text-gray-600">
            Here are my projects.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Experience Card 1 */}
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradientt">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Help App</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Techonologies: Python, Python-Kivy, SQLite, Speech-recognition, Twilio</p>
              <p className="mt-4 text-sm text-gray-500">
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Created an app with its Frontend in Python-kivy, Backend in Python, and Database in SQLite.</li>
                <li>Solved the problem of people not receiving help at the right moment.</li>
                <li>Functionality: When a person in need of any type of help says HELP 3 or 4 times in a row, the app recognizes it and sends messages to the persons relative stating that this person needs help at a specific location.</li>
                <li>Presented the app at CUSEC 2024 (Canadian University Software Engineering Conference 2024.)</li>
                <li>Evaluated by RBC judges.</li>
                <li>Received Recongnition as being one of the top 5 best projects submitted to the conference.</li>
                

              </ul>
              </p>
              <a
              href="https://www.youtube.com/watch?v=thJYoccLd7s"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 inline-block"
            >
              Watch on Youtube
            </a>
            </div>
          </div>
          
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradientt">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Machine Learning - Doordash ETA Prediction</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Techonologies: Python, Machine Learning Algorithms, Deep Learning Neural Networks, Scikit-learn, Pandas, Tensorflow</p>
              <p className="mt-4 text-sm text-gray-500">
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Created a project in a team of 4 to predict the Estimated time of Arrival of Doordash deliveries.</li>
                <li>Created Linear, Non-Linear, and Neural Network models. </li>
                <li>Linear Models tested on: Linear Regression, Lasso Regression, and Ridge regression.</li>
                <li>Non-Linear Models: XGBoost Regressor, Hist Gradient Boosting Regressor, Decision Tree Regressor, Support Vector Regressor, Random Forest Regressor, AdaBoost Regressor</li>
                <li>Performed Evaluation and found that XGBoost Regressor Performed the best compared to all of the other models with the lowest 0.642 mean squared error. </li>
                <li>Neural Network: Input Layer, 2 hidden Layer, Output Layer</li>
                

              </ul>
              </p>
              <a
              href="https://youtu.be/CVtOs19l7b4"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 inline-block"
            >
              Watch on Youtube
            </a>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Accident Detection Camera</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Technologies: Python, Tensorflow, Keras, deep learning, Flask, SQL, Twilio, Kaggle Datasets.</p>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Road Accidents can happen anytime and anywhere. When road accidents occur, the injured would not be able to get immediate assistance especially when accidents occur in mid nights. This project uses machine learning to train a model that classifies image as accident or not accident. If it is the image of an accident, then the software sends text message along with the location to hospitals and police station using Python Twilio module. Rasberry Pi can be used to make the hardware camera.</li>
                <li>Currently training a machine learning model with a large dataset to make the software easily classify images as accident or not an accident.</li>
                

              </ul>
              
            <a
              href="https://youtu.be/5_dBHCOQTIo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 inline-block"
            >
              Watch on Youtube
            </a>
            </div>
          </div>
          {/* Experience Card 2 */}
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Carbon Monitoring App</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Technologies: Machine Learning, Python, Kivy, SQLite, matplotlib</p>
              <p className="mt-4 text-sm text-gray-500"></p>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Participated in the UNB Software Development Hackathon</li>
                <li>Created an app with a frontend, backend, and database.</li>
                <li>Utilize Matplotlib library in Python to generate a variety of charts showcasing carbon emissions, offsets, and net emissions trends.</li>
                <li>Employ Python programming to process user-provided data and execute calculations for determining net carbon emissions.</li>
                <li>Implement intelligent decision support systems, potentially incorporating machine learning algorithms, to assist client companies in selecting appropriate partners for carbon offset purchases.</li>
                <li> Integrate machine learning algorithms and decision support systems into the application architecture to empower decision-makers with data-driven recommendations.</li>
                <li>Ensure an intuitive and user-friendly experience through careful UI/UX design considerations and responsive web design principles.</li>

              </ul>
              <a
              href="https://youtu.be/ee7yen7HL4Q"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 inline-block"
            >
              Watch on Youtube
            </a>
              
            </div>
          </div>
          {/* Experience Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Covid Face Recognizer</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Technologies: OpenCV, dlib, Flask, python mysql connectivity and deep learning</p>
              <p className="mt-4 text-sm text-gray-500">
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>A website made with Python-Flask integrated with a Face Recognition Software written in Python connected to MySql Database</li>
                <li>Worked on a wide-variety of software developemnt tasks.</li>
                <li>Logic: When a person becomes COVID positive, Doctors can log into this website and enter the persons unique identification number and turn the persons status to covid Positive. The database of this website is connected to a Face-recognition software written in python. The database has a relation with the persons face encodings, name, unique identification number, and the current covid status. Now, the persons covid states is changed to positive. The camera uses this covid classification software that is connected to the database. So, now when a person enters a shop, their face encodings would be scanned and searched for in the database. Once the face encodings are found, the software will check if the persons covid status is positive or negative. If positive, the shopkeeper would notice a red box around the face of the person making the shopkeeper know that the person is covid positive.</li>
                
              </ul>
              </p>
              
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Rover - Embedded System Design course</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Technologies: C Programming Language, Embedded System Design, Robotics </p>
              <p className="mt-4 text-sm text-gray-500">
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Worked in a team of 4 to build a rover controlled by a transmitter that detects magnetic anomalies using a hall effect sensor.</li>
                <li>Won 2nd place in the Harvest Robotics Competition organized by the UNB. </li>
                <li> Developed embedded system in C and C++ programming languages that controlled the transmitting and receiving actions of the embedded system.</li>
                
              </ul>
              </p>
              <a
              href="https://www.youtube.com/watch?v=ySUyn-mVnRY"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-4 inline-block"
            >
              Watch on Youtube
            </a>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Portfolio Website</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Technologies: Next.js, React.js, HTML, Tailwind CSS, JavaScript</p>
              <p className="mt-4 text-sm text-gray-500">
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Created a portfolio website using Next.js, React.js, HTML, Tailwind CSS, JavaScript. </li>
                <li>Effectively utilized the fundamentals of Software Engineering, Software Development, and Cybersecurity to create this website. </li>
                
                
              </ul>
              </p>
              
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Face Detection Camera for security</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Technologies: OpenCV, dlib, Flask, python mysql connectivity and deep learning</p>
              <p className="mt-4 text-sm text-gray-500">
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Made a face detection camera that checks if the face encodings scanned are a part of the MySql database. If the face encodings of the person are a part of the MySql database,then the person is an employee of the company and thus would be allowed to go inside the building. However, if the persons face encodings would not be found in the MySql database, then the persons face would be highlighted with a red box and a beep sound will ring.</li>
                
                
              </ul>
              </p>
              <a
              href="https://vimeo.com/590518590"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-2 inline-block"
            >
              Watch on Vimeo
            </a>
            </div>
          </div>
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Book Cricket Game</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Technologies: Python</p>
              <p className="mt-4 text-sm text-gray-500">
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Made a Book Cricket game using python and mainly its Random module.</li>
                <li>Logic: The last digit of each page of a book is equal to the number of runs scored by a player in each ball. If the last digit exceeds 6, then the runs start from 1, 2 and so on. If the last digit is zero, then the player is out. In the end of the game, the team that won would be displayed along with the player who scored the maximum number of runs. The random module was used to generate the random page number.</li>
                <li>Got a full score for this Grade 11 final project.</li>
                
              </ul>
              </p>
              
            </div>
          </div>
          {/* Add more experience cards as needed */}
          
          <div className="bg-white overflow-hidden shadow rounded-lg shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gradient-to-r from-gray-100 to-blue-100 animate-gradient">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 border-b">Uniform Detection Model</h3>
              <p className="text-lg font-medium text-gray-900 border-b">Technologies: Technologies: Python, Tensorflow, Keras, deep learning, Flask, SQL, Twilio, Kaggle Datasets.</p>
              <p className="mt-4 text-sm text-gray-500">
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside">
                <li className='mb-1'>Tried to train a Uniform Detection Machine Learning model that classifies students based on whether they are in proper school uniform or not.</li>
                <li>Faced the challenge of gathering a big dataset. I clicked some photos of me to train the model. However, the dataset turned out to be extremely less. I tried augmentating the images to increase the dataset. But it did not prove to be a much larger dataset.</li>
                
              

              </ul>
              </p>
              
            </div>
          </div>
        </div>
      </div>
      
      <div className="open-source-contributions">
      <h2 className="mb-4 border-b">Open Source Contributions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contributions.map((contribution, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">{contribution.title}</h3>
            <p className="mb-4">{contribution.description}</p>
            <a href={contribution.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>

    </div>
    
    );
}

export default Projects;
