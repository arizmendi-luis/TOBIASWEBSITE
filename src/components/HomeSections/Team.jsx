import React, {useContext} from 'react' 
import '../CSS/boxes.css' 
import {text} from '../text/Team' 
import {text0} from '../text/Events' 

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import{ faGlobe} from '@fortawesome/free-solid-svg-icons'; 
import{faWikipediaW} from '@fortawesome/free-brands-svg-icons'; 
import{ModeContext} from '../Context/ModeContext' 

//import TeamLogos from '../../Images/developmentImgs/LogoDrawing (3).png' 
import TeamLogos from '../../Images/Logo_BlackSubText.png' 
import JPL from '../../Images/NASAJPL.jpg' 
import Award from '../../Images/Award.png' 
import Slides from './Files/TOBIAS JPL Presentation.pdf'  
import poster from './Files/poster.pdf'

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
       <div className='box'>   
       <h2 className='centerTitle'>Events</h2>
       <p>{text0}</p> 
      <div className='halfBox'> 
        <img className = 'centerPic2' src={JPL} alt='Co-leads at JPL Mission Control room'></img> 
        </div> 
        <div className='halfBox'>  
        <img className = 'centerPic2' src={Award} alt='CO-lead reciving first place award'></img>  
        </div> 
       <a href={Slides} target="_blank" rel="noreferrer"><button  type="button"className='buttonCenter'> Download Our JPL Slides</button></a> 
       <p></p> 
       <a href={poster} target="_blank" rel="noreferrer"><button  type="button"className='buttonCenter'> Download Our IPPW Poster</button></a>  
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
        <div className='halfBoxLogo'>  
        <img className='TeamLogo' src={TeamLogos} alt= 'NASA logo above SSI logo'></img>
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

        <div className='sideBySide'>    
        <div className='halfBox'>
       <h2 className='centerTitle'>Events</h2> 
       <p>{text0}</p> 
       <a href={Slides} target="_blank" rel="noreferrer"><button  type="button"className='buttonCenter'> Download Our JPL Slides</button></a> 
       <p></p> 
       <a href={poster} target="_blank" rel="noreferrer"><button  type="button"className='buttonCenter'> Download Our IPPW Poster</button></a>   
       </div> 
       <div className='halfBox'>
      <div className='halfBox'> 
        <img className = 'centerPic2' src={JPL} alt='Co-leads at JPL Mission Control room'></img> 
        </div> 
        <div className='halfBox'>  
        <img className = 'centerPic2' src={Award} alt='CO-lead reciving first place award'></img>  
        </div> 
      </div>      
   </div>

    </div>
  ) 
  }
}

export default Team; 
