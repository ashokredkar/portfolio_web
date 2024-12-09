import React, { useState } from 'react';
import { MoonIcon, SunIcon, navLinks } from '../data';
import { IoIosCloseCircle } from "react-icons/io";

const Sidebar = ({theme, setTheme, setSideMenu}) => {
    const [activeMenu, setActiveMenu] = useState('');

    return (
        <ul className="nav_links sidebar">
            <IoIosCloseCircle className='close_sidebar' onClick={() => setSideMenu(false)} />
            {navLinks.map((nav) => (
                <li key={nav.id} onClick={() => setSideMenu(false)}>
                    <a href={`#${nav.id}`} className={`${activeMenu === nav.title ? "active_menu" : ""}`}>
                        <span>{nav.title}</span>
                    </a>
                </li>
            ))}
            <div className={`nav_theme ${theme==="dark" ? "active" : ""}`} onClick={() => {setTheme(theme==="light" ? "dark" : "light")}}><span>{theme==="dark" ? <MoonIcon /> : <SunIcon />}</span></div>
        </ul>
    )
}

export default Sidebar