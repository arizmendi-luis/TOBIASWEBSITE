import React, {useContext} from 'react' 
import '../CSS/boxes.css'  
import {SiThingiverse, SiYoutube} from 'react-icons/si'  
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import{faGithub} from '@fortawesome/free-brands-svg-icons';
import {text0, text1, text2, text3, text4, text5, 
text6, text7, text8, WindCannonTesting } from '../text/Development'   

//import CalculationDoc from '../HomeSections/Files/TOBIAS Pitch Axis Stabilty Analysis (1).pdf'
//Development images 
//import figure2 from '../../Images/developmentImgs/Figure2.png' 
import designMethod from '../../Images/developmentImgs/designMethodology.png' 
import figure3 from '../../Images/developmentImgs/Figure3.png' 
import figure4 from '../../Images/developmentImgs/Figure4.jpg'  
import figure5 from '../../Images/developmentImgs/Figure5.png' 
import figure6 from '../../Images/developmentImgs/Figure6.png' 
import figure7 from '../../Images/developmentImgs/Figure7.jpg' 
import figure8 from '../../Images/developmentImgs/Figure8.jpg' 
import figure9 from '../../Images/developmentImgs/Figure9.jpg' 
//import figure10 from '../../Images/developmentImgs/Figure10.jpg' 
import figure101 from '../../Images/developmentImgs/Figure101.jpg'  
import{ModeContext} from '../Context/ModeContext' 
//import data1 from '../../Images/developmentImgs/data1.png' 
//import data2 from '../../Images/developmentImgs/data2.png' 
//import data3 from '../../Images/developmentImgs/data3.png' 
//import data4 from '../../Images/developmentImgs/data4.png'  
//import data5 from '../../Images/developmentImgs/data5.png' 
//import data6 from '../../Images/developmentImgs/data6.png' 
import data2 from '../../Images/developmentImgs/graph1.png'  
import data3 from '../../Images/developmentImgs/graph2.png'
import proIII from '../../Images/developmentImgs/prototypeIII.jpg'
import wcbI from '../../Images/developmentImgs/windTunnel.JPG' 
import wcbII from '../../Images/developmentImgs/windblaster2.JPG'


let ThingLink = 'https://www.thingiverse.com/thing:5481603' 
let gitLink = 'https://github.com/arizmendi-luis/TOBIASTowbodyIMUDataCollection' 
let Youtube = 'https://www.youtube.com/watch?v=aOPAU5mK-lQ&list=PL3CqGSQ-n58Ekk7xk3Rmcc3Y7qGSqUf4I' 
let VIDEO1 = 'https://www.youtube.com/embed/5Lz0PJzX9Xc'; 
let VIDEO2 = 'https://www.youtube.com/embed/_96WcaCnIEA'; 
let VIDEO3 = 'https://www.youtube.com/embed/LBVyO0dpLAU';

function Development() {
    const {mode} = useContext(ModeContext); 
    if (mode) {  
        return (
        <>
        <div> 
            <p className='topSpace' id='Development'></p>
           <h2 className='titleBox'>Development</h2>       
           
            <div className='box'> 
                    <h2 className='centerTitle'>Design Methodology</h2> 
                    <p>{text0}</p> 
                    <img  className='centerPic' src={designMethod} alt='Free Body Diagram of TOBIAS towbody'></img>  
                    <p></p>  
            </div>  

            <div className='box'>  
                <h2 className='centerTitle'>Prototype I</h2>  
                <p>{text1}</p>   
                <img  className='centerPicHalf' src={figure3} alt='Empange, Wooden Dowel and 8" styrofoam ball'></img>    
                <img  className='centerPicHalf' src={figure4} alt='Person Holding prototype of TOBIAS towbody'></img> 
                
                <p></p>  
            </div> 

            <div className='box'>     
                <h2 className='centerTitle'>Testing Prototype I</h2>
                <p>{text2}</p> 
                <div className='centerTitle'>
                    <iframe className='ratio' src = {VIDEO1} title="VIDEO 1" allowFullScreen></iframe>     
                </div> 
                <a href={Youtube} target="_blank" rel="noreferrer">
                <button  type="button" 
                className='buttonCenter'>Watch All Test Videos <SiYoutube/></button>
            </a>    
            </div>  

        <div className='box'>   
            <h2 className='centerTitle'>CAD {'&'} Aerodynamics</h2>
            <p>{text3}</p>  
             
            <img  className='centerPicHalf' src={figure5} alt='Exploded view of Teardrop CAD'></img>  
            <img  className='centerPicHalf' src={figure6} alt='Teardrop CAD model'></img> 
            <p></p> 
            <a href={ThingLink} target="_blank" rel="noreferrer">
              <button  type="button" 
              className='buttonCenter'>See CAD Models on Thigiverse <SiThingiverse/></button>
            </a>     
        </div> 

        <div className='box'>  
            <h2 className='centerTitle'>Prototype II</h2>
            <p>{text4}</p> 
            <img  className='centerPicHalf' src={figure7} alt='Prototype II hanging isometric view'></img>  
            <img  className='centerPicHalf' src={figure8} alt='Prototype II bottom view'></img>    
        </div>  

        <div className='box'>  
            <h2 className='centerTitle'>Electronics {'&'} Instrumentation</h2>
            <p>{text5}</p>  
            <a href={gitLink} target="_blank" rel="noreferrer">
            <img  className='centerPicHalf' src={figure9} alt='Prototype II hanging isometric view'></img>  
            <img  className='centerPicHalf' src={figure101} alt='Prototype II bottom view'></img> 
            <p></p>
              <button  type="button" 
              className='buttonCenter'>See Github Code  <FontAwesomeIcon icon={faGithub} size='1x'/></button>
            </a>    
        </div>  

        <div className='box'>    
            <h2 className='centerTitle'>Testing Prototype II</h2>
            <p>{text6}</p> 
            <div className='centerTitle'>
                <iframe className='ratio' src = {VIDEO2} title="VIDEO 2" allowFullScreen></iframe>     
            </div>  
            <a href={Youtube} target="_blank" rel="noreferrer">
                <button  type="button" 
                className='buttonCenter'>Watch All Test Videos <SiYoutube/></button></a>    
        </div>  

        <div className='box'>   
                <h2 className='centerTitle'>IMU Data</h2>
                <p>{text7}</p> 
                <img  className='centerPicHalf' src={data2} alt='Prototype III bottom view'></img> 
                <img  className='centerPicHalf' src={data3} alt='Prototype III bottom view'></img>
        </div>  

        <div className='box'> 
            <h2 className='centerTitle'>Prototype III</h2>
            <p>{text8}</p> 
            <img  className='centerPic' src={proIII} alt='Prototype II hanging isometric view'></img>  
            <iframe className='ratio' src = {VIDEO3} title="VIDEO 3" allowFullScreen></iframe>        
            <a href={Youtube} target="_blank" rel="noreferrer"> <button  type="button" className='buttonCenter'>Watch All Test Videos <SiYoutube/></button></a>  
        </div>  

        <div className='box'> 
            <h2 className='centerTitle'>Wind Cannon Testing</h2>
            <p>{WindCannonTesting}</p>  
            <img  className='centerPic' src={wcbII} alt='Probe approaching wind Cannon'></img> 
            <img  className='centerPic' src={wcbI} alt='Wind Cannon'></img>        
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
            <img  className='centerPic' src={designMethod} alt='Free Body Diagram of TOBIAS towbody'></img>
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Design Methodology</h2>
                <p>{text0}</p>   
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
            <div className='centerTitle'>
                    <iframe className='ratioDesktop' src = {VIDEO1} title="VIDEO 1" allowFullScreen></iframe>     
                </div>  
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Testing Prototype I</h2>
                <p>{text2}</p> 
                <a href={Youtube} target="_blank" rel="noreferrer">
                <button  type="button" 
                className='buttonCenter'>Watch All Test Videos <SiYoutube/></button></a> 
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
                <h2 className='centerTitle'>Electronics {'&'} Instrumentation</h2>
                <p>{text5}</p>  
                <a href={gitLink} target="_blank" rel="noreferrer">
              <button  type="button" 
              className='buttonCenter'>See Github Code  <FontAwesomeIcon icon={faGithub} size='1x'/></button>
            </a>  
            </div>  
        </div>  

        <div className='sideBySide'>
            <div className='halfBox'>  
            <div className='centerTitle'>
                    <iframe className='ratioDesktop' src = {VIDEO2} title="VIDEO 2" allowFullScreen></iframe>     
                </div>  
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Testing Prototype II</h2>
                <p>{text6}</p>  
                <a href={Youtube} target="_blank" rel="noreferrer">
                <button  type="button" 
                className='buttonCenter'>Watch All Test Videos <SiYoutube/></button></a>
            </div> 
              
        </div>  

        <div className='sideBySide'>
            <div className='halfBox'>   
                <img  className='centerPic' src={data2} alt='Prototype III bottom view'></img> 
                <img  className='centerPic' src={data3} alt='Prototype III bottom view'></img>
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>IMU Data</h2>
                <p>{text7}</p> 
            </div>  
        </div>  


        <div className='sideBySide'>
            <div className='halfBox'> 
            <img  className='centerPic' src={proIII} alt='Prototype II hanging isometric view'></img>  
            <iframe className='ratio' src = {VIDEO3} title="VIDEO 3" allowFullScreen></iframe>    
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Prototype III</h2>
                <p>{text8}</p> 
                <a href={Youtube} target="_blank" rel="noreferrer">
                <button  type="button" 
                className='buttonCenter'>Watch All Test Videos <SiYoutube/></button></a>  
            </div>  
        </div>  

        <div className='sideBySide'>
            <div className='halfBox'>  
            <div className='centerTitle'> 
                    <img  className='centerPic' src={wcbII} alt='Probe approaching wind Cannon'></img> 
                    <img  className='centerPic' src={wcbI} alt='Wind Cannon'></img>      
                </div>  
            </div>  
            <div className='halfBox'>  
                <h2 className='centerTitle'>Wind Cannon Testing</h2>
                <p>{WindCannonTesting}</p>  
            </div>  
        </div> 

    </div> 
    </> 
  ) 
    }
}

export default Development
