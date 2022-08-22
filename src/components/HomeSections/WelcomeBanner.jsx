import React from 'react' 
import '../CSS/banner.css'  
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import{ 
  faYoutube, 
  faGithub, 
  faLinkedin, 
} from '@fortawesome/free-brands-svg-icons'; 
import{ 
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons' 
import * as SiIcons from "react-icons/si";  
import scTobias from "../../Images/scTobias.png" 
import '../CSS/boxes.css' 

function WelcomeBanner() {
  return (  
    <>
      <div className='banner' id='Home'>  
        <img src={scTobias}  alt="TOBIAS: Tethered Observatory for Ballon Based Imaging and Atmospheric Sampling " className='bannerImage' />  
        <p className='bannerSub'>Stanford Student Space Initiative Joint Project with NASA</p>
      </div> 
      <div className='bottomBar'></div> 
    </>  
      
  )
}

export default WelcomeBanner
