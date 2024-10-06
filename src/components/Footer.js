import { Phone, Mail, Map } from 'lucide-react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useScroll from '../hooks/useScroll';



const Footer = () => {

    const { isVisible, elementRef } = useScroll();
    return (
        <div ref={elementRef} className="bg-dark-blue-gradient3 text-white min-h-44 ">
            <div className="xl:w-10/12 flex justify-around mx-auto items-center p-3 xs:flex-col xs:gap-10 xs:text-center xs:w-10/12 sm:w-10/12 md:w-11/12  lg:w-11/12 ">
                <div className={`flex flex-col gap-3 opacity-0 ${isVisible ? "drop-down delay-1" : "opacity-0"}`}>
                    <h1 className="text-3xl font-semibold">Suhail's Portfolio</h1>
                    <p>Thank you for visiting my personal portfolio website.</p>
                    <p className='italic font-semibold'>"One day or Day one? you decide."</p>
                </div>
                <div className={`flex flex-col gap-4 opacity-0 ${isVisible ? "drop-down delay-2" : "opacity-0"}`}>
                    <h1 className="text-3xl font-semibold">Contact Info</h1>
                    <p className='flex gap-2'><Phone size={20} color='yellow' />+91 XXX-XXX-XXXX</p>
                    <p className='flex gap-2'><Mail size={20} color='yellow' />suhail.ahmed2701@gmail.com</p>
                    <p className='flex gap-2'><Map size={20} color='yellow' />Bengaluru, India</p>
                    <div className='flex  gap-4 text-2xl xs:mx-auto '>
                        <a href='https://github.com/Suhail2701'><i className="fab fa-github hover:text-yellow-300"></i></a>
                        <a href='https://www.linkedin.com/in/suhail-ahmed2701/'><i className="fab fa-linkedin hover:text-yellow-300"></i></a>
                    </div>
                </div>

            </div>
            <hr className={`w-10/12 mx-auto border border-gray-500 opacity-0 ${isVisible ? "drop-down delay-3" : "opacity-0"}`} />

            <div className={`text-center p-2 opacity-0 ${isVisible ? "drop-down delay-4" : "opacity-0"}`}>
                <p>Created by <span className='font-semibold pr-1'>Suhail Ahmed</span>💛</p>
            </div>
        </div>
    )
}

export default Footer;