
import { createContext } from "react";

export const AppContext = createContext();


const ContextProvider = (props)=>{

    const phone = "+91 8770098266"
    const name = "Anukul"
    return (
        <AppContext.Provider value={{phone , name}}>
              {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider;