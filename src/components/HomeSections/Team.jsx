import React, {useContext} from 'react' 
import '../CSS/boxes.css' 
import {text} from '../text/Team' 

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import{ faGlobe} from '@fortawesome/free-solid-svg-icons'; 
import{faWikipediaW} from '@fortawesome/free-brands-svg-icons'; 
import{ModeContext} from '../Context/ModeContext' 

import TeamLogos from '../../Images/developmentImgs/LogoDrawing (3).png'

function Team() { 
  const {mode} = useContext(ModeContext);  
  if(mode) { 
    return ( 
      <div> 
      <p className='topSpace' id='Team'></p>
      <h2 className='titleBox'>Team</h2>       
       <div className='box'>   
       <h2 className='centerTitle'>The Team</h2>
       <p>{text}</p> 
       <p className='centerTitle'><a 
                             href='https://ssi-wiki.stanford.edu/Main_Page' 
                             className='wiki social' 
                           > 
                             <FontAwesomeIcon icon={faWikipediaW} size='2x'/> 
                           </a>  
                           <a 
                             href='https://stanfordssi.org/' 
                             className='wiki social' 
                           > 
                             <FontAwesomeIcon icon={faGlobe} size='2x'/> 
                           </a></p> 
                           <img className = 'centerPic2' src={TeamLogos} alt='NASA logo above SSI logo'></img> 
       </div>       
   </div>
    )
  } 
  else {
  return (
    <div> 
       <p className='topSpace' id='Team'></p>
      <h2 className='titleBox'>Team</h2>       
        <div className='sideBySide'>
        <div className='halfBox'>  
        <img className='centerPic' src={TeamLogos} alt= 'NASA logo above SSI logo'></img>
        </div>  
        <div className='halfBox'>  
        <h2 className='centerTitle'>The Team</h2>
        <p>{text}</p> 
        <p className='centerTitle'><a 
                              href='https://ssi-wiki.stanford.edu/Main_Page' 
                              className='wiki social' 
                            > 
                              <FontAwesomeIcon icon={faWikipediaW} size='2x'/> 
                            </a>  
                            <a 
                              href='https://stanfordssi.org/' 
                              className='wiki social' 
                            > 
                              <FontAwesomeIcon icon={faGlobe} size='2x'/> 
                            </a></p> 
        </div> 
        </div>       
    </div>
  ) 
  }
}

export default Team; 
