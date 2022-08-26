import React from 'react' 
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';  

export const SidebarData = [ 
{    
    title: 'Home', 
    link: '#Home', 
    icon: <AiIcons.AiFillHome/>,
    cName: 'nav-text'
},  
{    
    title: 'About',  
    icon: <AiIcons.AiOutlineBuild/>, 
    cName: 'nav-text', 
    link: '#About',
},  
{    
    title: 'Development', 
    link: '#Development', 
    icon: <IoIcons.IoIosRocket/>, 
    cName: 'nav-text'
},  
{    
    title: 'Team', 
    link: '#Team', 
    icon: <AiIcons.AiOutlineTeam/>, 
    cName: 'nav-text'
}, 
/*  
{    
    title: 'Settings', 
    path: '/settings', 
    icon: <AiIcons.AiFillSetting/>,
    cName: 'nav-text'
}, 
/* 
{    
    title: 'User', 
    path: '/user', 
    icon: <FaIcons.FaUserCircle/>,
    cName: 'nav-text'
}, 
*/ 
{    
    title: 'Contact', 
    link: '#Contact', 
    icon: <FaIcons.FaEnvelopeOpenText/>,
    cName: 'nav-text'
},  
]