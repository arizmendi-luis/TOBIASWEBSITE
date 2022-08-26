import React, {useContext} from 'react'
import WelcomeBanner from '../components/HomeSections/WelcomeBanner'  
import HorizontalNav from '../components/NavigationBars/HorizontalNav'  
import Container from 'react-bootstrap/esm/Container' 
import About from '../components/HomeSections/About'
import Development from '../components/HomeSections/Development' 
import Team from '../components/HomeSections/Team' 
import Contact from '../components/HomeSections/Contact'
import EndBanner from '../components/HomeSections/EndBanner' 
import ModeSwitch from '../components/HomeSections/ModeSwitch' 
import{ModeContext} from '../components/Context/ModeContext'

function Home() { 
  const {mode} = useContext(ModeContext);
  return (  
    <div style={{backgroundColor:'#f5f5f5'}}> 
        <WelcomeBanner/>  
        <Container>   
          <ModeSwitch/>  
          {mode ? <></>:<HorizontalNav />}  
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