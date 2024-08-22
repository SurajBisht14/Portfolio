import {React,useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
function Education() {
  useEffect(() => {
    AOS.init()
  }, []);
  return (
    <div  className='w-full' id='Education'>
      <div  className="bg-white dark:bg-black p-4 flex flex-col items-center">
        <h2 className="text-3xl inline-block  text-black dark:text-white font-bold mb-12 text-center p-2 rounded-md shadow-[1px_1px_5px_1px_rgb(12,192,223)]">Education</h2>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
          
          <div className="flex md:contents flex-row-reverse">
            <div
              className="px-8 relative p-4 my-6 text-black dark:text-white  rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto shadow-[1px_1px_5px_1px_rgb(12,192,223)]">
              <h3 className="text-md text-[rgb(12,192,223)] font-semibold lg:text-xl">High School</h3>
              <p className="mt-2 leading-6">Woodlands Academy,Haldwani</p>
              <p className="mt-2 leading-6">Percentage:91%</p>
              <span className="absolute text-sm text-[rgb(12,192,223)] -top-6 left-2 whitespace-nowrap font-bold ">2019</span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[rgb(12,192,223)] rounded-t-full ">
                </div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-[rgb(12,192,223)] dark:bg-white border-4 border-[rgb(12,192,223)] rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative  col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[rgb(12,192,223)]"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-[rgb(12,192,223)] dark:bg-white border-4 border-[rgb(12,192,223)] rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4  my-6 text-black dark:text-white   rounded-xl col-start-6 col-end-10 mr-auto px-8 shadow-[1px_1px_5px_1px_rgb(12,192,223)]">
              <h3 className="text-md text-[rgb(12,192,223)] font-semibold lg:text-xl">Intermediate</h3>
              <p className="mt-2 leading-6">Woodlands Academy,Haldwani</p>
              <p className="mt-2 leading-6">Percentage:90%</p>

              <span className="absolute text-sm text-[rgb(12,192,223)] font-bold -top-6 left-2 whitespace-nowrap">2021</span>
            </div>
          </div>

          <div className="flex md:contents flex-row-reverse">
            <div
              className="relative p-4 my-6 text-black dark:text-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto px-6 shadow-[1px_1px_5px_1px_rgb(12,192,223)]">
              <h3 className="text-md text-[rgb(12,192,223)] font-semibold  lg:text-xl">Bachelor of Computer Application</h3>
              <p className="mt-2 leading-6">Amrapali University, Haldwani</p>
              <p className="mt-2 leading-6">Percentage:70%</p>

              <span className="absolute text-sm font-bold text-[rgb(12,192,223)] -top-6 left-2 whitespace-nowrap">2024</span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[rgb(12,192,223)] rounded-t-full bg-gradient-to-b from-[rgb(12,192,223)] to-[rgb(12,192,223)]">
                </div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-[rgb(12,192,223)] dark:bg-white border-4 border-[rgb(12,192,223)] rounded-full top-1/2"></div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Education