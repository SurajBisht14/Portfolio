import React, { useEffect } from 'react';
import '../css/home.css';
import FirstPage from './FirstPage.jsx';
import Education from './Education.jsx';
import Skills from './Skills.jsx';
import Project from './Project.jsx';
import Contact from './Contact.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() { 

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const observer = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    });

    // Get all elements to observe
    const elements = [
      document.querySelector("#Home"),
      document.querySelector("#Education"),
      document.querySelector("#Skills"),
      document.querySelector("#Projects"),
      document.querySelector("#Contact"),
    ];

    // Observe each element
    elements.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  function handleObserver(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log(entry.target)
        console.log(`${entry.target.id} is in view`);
        localStorage.setItem('selectedItem',entry.target.id)
      }
    });
  }

  return (
    <div className='dark:bg-black text-white h-[91vh]  overflow-y-scroll' id='mainHomeDiv'>
      <FirstPage />
      <Education />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
