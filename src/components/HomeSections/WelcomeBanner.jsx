import React from 'react' 
import '../CSS/banner.css'  
import scTobias from "../../Images/scTobias.png" 
import '../CSS/boxes.css'  
import Container from 'react-bootstrap/esm/Container'

function WelcomeBanner() {
  return (  
    <> 
      <div className='banner' id='Home'>  
      <Container>
        <img src={scTobias}  alt="TOBIAS: Tethered Observatory for Ballon Based Imaging and Atmospheric Sampling " className='bannerImage' />  
        <p className='bannerSub'>Stanford Student Space Initiative Joint Project with NASA JPL</p>
        </Container>
      </div>  
      <div className='bottomBar'></div> 
          
    </>  
      
  )
}

export default WelcomeBanner
