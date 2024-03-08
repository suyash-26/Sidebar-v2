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

    //   to highlight active tab
    const [activeTab,setActiveTab] = useState(0);

    const showSidebar = ()=>{
        setSidebar(!sidebar);
    }
    const handleTab = (key)=>{
        setActiveTab(key);
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
                    <li key={0} className={activeTab===0?'nav-text active-tab':'nav-text'} onClick={()=>handleTab(0)}>
                        <Link to="/">
                            <FaHome/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li key={1} className={activeTab===1?'nav-text active-tab':'nav-text'} onClick={()=>handleTab(1)}>
                        <Link to="/contact">
                            <IoIcons.IoMdContacts/>
                            <span>Contact</span>
                        </Link>
                    </li>
                    <li key={2} className={activeTab===2?'nav-text active-tab':'nav-text'} onClick={()=>handleTab(2)}>
                        <Link to="/about">
                            <IoIcons.IoIosInformationCircleOutline />
                            <span>About Us</span>
                        </Link>
                    </li>
                    <li key={3} className={activeTab===3?'nav-text active-tab':'nav-text'} onClick={()=>handleTab(3)}>
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
