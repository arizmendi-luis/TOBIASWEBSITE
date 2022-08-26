import React from 'react' 
import '../CSS/switch.css'  
import { useContext } from 'react'; 
import{ModeContext} from '../Context/ModeContext'


function ModeSwitch() { 
  const {mode, setMode} = useContext(ModeContext);
  const handleMode = () => setMode(false);  
  const handleMode2 = () => setMode(true); 
  var leftbutton = ""
  var rightbutton = ""   
  if(mode === true) { 
    leftbutton = "button" 
    rightbutton = 'buttonSelected'
  } 
  else if (mode === false){ 
    leftbutton = "buttonSelected" 
    rightbutton = 'button'
  }
  return (  
    <div className='switch' style = {{marginTop: '4rem'}}>
      <div className="halfButton">  
      <button className={leftbutton} style={{borderTopLeftRadius:'60px', borderBottomLeftRadius: '60px'}}
      type="button"  onClick={() => {handleMode2()}}> Mobile </button>
      </div> 

      <div className="halfButton">  
        <button className={rightbutton} style={{borderTopRightRadius:'60px', borderBottomRightRadius: '60px'}}
         type="button" onClick={() => {handleMode()}}> Desktop </button>
      </div> 
      </div>
  )
}

export default ModeSwitch
