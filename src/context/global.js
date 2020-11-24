import { createContext, useContext, useReducer } from "react";

const StateContext = createContext();

export const Provider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useGlobalContext = () => useContext(StateContext);
