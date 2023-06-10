import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';
export const CreateContext2 = createContext();

export function Context2Provider({children}){
    const [state,setState] = useState({});
    
    return (
        <CreateContext2.Provider value={{
            state,
            setState
        }}>
            {children}
        </CreateContext2.Provider>
    )
}
