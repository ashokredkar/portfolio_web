import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { MoonIcon, SunIcon, navLinks } from '../data';
import { CiMenuFries } from "react-icons/ci";
import TextEffect from './effects/TextEffect';
import Sidebar from './Sidebar';

const Navbar = ({theme, setTheme}) => {
  const [activeMenu, setActiveMenu] = useState('');
  const [sideMenu, setSideMenu] = useState(false);
  const [show, setShow] = useState("visible");
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if(window.innerWidth > 786){
      if (window.scrollY > 100) {
        window.scrollY > lastScrollY ? setShow("hidden") : setShow("shadow");
      } else {
        setShow("visible");
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={`container ${show}`} id="navbar">
        <Link className='logo' to="/" onClick={() => setActiveMenu('')}>
          <TextEffect text="PORTFOLIO" />
        </Link>
        <ul className="nav_links">
          {navLinks.map((nav) => (
            <li key={nav.id} onClick={() => setActiveMenu(nav.title)}>
              <a href={`#${nav.id}`} className={`${activeMenu === nav.title ? "active_menu" : ""}`}>
                <span>{nav.title}</span>
              </a>
            </li>
          ))}
          <div className={`nav_theme ${theme==="dark" ? "active" : ""}`} onClick={() => {setTheme(theme==="light" ? "dark" : "light")}}><span>{theme==="dark" ? <MoonIcon /> : <SunIcon />}</span></div>
        </ul>
        <div className={`mobile_menu ${sideMenu ? "active" : ""}`}>
          <CiMenuFries onClick={() => setSideMenu(true)} />
          <Sidebar theme={theme} setTheme={setTheme} setSideMenu={setSideMenu} />
        </div>
    </div>
  )
}

export default Navbar