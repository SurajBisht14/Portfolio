import React from 'react';
import TailwindCSS from '../images/TailwindCSS.svg';

function Skills() {
  return (
    <div className='w-full mt-14 p-4 flex flex-col items-center' id='Skills'>
      <h2 className="text-3xl text-black dark:text-white font-bold text-center p-2 rounded-md shadow-[1px_1px_5px_1px_rgb(12,192,223)] inline-block">
        Skills
      </h2>
      <div className='flex items-center justify-center w-full mt-8'>
        <div className='flex lg:max-w-[700px] flex-wrap justify-center gap-[80px]'>
          <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303024/ReactLogo_ufvluq.webp" alt="React Logo" loading="lazy" className='w-[80px] object-cover' />
          <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303022/mongoDbLogo_o4uauj.webp" alt="MongoDB Logo" loading="lazy" className='w-[80px] object-cover' />
          <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303021/ExpressLogo_rqcm9n.webp" alt="Express Logo" loading="lazy" className='w-[80px] object-contain' />
          <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303021/bootstrap_v3r5ev.webp" alt="Bootstrap Logo" loading="lazy" className='w-[80px] object-cover' />
          <img src={TailwindCSS} alt="TailwindCSS Logo" loading="lazy" className='w-[80px] object-contain'/>
          <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303022/NodeJsLogo_kq6i2p.webp" alt="Node.js Logo" loading="lazy" className='w-[80px] rounded-md object-cover' />
          <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303021/JSLogo_cwucfc.webp" alt="JavaScript Logo" loading="lazy" className='w-[80px] object-cover' />
          <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303023/phpLogo_d0dgo4.webp" alt="PHP Logo" loading="lazy" className='w-[80px] object-contain' />
          <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303023/mySql_ssjrue.webp" alt="MySQL Logo" loading="lazy" className='w-[80px] object-contain' />
          <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303022/html_mkuz8p.webp" alt="HTML Logo" loading="lazy" className='w-[80px] object-contain' />
          <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303022/cssimg_cdnzy3.webp" alt="CSS Logo" loading="lazy" className='w-[80px] object-contain' />
          <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303023/python_miuurk.webp" alt="Python Logo" loading="lazy" className='w-[80px] object-contain' />
        </div>
      </div>
    </div>
  );
}

export default Skills;
