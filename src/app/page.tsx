// Code: This is the main page of the application. It contains the navbar component. 
//       The navbar component is imported from the components folder. 
//for backgrounds use : https://bg.ibelick.com/ this link to get the background color code
import React from 'react'; 
 
import NavBar from "./components/NavBar"; 
import Hero from "./components/Hero"; 
import About from "./components/About" 
import Technologies from "./components/Technologies" 
import Experience from "./components/Experience" 
import Projects from "./components/Projects" 
//import Contact from  "./components/Contact"

export default function Home() {
  return ( 
  
   <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 '>  

         
<div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> 
      </div>  
      <div className='container mx-auto'>
        <NavBar /> 
        <br></br>
        <br></br>
        <Hero/>  
        <hr className='border-t-2 border-neutral-950' />
        <About /> 
        <hr className='border-t-2 border-neutral-950' />
        
        <hr className='border-t-2 border-neutral-950' /> 
        <Experience />  
        <hr className='border-t-2 border-neutral-950' /> 
        <Projects /> 
        <hr className='border-t-2 border-neutral-950' /> 
        <Technologies /> 
        <hr className='border-t-2 border-neutral-950' />  
        <hr className='border-t-2 border-neutral-950' />
         
         
        <br />
        <footer className='bg-gradient-to-b from-pink-700 to-slate-1000'></footer>
      </div>
    </div>
  
  )
      }