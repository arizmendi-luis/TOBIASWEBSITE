import React from 'react'
import WelcomeBanner from '../components/HomeSections/WelcomeBanner'  
import HorizontalNav from '../components/NavigationBars/HorizontalNav'  
import Container from 'react-bootstrap/esm/Container' 
import About from '../components/HomeSections/About'
import Development from '../components/HomeSections/Development' 
import Team from '../components/HomeSections/Team' 
import Contact from '../components/HomeSections/Contact'
import EndBanner from '../components/HomeSections/EndBanner'

function Home() {
  return (
    <div> 
        <WelcomeBanner/>  
        <Container> 
          <HorizontalNav/>   
          <About/> 
          <Development/> 
          <Team/> 
          <Contact/> 
        </Container> 
        <EndBanner/>
    </div>
  )
}

export default Home