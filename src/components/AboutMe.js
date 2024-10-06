import React, { forwardRef, useRef, useEffect, useState } from 'react';
import img1 from '../images/abImg1.png';
import '../index.css';
import { User } from "lucide-react";
import MovingBlocks from "./MovingBlocks";
import useScroll from '../hooks/useScroll';
import resume from "../images/res_123.pdf";

const AboutMe = forwardRef((props, ref) => {

  const { isVisible, elementRef } = useScroll();

  return (
    <div ref={ref} className="min-h-screen bg-gray-100">
      <div ref={elementRef} className="w-10/12 m-auto text-center">
        <div className='text-3xl pt-24 pb-10 flex justify-center items-center font-bold'>
          <User size={35} color="black" />
          <div className='pl-3'>About</div>
          <span className='text-purple-900 px-3'>Me</span>
        </div>
        <div className="flex flex-col items-center xl:flex-row xl:justify-center xl:items-center ">
          <div className='p-0 w-11/12  xl:w-6/12 xl:pl-28 xl:p-6 '>
            <img
              src={img1}
              className='xl:w-[500px] xl:max-h-[500px] flip-interval w-full``  '
              alt="About Image"
            />
          </div>
          <div className='xl:w-7/12 xl:text-left  xl:flex-col xl:items-center xl:justify-center xl:p-4 w-full text-center p-2  '>
            <div className={`xl:text-3xl font-bold self-start opacity-0 xs:mx-auto  ${isVisible ? 'drop-down delay-1' : 'opacity-0'}`}>I'm Suhail</div>
            <div className={`xl:text-lg font-bold self-start opacity-0 pb-10 mx-auto  ${isVisible ? 'drop-down delay-2' : 'opacity-0'}`}>React.js Developer</div>
            <p className={` opacity-0 xs:text-center  ${isVisible ? 'drop-down delay-3' : 'opacity-0'}`}>I am a dedicated React.js developer with 1.4 years of professional experience, currently working as a System Engineer at TCS. My expertise lies in building responsive and dynamic user interfaces using React.js, complemented by a strong foundation in JavaScript, HTML, and CSS. I am also proficient in state management with Redux, and have hands-on experience with Tailwind CSS, Bootstrap, Java, and SQL.</p>
            <p className={`pt-3 opacity-0 ${isVisible ? 'drop-down delay-4' : 'opacity-0'}`}>I am passionate about creating efficient, scalable, and maintainable code, and I am always eager to learn and adapt to new technologies. Currently, I am open to exploring new opportunities that allow me to further enhance my skills and contribute to exciting projects.</p>
            <p className={`self-start opacity-0 pt-5 xs:mx-auto  ${isVisible ? 'drop-down delay-5' : 'opacity-0'}`}><span className='font-bold text-purple-900 pr-3'>Email: </span> suhail.ahmed2701@gmail.com</p>
            <p className={`self-start opacity-0 xs:mx-auto  ${isVisible ? 'drop-down delay-6' : 'opacity-0'}`}><span className='font-bold text-purple-900 pr-3'>Place: </span> Bengaluru, Karnataka</p>
            <button className={`self-start p-2 opacity-0 text-white bg-blue-800 mt-5 font-bold rounded-lg shadow-custom-3xl dancing-photo xs:mx-auto
               ${isVisible ? 'drop-down delay-7' : 'opacity-0'}`}>
              <a href={resume} download='resume'>Resume</a>
            </button>
          </div>
        </div>
      </div>
      <div className={`w-10/12 mx-auto opacity-0 xs:w-full
         ${isVisible ? 'drop-down delay-3' : 'opacity-0'}`}>
        <MovingBlocks />
      </div>
    </div>
  );
});

export default AboutMe;
