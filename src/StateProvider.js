import React ,{createContext,useContext,useReducer}  from 'react';

//preapre data alyer
export const StateContext= createContext();


//wrap our app and provide data layer
export const  StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer,initialState)}>
   {children}
    </StateContext.Provider>
)



//pull information from data layer
export const  useStateValue= () => useContext(StateContext);