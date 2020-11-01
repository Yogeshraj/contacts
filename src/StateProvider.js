import React, { createContext, useContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = props =>{
    const [stateVal, useStateVal] = useState([]);
    return(
        <StateContext.Provider value={[stateVal, useStateVal]}>
            {props.children}
        </StateContext.Provider>
    )
}