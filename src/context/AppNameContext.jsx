
    // create a context
    import{createContext} from "react";

    export const AppNameContext = createContext();

    // stage two: create a provider: a provider is a super component that can provide any component that its children with whatever he has
    export const AppNameProvider = ({children}) => {
        const appName = "Germanbutch"
            return ( <AppNameContext.Provider value={{appName:appName}} >
            {children}
       </AppNameContext.Provider>)
    }