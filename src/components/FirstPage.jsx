import React from 'react'
import '../css/firstPage.css'
import { Typewriter } from 'react-simple-typewriter';
function FirstPage() {
    return (
        <div data-aos="fade-down" className='h-full w-full flex flex-col-reverse lg:flex-row justify-center' id='Home'>
            <div className='h-[50%] lg:h-auto w-full lg:w-[50%]  flex  items-center justify-center lg:justify-end pl-2'>
                <div className='inline-block '>
                    <h1 className='font-bold text-[40px] lg:text-[60px]'><span className='text-black dark:text-white'>Hi, It's </span><span className='text-[rgba(12,192,223,1)]'>Suraj</span></h1>
                    <h3 className='font-medium text-[20px] lg:text-[25px]'><span className='text-black dark:text-white'>I'm a </span><span className='text-[rgba(12,192,223,1)]'>
                        <Typewriter
                            words={['Fullstack Developer', 'UI/UX Designer', 'MERN Stack Developer']}
                            loop={0} // Infinite loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span></h3>
                    <p className='text-black text-sm lg:text-[16px] max-w-[600px] lg:max-w-[500px]  dark:text-white lg:leading-8  mt-2'>
                        Welcome to my portfolio !

                        If you're looking to design a fully responsive and visually stunning website, you've come to the right place.

                        Feel free to reach out to me for any web design and development needs.

                        I look forward to the opportunity to work together and bring your vision to life!
                    </p>
                    <p className='text-[rgba(12,192,223,1)] flex gap-4 mt-2'>
                        <a href='https://www.linkedin.com/in/suraj-bisht-894b1b299/' target='_blank' className='hover:scale-[1.3] transition-all'><i className="fa-brands fa-linkedin"></i></a>
                        <a href='https://github.com/SurajBisht14' target='_blank' className='hover:scale-[1.3] transition-all'><i className="fa-brands fa-github"></i></a>
                        <a href="mailto:2002surajbisht@gmail.com" target='_blank' className='hover:scale-[1.3] transition-all'><i className="fa-brands fa-google"></i></a>
                    </p>
                </div>
            </div>
            {/* imageBox */}
            <div className='h-[50%] lg:h-auto  lg:w-[50%] flex  lg:items-center py-[1px] justify-center'>
                <div id='imageBox' className='relative h-[280px] w-[280px]  lg:h-[350px]  lg:w-[350px] rounded-[50%] flex items-center justify-center z-[5]'>
                    <div className='h-[98%] w-[98%]  bg- rounded-[50%] overflow-hidden flex items-center justify-center'>
                        <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303023/logo2_ui5rlu.webp" className='h-full w-full ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage