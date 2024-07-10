import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import Clock from './clock';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full mt-20 lg:mt-0  flex flex-col justify-center items-center gap-12 p-4 lg:p-10'>
      <div className='w-full flex justify-center h-full'>
        <p className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl w-full font-bold text-center h-full leading-tight tracking-wider'>
          Hello, I'm {""}
          <span className='text-[#adb1b9]'>Vivek Gaur</span>
          <span className='block mt-2'>a Web Developer and <br /> machine learning enthusiast</span>
        </p>
      </div>
      <div className='w-full flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10'>
        <button className='text-lg md:text-xl font-bold border-2 w-full md:w-auto px-4 py-2 border-black rounded-full flex justify-center items-center gap-2'>
          Resume
        </button>
        <button className='text-lg md:text-xl font-bold border-2 w-full md:w-auto px-4 py-2 border-black rounded-full flex justify-center items-center gap-2 bg-black text-white' onClick={()=>navigate('/contact')}>
          Let's Talk <FaArrowRightLong />
        </button>
      </div>
      <div className='w-full flex justify-center gap-4 md:gap-10 font-bold cursor-pointer underline'>
        <a href='https://github.com/Anky9972' target='_blank' className='text-sm md:text-base hover:underline'>Github</a>
        <a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGGKkTSN5pRxQAAAY9O1pXIBdJ3Ha5w6gxXStP38yNdw8hU97ZMk3E_5n1yhJEZYITeKrjn1m9CH1v5JPqH6KpKXbylKkpqAeINDHTHGH7qBrcRWg9URyrypLlr9RjqHec9xHA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fvivek-gaur-12aa1a22b' target='_blank' className='text-sm md:text-base hover:underline'>Linkedin</a>
        {/* <span className='text-sm md:text-base hover:underline'>Contact</span> */}
      </div>
      <div>
        <Clock/>
      </div>
    </section>
  );
};

export default Hero;
