import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Create a new context for managing the toggle state
export const themeContext = React.createContext();


// Function to generate unique IDs
function generateId() {
  return uuidv4();
}

const initialState = {darkmode : false, generateId:generateId}

const themeReducer = (state, action) =>{
    switch(action.type){
        case "TOGGLE":
            return {darkmode : !state.darkmode}
        default: 
            return state;
    }
};

export const ThemeProvider = (props)=>{
    const [state, dispatch] = useReducer(themeReducer, initialState);
    return (
        <themeContext.Provider value={{state, dispatch}}>
            {props.children}
        </themeContext.Provider>
    )
}