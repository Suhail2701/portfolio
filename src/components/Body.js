import BackgroundParticles from "./BackgroundParticles";
import { TypeAnimation } from "react-type-animation";
import useScroll from "../hooks/useScroll";
import '../index.css';
import { forwardRef } from "react";


const Body = forwardRef((props, ref) => {
    const { isVisible, elementRef } = useScroll();

    return (
        <div ref={ref} className="min-h-screen relative pt-24 sm:min-h-[1000px]   ">
            <div ref={elementRef} className="absolute inset-0">
                <BackgroundParticles />
            </div>
            <div className="flex justify-between min-h-screen w-10/12 mx-auto pb-20 xs:flex-col xs:gap-24 xs:items-center xs:justify-center sm:flex-col sm:justify-center sm:items-center sm:w-11/12 xs:min-h-[700px] sm:min-h-[1000px] md:flex-row">

                <div className="relative w-6/12  text-center flex flex-col justify-center items-start pr-8 pl-36 overflow-hidden xs:p-0 xs:w-full xs:items-center xs:pt-5  sm:w-full sm:justify-center sm:items-center sm:p-0 sm:pb-20 sm:pt-10 md:items-start xl:pl-36 xl:pr-8 xl:pt-0">
                    <div className="relative z-10 text-6xl py-3 font-bold text-blue-950 xs:text-4xl md:text-5xl lg:text-6xl ">Hi There,</div>
                    <div className={`relative z-10 text-5xl py-3 font-bold text-blue-950 opacity-0 xs:text-3xl md:text-4xl lg:text-5xl ${isVisible ? "drop-down delay-1" : "opacity-0"}`}>I'm Suhail <span className="text-orange-600">Ahmed</span></div>
                    <div className={`relative z-10 text-3xl py-3 font-bold opacity-0 xs:text-2xl md:text-2xl lg:text-3xl ${isVisible ? "drop-down delay-2" : "opacity-0"}`}>I Am a  <TypeAnimation
                        sequence={[" React.js Developer", 1000, ""]}
                        speed={10}
                        cursor={true}
                        repeat={Infinity}
                        className=" text-2xl md:text-3xl text-red-900 whitespace-break-space"
                    /></div>
                    <div className={`flex  gap-4 text-3xl text-blue-900 opacity-0 ${isVisible ? "drop-down delay-3" : "opacity-0"}`}>
                        <a href='https://www.linkedin.com/in/suhail-ahmed2701/'><i className="fab fa-linkedin hover:text-blue-500 shadow-custom-3xl"></i></a>
                        <a href='https://github.com/Suhail2701'><i className="fab fa-github hover:text-blue-500 shadow-custom-3xl"></i></a>
                    </div>
                </div>
                <div className="w-6/12  flex flex-col justify-center items-center z-10 sm:w-11/12  xs:w-full">
                    <img src="/suhail_cover_photo.png" className="w-[500px] dancing-photo xs:w-[350px] sm:w-[350px] md:w-[375px] lg:w-[425px] xl:w-[500px]" />
                </div>
            </div>
        </div>
    );
});

export default Body;
