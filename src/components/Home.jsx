import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  const scrollToSection = (sectionName) => {
    const section = document.getElementsByName(sectionName)[0];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-pink-600' style={{ marginTop: '1rem' }}>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Mayowa Oladimeji
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Front End Developer and Software Tester.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I am a front-end developer with expertise in crafting user-friendly, fully responsive web applications. My skill set extends to behavioral-driven development testing, and while I possess some backend skills, my primary focus remains on front-end development 
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600' onClick={() => scrollToSection('work')}>
            View Recent Projects
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
