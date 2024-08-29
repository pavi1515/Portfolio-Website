import Image from "next/image";
import Main from "../components/main";
import Navbar from "../components/Navbar"
import About from "../components/About"
import {FaGithub, FaLinkedIn} from 'react-icons/fa'

import profile from "../photos/profile.jpeg"
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Projects from "../components/Projects";
import Contact from "../components/Contact";





// pages/index.js

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
    </div>
  );
}
