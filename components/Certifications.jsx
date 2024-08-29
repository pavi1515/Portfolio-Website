import React from 'react'
import profile from "../photos/profile.jpeg";
import Image from 'next/image'
import cc from "../photos/certified-in-cybersecurity-cc.png";
import aws from "../photos/aws-certified-cloud-practitioner.png";
import azure from "../photos/microsoft-certified-azure-fundamentals.png";
import ibm from "../photos/ibm-machine-learning-specialist-advanced.png";
import ibmmlpro from "../photos/ibm-machine-learning-specialist-professional.png";
import securityfocal from "../photos/security-focal.png";
import mlpro from "../photos/ibm-machine-learning-specialist-professional.png";
import kubernetes from "../photos/containers-kubernetes-essentials.png";

import jenkins from "../photos/jenkins.png";
import dockerImage from "../photos/docker-essentials-a-developer-introduction.png";
import design from "../photos/enterprise-design-thinking-practitioner.png";
import psirt from "../photos/product-security-incident-response-team-psirt-responder.png";

import mlassociate from "../photos/ibm-machine-learning-specialist-associate.png";
import think from "../photos/think-like-a-hacker.png";
import securityPrivacy from "../photos/security-and-privacy-by-design-foundations.png";
import dataprocess from "../photos/data-science-tools.png";
import data from "../photos/data-science-methodologies.png";


const Certifications = () => {
    return (
        <div id='certification' className='bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-400 to-teal-300 animate-gradient'> 
        <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 border-b">Certifications</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CertificationBox
          image= {cc}
          name="ISC2 Certified in Cybersecurity"
        />
        <CertificationBox
          image= {aws}
          name="AWS Certified Cloud Practitioner"
        />
        <CertificationBox
          image= {azure}
          name="Microsoft Certified Azure Fundamentals"
        />
        <CertificationBox
          image= {ibm}
          name="IBM Machine Learning Specialist Advanced"
        />
        <CertificationBox
          image={ibmmlpro}
          name="IBM Machine Learning Specialist Professional"
        />
        <CertificationBox
          image={securityfocal}
          name="IBM Security Focal Advanced"
        />
        <CertificationBox
          image={kubernetes}
          name="IBM Containers and Kubernetes Essentials"
        />

        <CertificationBox
          image={jenkins}
          name="Certified Jenkins Engineer"
        />
        <CertificationBox
          image={dockerImage}
          name="IBM Docker Essentials"
        />
        <CertificationBox
          image={design}
          name="IBM Enterprise Design Thinking Practitioner"
        />

        <CertificationBox
          image= {psirt}
          name="IBM PSIRT Responder"
        />
        <CertificationBox
          image={mlassociate}
          name="IBM Machine Learning Specialist - Associate"
        />
        <CertificationBox
          image={think}
          name="IBM Think Like A Hacker"
        />
        <CertificationBox
          image={securityPrivacy}
          name="IBM Security & Privacy by Design"
        />
        <CertificationBox
          image={dataprocess}
          name="IBM Data Science Tools"
        />

        <CertificationBox
          image={data}
          name="IBM Data Science Methodologies"
        />  
        
        {/* Add more CertificationBox components as needed */}
      </div>
    </div>
    </div>
    );
}

const CertificationBox = ({ image, name }) => {
    return (
      <div className="bg-white rounded-md shadow-md p-10 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 overflow-hidden">
        <Image src={image} alt={name} className="w-full rounded-md mb-2" />
        <p className="font-bold">{name}</p>
      </div>
    );
  };


export default Certifications;