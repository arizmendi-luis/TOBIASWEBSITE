import React, {useContext} from 'react' 
import '../CSS/boxes.css'  
import {SiThingiverse} from 'react-icons/si'  
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import{faGithub} from '@fortawesome/free-brands-svg-icons';
import {text0, text1, text2, text3, text4, text5, 
text6, text7, text8 } from '../text/Development'  

import CalculationDoc from '../HomeSections/Files/TOBIAS Pitch Axis Stabilty Analysis (1).pdf'
//Development images 
import figure2 from '../../Images/developmentImgs/Figure2.png' 
import figure3 from '../../Images/developmentImgs/Figure3.png' 
import figure4 from '../../Images/developmentImgs/Figure4.jpg'  
import figure5 from '../../Images/developmentImgs/Figure5.png' 
import figure6 from '../../Images/developmentImgs/Figure6.png' 
import figure7 from '../../Images/developmentImgs/Figure7.jpg' 
import figure8 from '../../Images/developmentImgs/Figure8.jpg' 
import figure9 from '../../Images/developmentImgs/Figure9.jpg' 
import figure10 from '../../Images/developmentImgs/Figure10.jpg' 
import figure101 from '../../Images/developmentImgs/Figure101.jpg'  
import{ModeContext} from '../Context/ModeContext'

let ThingLink = '' 
let gitLink = ''

function Development() {
    const {mode} = useContext(ModeContext); 
    if (mode) {  
        return (
        <>
        <div> 
            <p className='topSpace' id='Development'></p>
           <h2 className='titleBox'>Development</h2>       
           
            <div className='box'> 
                    <h2 className='centerTitle'>Brainstroming</h2>
                    <p>{text0}</p>  
                    <a href={CalculationDoc} target="_blank" rel="noreferrer"> 
                    <img  className='centerPic' src={figure2} alt='Free Body Diagram of TOBIAS towbody'></img> 
                  <button  type="button"  
                  className='buttonCenter'>Download Detailed Analysis</button>
                </a>   
            </div>  

            <div className='box'>  
                <h2 className='centerTitle'>Prototype I</h2>  
                <p>{text1}</p>   
                <img  className='centerPic' src={figure3} alt='Empange, Wooden Dowel and 8" styrofoam ball'></img>    
                <img  className='centerPic' src={figure4} alt='Person Holding prototype of TOBIAS towbody'></img>
            </div> 

            <div className='box'>     
                <h2 className='centerTitle'>Testing Prototype I</h2>
                <p>{text2}</p> 
                <h className='centerTitle'>VIDEO 1</h> 
            </div>  

        <div className='box'>   
            <h2 className='centerTitle'>CAD {'&'} Aerodynamics</h2>
            <p>{text3}</p>  
            <a href={ThingLink} target="_blank" rel="noreferrer"> 
            <img  className='centerPic' src={figure5} alt='Exploded view of Teardrop CAD'></img>  
            <img  className='centerPic' src={figure6} alt='Teardrop CAD model'></img> 
            <p></p>
              <button  type="button" 
              className='buttonCenter'>See CAD Models on Thigiverse <SiThingiverse/></button>
            </a>     
        </div> 

        <div className='box'>  
            <h2 className='centerTitle'>Prototype II</h2>
            <p>{text4}</p> 
            <img  className='centerPic' src={figure7} alt='Prototype II hanging isometric view'></img>  
            <img  className='centerPic' src={figure8} alt='Prototype II bottom view'></img>    
        </div>  

        <div className='box'>  
            <h2 className='centerTitle'>Electronics</h2>
            <p>{text5}</p>  
            <a href={gitLink} target="_blank" rel="noreferrer">
            <img  className='centerPic' src={figure9} alt='Prototype II hanging isometric view'></img>  
            <img  className='centerPic' src={figure101} alt='Prototype II bottom view'></img> 
            <p></p>
              <button  type="button" 
              className='buttonCenter'>See Github Code  <FontAwesomeIcon icon={faGithub} size='1x'/></button>
            </a>    
        </div>  

        <div className='box'>    
            <h2 className='centerTitle'>Testing Prototype II</h2>
            <p>{text6}</p> 
            <h className='centerTitle'>VIDEO 2</h>    
        </div>  

        <div className='box'>   
                <h2 className='centerTitle'>Data Results</h2>
                <p>{text7}</p> 
                <h className='centerTitle'>Data Charts Photos</h>  
        </div>  

        <div className='box'>    
                <h2 className='centerTitle'>Prototype III</h2>
                <p>{text8}</p> 
                <img  className='centerPic' src={figure10} alt='Prototype II bottom view'></img> 
        </div> 

    </div> 
        </>
    ) 
    }
    else{
    return (  
    <>
    <div> 
        <p className='topSpace' id='Development'></p>
       <h2 className='titleBox'>Development</h2>       
       
        <div className='sideBySide'>
            <div className='halfBox'>  
            <img  className='centerPic' src={figure2} alt='Free Body Diagram of TOBIAS towbody'></img>
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Brainstroming</h2>
                <p>{text0}</p>  
                <a href={CalculationDoc} target="_blank" rel="noreferrer">
              <button  type="button" 
              className='buttonCenter'>Download Detailed Analysis</button>
            </a>  
            </div> 
        </div>  

        <div className='sideBySide'>
            <div className='halfBox'>  
            <img  className='centerPic' src={figure3} alt='Empange, Wooden Dowel and 8" styrofoam ball'></img>  
            <img  className='centerPic' src={figure4} alt='Person Holding prototype of TOBIAS towbody'></img> 
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Prototype I</h2>
                <p>{text1}</p> 
            </div>  
        </div> 

        <div className='sideBySide'>
            <div className='halfBox'>  
            <h className='centerTitle'>VIDEO 1</h> 
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Testing Prototype I</h2>
                <p>{text2}</p> 
            </div>  
        </div> 

        <div className='sideBySide'>
            <div className='halfBox'>  
            <img  className='centerPic' src={figure5} alt='Exploded view of Teardrop CAD'></img>  
            <img  className='centerPic' src={figure6} alt='Teardrop CAD model'></img> 
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>CAD {'&'} Aerodynamics</h2>
                <p>{text3}</p>  
                <a href={ThingLink} target="_blank" rel="noreferrer">
              <button  type="button" 
              className='buttonCenter'>See CAD Models on Thigiverse <SiThingiverse/></button>
            </a>  
            </div>  
        </div> 

        <div className='sideBySide'>
            <div className='halfBox'>  
            <img  className='centerPic' src={figure7} alt='Prototype II hanging isometric view'></img>  
            <img  className='centerPic' src={figure8} alt='Prototype II bottom view'></img> 
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Prototype II</h2>
                <p>{text4}</p> 
            </div>  
        </div>  

        <div className='sideBySide'>
            <div className='halfBox'>  
            <img  className='centerPic' src={figure9} alt='Prototype II hanging isometric view'></img>  
            <img  className='centerPic' src={figure101} alt='Prototype II bottom view'></img>
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Electronics</h2>
                <p>{text5}</p>  
                <a href={gitLink} target="_blank" rel="noreferrer">
              <button  type="button" 
              className='buttonCenter'>See Github Code  <FontAwesomeIcon icon={faGithub} size='1x'/></button>
            </a>  
            </div>  
        </div>  

        <div className='sideBySide'>
            <div className='halfBox'>  
            <h className='centerTitle'>VIDEO 2</h>
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Testing Prototype II</h2>
                <p>{text6}</p> 
            </div>  
        </div>  

        <div className='sideBySide'>
            <div className='halfBox'>  
                <h className='centerTitle'>Data Charts Photos</h>
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Data Results</h2>
                <p>{text7}</p> 
            </div>  
        </div>  


        <div className='sideBySide'>
            <div className='halfBox'>    
            <img  className='centerPic' src={figure10} alt='Prototype II bottom view'></img>
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Prototype III</h2>
                <p>{text8}</p> 
            </div>  
        </div> 

    </div> 
    </> 
  ) 
    }
}

export default Development
