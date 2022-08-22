import React from 'react'
import '../CSS/boxes.css' 
import {text} from '../text/About0' 
import Proposal from './Files/Proposal.pdf' 

import figure1 from '../../Images/developmentImgs/Figure1.png'

function About() {
  return (
    <div>
           <p className='topSpace' id='About'></p> 
          <h2 className='titleBox'>About</h2>       

          <div className='sideBySide'>
          <div className='halfBox'>  
            <img  className='centerPic' src={figure1} alt='Infographic of NASAs TOBIAS project'></img>
          </div>  
          <div className='halfBox'>  
            <h2 className='centerTitle'>The TOBIAS Project</h2>
            <p>{text}</p> 
            <a href={Proposal} target="_blank" rel="noreferrer">
              <button  type="button" 
              className='buttonCenter'> Download Our Abstract</button>
            </a>  
            <p></p>
          </div> 
          </div>       
    </div>
  )
}

export default About
