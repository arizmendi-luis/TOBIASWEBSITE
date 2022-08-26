import React, {useState} from 'react';  


export const ModeContext = React.createContext();

export const ModeContextProvider = props => {

    const [mode, setMode] = useState(true);

    
    return(
        <ModeContext.Provider value = {{mode, setMode}}>
            {props.children}
        </ModeContext.Provider>
    )

}