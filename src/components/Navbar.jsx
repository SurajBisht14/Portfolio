import { useRef, useState,useEffect } from 'react';
import ToggleComponent from './Toggle.jsx';
function Navbar() {
    const mobileNav = useRef(null);
    const [isNavOpen, setisNavOpen] = useState(false);
    const isNavOpenUseRef = useRef(null)
    const [selectedItem, setSelectedItem] = useState('Home');
    const liName = ['Home', 'Education', 'Skills', 'Projects', 'Contact'];

    useEffect(() => {
        const intervalId = setInterval(() => {
          setSelectedItem(localStorage.getItem('selectedItem') || '');
        }, 500);
    
        return () => clearInterval(intervalId);
      }, []);

      function showNavBar(e) {
        if (e.target.checked) {
            if (mobileNav.current) {
                mobileNav.current.style.top = "9vh";
                setisNavOpen(true);
            }
        } else {
            if (mobileNav.current) {
                mobileNav.current.style.top = "-91vh";
                setisNavOpen(false);
            }
        }
    }

    function handleItemClick(item) {
        if (mobileNav.current && isNavOpenUseRef.current) {
            mobileNav.current.style.top = "-91vh";
            setisNavOpen(false);
            isNavOpenUseRef.current.checked = false;
        }
        setSelectedItem(item);
    }

    return (
        <>
            <header className='bg-white dark:bg-black h-[9vh]  p-1 flex items-center justify-center shadow-sm relative z-[100] '>
                <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303023/PortfolioDark_jiuidd.png" className='w-[140px] absolute lg:left-4 left-0 hidden dark:block' />
                <img src="https://res.cloudinary.com/dnahmeyxh/image/upload/v1724303023/PortfolioLight_wgnmx7.png" className='w-[140px] absolute lg:left-4 left-0 block dark:hidden' />
                <nav className='hidden lg:block'>
                    <ul className='flex gap-[60px] dark:text-white'>
                        {liName.map((element, index) => (
                            <li key={index}>
                                <a
                                    href={`#${element}`}
                                    className={`font-bold cursor-pointer rounded-md p-2 z-[1]  transition-all relative border-b-2 border-transparent hover:text-[#0cc0df] overflow-hidden ${selectedItem === element ? 'border-b-[#0cc0df] ' : ''}`}
                                    onClick={() => handleItemClick(element)}
                                >{element}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                {/* mobileNav */}
                <div className='h-[91vh] transition-all w-screen flex lg:hidden z-[-1] absolute top-[-91vh] bg-white dark:bg-black' ref={mobileNav}>
                    <ul className='flex flex-col items-center w-full h-full justify-around'>
                        {liName.map((element, index) => (
                            <li  key={index}>
                                <a
                                    href={`#${element}`}
                                    className={`w-full text-center font-medium hover:bg-[#0cc0df] cursor-pointer p-2 z-[1] dark:text-white border-b-2 border-transparent rounded-md transition-all ${selectedItem === element ? 'border-b-[#0cc0df]' : ''}`}
                                    onClick={() =>
                                        handleItemClick(element)
                                    }
                                >
                                    {element}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='h-full block absolute right-10 lg:right-3'>
                    <ToggleComponent />
                </div>
                <div className='h-full flex lg:hidden items-center text-[#0cc0df] dark:text-white absolute right-3 text-[25px]'>
                    <input type="checkbox" className='hidden' id='mobilerNav' onChange={showNavBar} ref={isNavOpenUseRef} />
                    <label htmlFor='mobilerNav'>
                        <i className={`fa-solid ${isNavOpen ? 'fa-xmark' : 'fa-bars'} cursor-pointer`}></i>
                    </label>
                </div>
            </header>
        </>
    );
}

export default Navbar;
