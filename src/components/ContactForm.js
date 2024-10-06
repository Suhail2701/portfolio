import React, { forwardRef } from 'react';
import { User } from "lucide-react";
import useScroll from '../hooks/useScroll';

const ContactForm = forwardRef((props, ref) => {

    const { isVisible, elementRef } = useScroll();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Access form data using FormData API
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

    };

    return (
        <div ref={ref} className='min-h-screen'>
            <div ref={elementRef} className="flex flex-col justify-center items-center min-h-screen bg-gray-200 gap-16 pb-10 pt-16 xl:py-0">

                <div  className={`flex justify-center items-end text-3xl font-bold ${isVisible ? "drop-down delay-1" : "opacity-0"}`}>
                    <User size={35} color="black" />
                    <div className='px-3 text-black'>Get In</div>
                    <span className='text-blue-900'>Touch</span>
                </div>

                <form
                    onSubmit={handleSubmit}
                    className={`bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 md:w-8/12 lg:w-8/12 xl:w-[420px] w-11/12 ${isVisible ? "drop-down delay-2" : "opacity-0"} opacity-0`}
                >

                    <div className={`mb-4 `}>
                        <label className={`block text-gray-700 text-2xl  mb-2  `} htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className={`shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100  `}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-2xl  mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-2xl  mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-2xl  mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            name="message"
                            className="shadow appearance-none border rounded border-gray-700 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-100"
                            rows="4"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-2xl">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-2xl"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default ContactForm;
