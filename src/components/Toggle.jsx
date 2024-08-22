import { useEffect, useRef } from 'react';
import '../css/toggleTheme.css';

function ToggleComponent() {
    const toggleRef = useRef(null);
    useEffect(() => {
        const themeMode = localStorage.getItem('theme');

        if (themeMode !== null) {
            if (themeMode === 'dark') {
                toggleRef.current.checked = true;
                document.documentElement.classList.add('dark');
            }
            else {
                toggleRef.current.checked = false;
                document.documentElement.classList.remove('dark');
            }
        }

    }, []);

    function setDarkMode(e) {
        if (e.target.checked) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    return (
        <>
            <div className="h-full w-[52px] flex items-center justify-center  transition-all " >
                <input type="checkbox" id="themeDiv" onChange={setDarkMode} ref={toggleRef} />
                <label htmlFor='themeDiv' className='w-full h-[25px] bg-white border-2 border-[#0cc0df] absolute cursor-pointer rounded-xl flex items-center'>
                    <span className='h-5 mx-[1px] border border-[#0cc0df] w-5 flex bg-white rounded-[50%] transition-all' id='toogleBall'></span>
                </label>
            </div>
        </>
    )
}

export default ToggleComponent;
