import { createContext,useState } from "react";

export const TheNumberOfPersonContext = createContext({})

export const TheNumberOfPersonProvider = props => {
    const {children} = props
    const [PersonNumber,setNumber] = useState(10)

    return (
        <TheNumberOfPersonContext.Provider value = {{PersonNumber,setNumber}}>
            {children}
        </TheNumberOfPersonContext.Provider>
    )
}