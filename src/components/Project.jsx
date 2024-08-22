import React from 'react'

function Project() {
  return (
    <div className='mt-14' id='Projects'>
      <div className="bg-white dark:bg-black p-4 flex flex-col items-center">
        <h2 className="text-3xl inline-block  text-black dark:text-white font-bold mb-12 text-center p-2 rounded-md shadow-[1px_1px_5px_1px_rgb(12,192,223)]">Projects</h2>
        <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">

          <div className="flex md:contents flex-row-reverse">
            <div className="relative  p-4 my-6 text-black dark:text-white  rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
              <span className="absolute text-sm text-[rgb(12,192,223)] -top-6 left-2 whitespace-nowrap font-bold">Blogging Website</span>
              <a href='https://blog-website-mern-blog-zen.vercel.app/' target='_blank'><img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303021/BlogSite_mut55p.webp" alt="BlogSite" className="sm:w-[400px] sm:h-[250px]  rounded-md  cursor-pointer hover:scale-[1.05] transition-all shadow-[2px_2px_5px_1px_rgb(12,192,223)]" /></a>
            </div>
            <div className="relative col-start-5 col-end-6 sm:mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[rgb(12,192,223)] rounded-t-full ">
                </div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-[rgb(12,192,223)] dark:bg-white border-4 border-[rgb(12,192,223)] rounded-full top-1/2"></div>
            </div>
          </div>

          <div className="flex md:contents">
            <div className="relative  col-start-5 col-end-6 sm:mr-7 md:mx-auto">
              <div className="flex items-center justify-center w-6 h-full">
                <div className="w-1 h-full bg-[rgb(12,192,223)]"></div>
              </div>
              <div className="absolute w-6 h-6 -mt-3 bg-[rgb(12,192,223)] dark:bg-white border-4 border-[rgb(12,192,223)] rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4  my-6 text-black dark:text-white   rounded-xl col-start-6 col-end-10 mr-auto sm:px-8">
            <a href='https://swiggy-bay-beta.vercel.app/' target='_blank'><img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303024/SwiggyClone_is9yfh.webp" alt="BlogSite" className="sm:w-[400px] sm:h-[250px] rounded-md  cursor-pointer hover:scale-[1.05] transition-all shadow-[2px_2px_5px_1px_rgb(12,192,223)]" /></a>
              <span className="absolute text-sm text-[rgb(12,192,223)] font-bold -top-6 left-2 whitespace-nowrap">Swiggy Clone</span>
            </div>
          </div>

          <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-black dark:text-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto sm:px-6">
            <a href='https://task-management-website-murex.vercel.app/' target='_blank'><img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303024/TaskManagement_zd7djl.webp" alt="BlogSite" className="sm:w-[400px] sm:h-[250px] rounded-md  cursor-pointer hover:scale-[1.05] transition-all shadow-[2px_2px_5px_1px_rgb(12,192,223)]" /></a>
              <span className="absolute text-sm font-bold text-[rgb(12,192,223)] -top-6 left-2 whitespace-nowrap">Task Management</span>
            </div>
            <div className="relative col-start-5 col-end-6 sm:mr-7 md:mx-auto">
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

export default Project