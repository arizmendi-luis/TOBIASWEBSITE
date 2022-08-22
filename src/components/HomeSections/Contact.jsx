import React from 'react'
import '../CSS/boxes.css' 
import '../CSS/banner.css' 
import {text, text1} from '../text/Contact' 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import{ 
    faEnvelope, 
    faGlobe, 
  } from '@fortawesome/free-solid-svg-icons' 
  import{ 
    faYoutube, 
    faGithub, 
    faLinkedin,   
    faWikipediaW, 
  } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div>
        <p className='topSpace' id='Contact'></p>
        <h2 className='titleBox'>Contact </h2>       
        <div className='sideBySide'>
            <div className='halfBox'>  
                <h2  className='centerTitle'>Photo</h2>
                    </div>  
                        <div className='halfBox'>  
                            <h2 className='centerTitle'>Contact Us</h2>
                            <p>{text}</p> 
                             <p className='centerTitle'><a href='mailto:larizmen@stanford.edu'className='Mail social'>  
                                <FontAwesomeIcon icon={faEnvelope} size='2x'/></a>  
                                <a 
                                    href='mailto:meirew@stanford.edu' 
                                    className='Mail social' 
                                  >  
                                    <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                                  </a></p> 
                              <p>{text1}</p>  
                              <p className='centerTitle'><a 
                              href='https://ssi-wiki.stanford.edu/Main_Page' 
                              className='wiki social' 
                            > 
                              <FontAwesomeIcon icon={faWikipediaW} size='2x'/> 
                            </a>  
                            <a 
                              href='https://github.com/arizmendi-luis' 
                              className='Github social' 
                            > 
                              <FontAwesomeIcon icon={faGithub} size='2x'/> 
                            </a> 
                            <a 
                              href='https://stanfordssi.org/' 
                              className='wiki social' 
                            > 
                              <FontAwesomeIcon icon={faGlobe} size='2x'/> 
                            </a></p>    
                            <p></p>   
                                                  
            </div> 
        </div> 
    </div>
  )
}

export default Contact
