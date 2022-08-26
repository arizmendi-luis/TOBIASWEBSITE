import React, {useState} from 'react'; 
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from 'react-icons/ai'; 
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'; 
import '../CSS/SideBar.css'; 
import {IconContext} from 'react-icons';   
import SSILogo from '../../Images/Logo_BlackSubText.png' 
import {HashLink} from 'react-router-hash-link'
 
function Sidebar() { 
    const [sidebar, setSidebar] = useState(false); 
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <> 
            <IconContext.Provider value={{color:'#fff'}}> 
                <div className = 'navbarEnd'>   
                    <Link to="#" className="menu-bars"> 
                        <FaIcons.FaBars onClick={showSidebar}/>      
                    </Link>     
                </div> 
                <div className = 'navbarTitle'>   
                      <a href='/'><img height="80px" src={SSILogo} alt="Project TOBIAS w/ NASA + SSI Logo" /></a>
                </div> 
                 <div className = 'navbar'>   
                </div>  
                <nav className={sidebar ? 'nav-menu active': 'nav-menu'}> 
                    <ul className="nav-menu-items" onClick={showSidebar}>  
                        <li className='navbar-toggle'>  
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/> 
                            </Link>
                        </li> 
                        {SidebarData.map((item, index) => { 
                            return( 
                                <li key={index} className={item.cName}>
                                    <HashLink to={item.link} smooth>  
                                        {item.icon}  
                                        <span>{item.title}</span>  
                                    </HashLink>
                                </li>
                            )
                        })} 
                    </ul> 
                </nav>  
            </IconContext.Provider>
        </>
    )
}

export default Sidebar
