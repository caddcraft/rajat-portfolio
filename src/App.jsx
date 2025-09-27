
import React from 'react';
import Nav from './Component/Nav';
import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { BiLogoCss3 } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";

const App = () => {
  const handleView = () => {
    window.open('./src/assets/file/rajat.pdf', '_blank');
  };

  return (
    <div className="bg-slate-800 min-h-screen text-white">
      <Nav/>
    <section id='home' className="py-10 px-4 md:px-20 transition transform hover:-translate-y-1">
  <div className="flex flex-col md:flex-row items-center bg-slate-700 justify-around p-6 rounded-lg">
   <div className="w-full md:w-1/2 p-4 transition transform hover:-translate-y-1">
     <h1 className='text-2xl md:text-3xl font-bold'>"Hi, I'm " <span className='text-green-500'>Rajat Choudhary</span></h1>
    <h2 className='text-3xl md:text-4xl font-semibold text-cyan-400 mt-2'>Frontend Developer</h2>
   <p className='mt-4 text-lg md:text-xl'>"Hi I'm Rajat — A Frontend Developer"</p>
 <div className="flex flex-col sm:flex-row gap-4 mt-6">
<button onClick={handleView}className="bg-cyan-500 hover:bg-green-600 text-white font-semibold py-2 transition transform hover:-translate-y-1  px-4 rounded ">View PDF </button>
    <a href="src/assets/file/rajat.pdf" download className="bg-slate-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded text-center">
                Download PDF</a></div>
     </div>
   <div className="w-60 h-60 md:w-80 md:h-80 border p-8 rounded-full mt-8 md:mt-0 transition transform hover:-translate-y-1"></div>
    </div>
</section>
<section id='about' className="py-10 px-4 md:px-20 transition transform hover:-translate-y-1">
        <div className="flex flex-col-reverse md:flex-row bg-slate-700 p-6 rounded-lg">
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <div className="w-60 h-60 border transition transform hover:-translate-y-1"></div>
          </div>
          <div className="w-full md:w-1/2 p-4 transition transform hover:-translate-y-1">
            <h1 className='text-2xl font-bold'>About <span className='text-cyan-400'>Me</span></h1>
            <h2 className='text-lg font-semibold mt-2'> <span className='text-cyan-500'>Frontend</span>Developer</h2>
            <p className='mt-3 text-base md:text-lg '>
              Hello! I'm "Rajat Choudhary", a Front-End Web Developer with a passion for designing responsive, user-friendly websites. I specialize in React.js, HTML, CSS, and JavaScript. I love turning complex problems into simple, beautiful, and intuitive interfaces. Always eager to learn new technologies and improve my skills.
            </p>
          </div>
        </div>
      </section>
 <section id='portfolio' className="py-10 px-4 md:px-20 transition transform hover:-translate-y-1">
   <div className="bg-slate-700 p-6 rounded-lg ">
     <h1 className='text-3xl md:text-4xl font-bold text-center text-cyan-300 mb-6'>Education & Experience</h1>
  <div className="flex flex-col  items-center md:flex-row gap-6">
   <div className='flex-1 border  rounded-lg transition transform hover:-translate-y-1'>
 <h3 className='text-lg font-bold'>+2 (Arts) (2022-2023)</h3>
    <p>Govt. Sec. Sec. School, Rajiana (53 mile)</p>
   <h3 className='text-lg font-bold mt-4'>10 (Matriculation) (2019-2020)</h3>
   <p>Govt. Sec. Sec. School, Rajiana (53 mile)</p>
   </div>
  <div className="flex-1 border p-4 rounded-lg transition transform hover:-translate-y-1">
       <p className='text-base md:text-lg  text-justify'>
               Education lays the foundation by building knowledge and understand, while experience refines that knowledge through real-world practice. Education teaches the principles; experience brings them to life. While one happens in classrooms, the other happens in challenges. Together, they build confidence, skill, and long-term success story. </p>
            </div>
          </div>
        </div>
      </section>
<section id='skills' className="py-10 px-4 md:px-20 transition transform hover:-translate-y-1">
        <h1 className='text-3xl md:text-4xl font-bold text-center text-cyan-300 mb-8'>Skills</h1>
        <div className="flex flex-wrap justify-evenly gap-6 transition transform hover:-translate-y-1">
          <div className="w-40 md:w-60 border p-4 rounded-lg flex flex-col items-center transition transform hover:-translate-y-1">
            <FaHtml5 className="text-orange-600 text-4xl md:text-6xl" />
            <p className='mt-3 text-sm md:text-base text-center'>HTML is the standard language used to create the structure of web pages.</p>
          </div>
          <div className="w-40 md:w-60 border p-4 rounded-lg flex flex-col items-center transition transform hover:-translate-y-1">
            <BiLogoCss3 className="text-sky-600 text-4xl md:text-6xl" />
            <p className='mt-3 text-sm md:text-base text-center'>CSS is used to style HTML content — it controls layout, colors, fonts, spacing, and responsiveness of web pages.</p>
          </div>
          <div className="w-40 md:w-60 border p-4 rounded-lg flex flex-col items-center transition transform hover:-translate-y-1">
            <TbBrandJavascript className="text-yellow-400 text-4xl md:text-6xl" />
            <p className='mt-3 text-sm md:text-base text-center'>JavaScript is a programming language that adds interactivity and dynamic behavior to web pages.</p>
          </div>
          <div className="w-40 md:w-60 border p-4 rounded-lg flex flex-col items-center transition transform hover:-translate-y-1">
            <FaPython className="text-cyan-300 text-4xl md:text-6xl" />
            <p className='mt-3 text-sm md:text-base text-center'>Python is a high-level, general-purpose programming language known for its simplicity and readability.</p>
          </div>
        </div>
      </section>
      
    </div>
  );
};
  
export default App;
