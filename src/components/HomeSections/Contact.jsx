import React, {useContext} from 'react'
import '../CSS/boxes.css' 
import '../CSS/banner.css' 
//import {text, text1} from '../text/Contact' 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import{ 
    faEnvelope, 
    faGlobe, 
  } from '@fortawesome/free-solid-svg-icons' 
  import{ 
    //faGithub,   
    faWikipediaW,  
    faYoutube,
  } from '@fortawesome/free-brands-svg-icons'; 
  import{ModeContext} from '../Context/ModeContext'

function Contact() { 
  const {mode} = useContext(ModeContext);  
  if(mode) { 
    return ( 
      <div>
      <p className='topSpace' id='Contact'></p>
      <h2 className='titleBox'>Contact </h2>       
      <div className='box'> 
                          <h2 className='centerTitle'>Contact Us At</h2>  

                           <p className='centerTitle'>Project Email:
                           <a href='mailto:TOBIAS_Project@outlook.com'className='Mail social'>  
                            <FontAwesomeIcon icon={faEnvelope} size='2x'/></a></p> 
                          <h2 className='centerTitle'>Or Learn More About us through these Links</h2> 
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
                          </a> 

                          <a 
                            href='https://www.youtube.com/watch?v=aOPAU5mK-lQ&list=PL3CqGSQ-n58Ekk7xk3Rmcc3Y7qGSqUf4I' 
                            className='youtube social' 
                          > 
                            <FontAwesomeIcon icon={faYoutube} size='2x'/> 
                          </a></p> 

                          <p></p>   
                                                
          </div>  
  </div>
) 
  } 
  else{
  return (
    <div>
        <p className='topSpace' id='Contact'></p>
        <h2 className='titleBox'>Contact </h2>       
        <div className='sideBySide'>
            <div className='halfBox'>  
                <h2  className='centerTitle'>Contact Us</h2> 
                <p className='centerTitle'>Project Co-lead Email:
                           <a href='mailto:TOBIAS_Project@outlook.com'className='Mail social'>  
                            <FontAwesomeIcon icon={faEnvelope} size='2x'/></a></p> 
                    </div>  
                        <div className='halfBox'>  
                            <h2 className='centerTitle'>Or Learn More About us at</h2>  
                              <p className='centerTitle'>SSI's Wikiapedia Page: <a 
                              href='https://ssi-wiki.stanford.edu/Main_Page' 
                              className='wiki social' 
                            > 
                              <FontAwesomeIcon icon={faWikipediaW} size='2x'/> 
                            </a></p>  
                            
                            <p className='centerTitle'> SSI's Website: <a 
                              href='https://stanfordssi.org/' 
                              className='wiki social' 
                            > 
                              <FontAwesomeIcon icon={faGlobe} size='2x'/> 
                            </a></p> 
                            <p className='centerTitle'>Projects Testing Playlist:<a 
                            href='https://www.youtube.com/watch?v=aOPAU5mK-lQ&list=PL3CqGSQ-n58Ekk7xk3Rmcc3Y7qGSqUf4I' 
                            className='youtube social' 
                          > 
                            <FontAwesomeIcon icon={faYoutube} size='2x'/> 
                          </a></p>    
                            <p></p>   
                                                  
            </div> 
        </div> 
    </div>
  ) 
  }
}

export default Contact
