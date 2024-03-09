import React, { useEffect, useState} from 'react'
import "./sidebar.css"
import * as FaIcons from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import { IconContext } from 'react-icons';
import { Link,useLocation } from 'react-router-dom';


export default function Sidebar() {
    const [sidebar,setSidebar] = useState(true);
    const [activeTab,setActiveTab] = useState('/');
const location = useLocation();
useEffect(() => {
    console.log('Path changed:', location.pathname);
    setActiveTab(location.pathname)
  }, [location.pathname]); 


    const showSidebar = ()=>{
        setSidebar(!sidebar);
    }
    const handleTab = (key)=>{
        setActiveTab(key);
    }
      

  return (
    <>
    <IconContext.Provider value={{color:"white"}}>
        <nav className={sidebar?"nav-menu active":"nav-menu"}>
            <ul className="menu-items">
                    <li className='navbar-toggle' onClick={showSidebar}>
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars/>
                    </Link>
                    </li>
                    <li key={0} className={activeTab==='/'?'nav-text active-tab':'nav-text'} onClick={()=>handleTab('/')}>
                        <Link to="/">
                            <FaHome/>
                            {sidebar?<span>Home</span>:null}
                        </Link>
                    </li>
                    <li key={1} className={activeTab==='/contact'?'nav-text active-tab':'nav-text'} onClick={()=>handleTab('/contact')}>
                        <Link to="/contact">
                            <IoIcons.IoMdContacts/>
                            {sidebar?<span>Contact</span>:null}
                        </Link>
                    </li>
                    <li key={2} className={activeTab==='/about'?'nav-text active-tab':'nav-text'} onClick={()=>handleTab('/about')}>
                        <Link to="/about">
                            <IoIcons.IoIosInformationCircleOutline />
                            {sidebar?<span>About Us</span>:null}
                        </Link>
                    </li>
                    <li key={3} className={activeTab==="/services"?'nav-text active-tab':'nav-text'} onClick={()=>handleTab("/services")}>
                        <Link to="/services">
                            <FaProductHunt />
                            {sidebar?<span>Services</span>:null}
                        </Link>
                    </li>
            </ul>
        </nav>
    </IconContext.Provider>
    </>
  )
}
