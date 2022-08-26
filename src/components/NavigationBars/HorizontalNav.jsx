import React from 'react' 
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";   
import Nav from "react-bootstrap/Nav";  
import '../CSS/banner.css'
let margin = '.7rem'
function HorizontalNav() {
  return (
    <div style={{marginTop:'1rem'}}>
       <Navbar bg="dark" variant="dark" className='navbarH'>
            <Container>
                <Navbar.Brand smooth className= 'navbarBrand' href="/">TOBIAS NAV</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link style={{marginLeft: margin, marginRight: margin}} href="#Home">Home</Nav.Link>
                    <Nav.Link style={{marginLeft: margin, marginRight: margin}} href="#About" >About</Nav.Link> 
                    <Nav.Link style={{marginLeft: margin, marginRight: margin}} href="#Development" smooth>Development</Nav.Link>  
                    <Nav.Link style={{marginLeft: margin, marginRight: margin}} href="#Team" smooth>Team</Nav.Link> 
                    <Nav.Link style={{marginLeft: margin, marginRight: margin}} href="#Contact" smooth>Contact</Nav.Link> 
                </Nav> 
            </Container>  
        </Navbar> 
        <p className='space'></p>  
    </div>
  )
}

export default HorizontalNav
