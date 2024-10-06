import { useState } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = ({ aboutRef, skillsRef, bodyRef, eduRef, projectRef, experienceRef, formRef }) => {

    const [toggle, setToggle] = useState();

    const handleToggle = () => {
        setToggle(!toggle);
    }

    const scrollToSection = (ref) => {
        console.log(ref);
        ref?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <div className="flex flex-wrap justify-between items-center py-3 px-6 xs:px-3 shadow-lg  w-full z-50 fixed bg-white    md:flex-col md:justify-between lg:flex-row lg:justify-between lg:px-4">
                <div className="flex items-center md:flex md:justify-center  ">
                    <img src="/logo_su.png" alt="Logo" className="w-16 xs:w-11" />
                    <span className="xl:text-xl font-bold xs:text-lg ">SUHAIL AHMED </span>
                </div>
                <div className="md:hidden">
                    <button onClick={() => handleToggle()}> {toggle ? <i className="fas fa-times text-3xl hover:text-yellow-500"></i> : <i className="fas fa-bars text-3xl hover:text-yellow-500"></i>}</button>
                </div>
                <div className=" hidden items-center justify-center text-lg font-semibold md:flex ">
                    <ul className="flex items-center z-10">
                        <li className="xl:px-6 md:px-6 lg:px-4  cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(bodyRef)}>Home</li>
                        <li className="xl:px-6  md:px-6  lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(aboutRef)}>About</li>
                        <li className="xl:px-6  md:px-6 lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(skillsRef)}>Skills</li>
                        <li className="xl:px-6  md:px-6 lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(eduRef)} >Education</li>
                        <li className="xl:px-6  md:px-6 lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(projectRef)}>Work</li>
                        <li className="xl:px-6 md:px-6  lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(experienceRef)}>Experience</li>
                        <li className="xl:px-6 md:px-6  lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(formRef)}>Conatct</li>
                    </ul>
                </div>



            </div>
            <div className="fixed right-0 left-0 z-50">
                {toggle ? (<div className="items-center justify-center text-lg font-semibold absolute right-0 top-20 bg-black w-full p-4 transition-all duration-500 ease-in-out text-white  bg-opacity-75  ">
                    <ul className="flex flex-col justify-center items-center z-10">
                        <li className="xl:px-6 md:px-6 lg:px-4  cursor-pointer hover:text-yellow-600 z-100" onClick={() => scrollToSection(bodyRef)}>Home</li>
                        <li className="xl:px-6  md:px-6  lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(aboutRef)}>About</li>
                        <li className="xl:px-6  md:px-6 lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(skillsRef)}>Skills</li>
                        <li className="xl:px-6  md:px-6 lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(eduRef)} >Education</li>
                        <li className="xl:px-6  md:px-6 lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(projectRef)}>Work</li>
                        <li className="xl:px-6 md:px-6  lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(experienceRef)}>Experience</li>
                        <li className="xl:px-6 md:px-6  lg:px-4 cursor-pointer hover:text-yellow-600" onClick={() => scrollToSection(formRef)}>Conatct</li>
                    </ul>
                </div>) : ""}
            </div>
        </div>
    );
}

export default Header;