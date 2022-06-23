import React, { useState, useEffect } from 'react';
import { FaLightbulb, FaMoon } from 'react-icons/fa';

const SwitcherHeader = () => {
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

    }, []);
    return (
        
        <button onClick={switchColor}>
            <span className="setColor dark"><FaLightbulb /></span>
            <span className="setColor light"><FaMoon /></span>
            <i className="visually-hidden">Menu Theme</i>
        </button>
       
    )
}

export default SwitcherHeader;