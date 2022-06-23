import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaMoon } from 'react-icons/fa';
const ColorSwitcher = () => {
    const [theme, setTheme] = useState('');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');


    const switchColor = () => {
        document.querySelector('body').classList.toggle("active-dark-mode");
        if((!theme && prefersDarkScheme.matche) || theme==='light'){
            window.localStorage.setItem("theme", "dark");
            setTheme("dark");
        }else{
            window.localStorage.setItem("theme", "light");
            setTheme("light");
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);

        if(localTheme==='dark') {
            document.body.classList.add("active-dark-mode");
        } else if(prefersDarkScheme.matches && localTheme==='light'){
            document.body.classList.remove("active-dark-mode");
        }

        if (prefersDarkScheme.matches && !localTheme) {
            document.body.classList.add("active-dark-mode");
        } else if(!prefersDarkScheme.matches && localTheme!=='dark') {
            document.body.classList.remove("active-dark-mode");
        }
    }, []);
    return (
        <div className="my_switcher d-none d-lg-block">
            <button onClick={switchColor}>
                <span className="setColor dark"><FaLightbulb /></span>
                <span className="setColor light"><FaMoon /></span>
                <i className="visually-hidden">Menu Theme</i>
            </button>
        </div>
    )
}

export default ColorSwitcher;