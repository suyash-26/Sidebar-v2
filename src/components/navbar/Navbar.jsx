import React, { useState } from 'react'
import "./navbar.css"
import * as FaIcons from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = ()=>{
        setSidebar(!sidebar);
    }
  return (
    <>
    <IconContext.Provider value={{color:"white"}}>
        <div className="navbar">
            <Link to="#" className='menu-bars' onClick={showSidebar}>
                <FaIcons.FaBars/>
            </Link>
        </div>
        <nav className={sidebar?"nav-menu active":"nav-menu"}>
            <ul className="menu-items">
                    <li className='navbar-toggle' onClick={showSidebar}>
                    <Link to="#" className='menu-bars'>
                        <IoIcons.IoMdClose/>
                    </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to="/">
                            <FaHome/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to="/contact">
                            <IoIcons.IoMdContacts/>
                            <span>Contact</span>
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to="/about">
                            <IoIcons.IoIosInformationCircleOutline />
                            <span>About Us</span>
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to="/services">
                            <FaProductHunt />
                            <span>Services</span>
                        </Link>
                    </li>
            </ul>
        </nav>
    </IconContext.Provider>
    </>
  )
}
