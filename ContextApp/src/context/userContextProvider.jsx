import React,{useState} from "react";

import userContext from "./userContext";

const UserContextProvider = ({children}) =>{
    //The "children" prop represents any nested components that will be wrapped by this provider
    const [user,setUser] = useState(null)

    return(
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}
export default UserContextProvider;



