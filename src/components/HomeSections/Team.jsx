import React from 'react' 
import '../CSS/boxes.css' 
import {text} from '../text/Team' 

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import{ faGlobe} from '@fortawesome/free-solid-svg-icons'; 
  import{faWikipediaW} from '@fortawesome/free-brands-svg-icons';

function Team() {
  return (
    <div> 
       <p className='topSpace' id='Team'></p>
      <h2 className='titleBox'>Team</h2>       
        <div className='sideBySide'>
        <div className='halfBox'>  
        <h2  className='centerTitle'>Photo</h2>
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

export default Team
