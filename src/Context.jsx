import React, { useReducer } from 'react';

// Create a new context for managing the toggle state
export const themeContext = React.createContext();

const initialState = {darkmode : false}

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