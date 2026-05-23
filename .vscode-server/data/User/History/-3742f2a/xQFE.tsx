import { createContext,useState } from "react";

export const TheNumberOfPersonContext = createContext({})

export const TheNumberOfPersonProvider = props => {
    const {children} = props
    const [isNumber,setNumber] = useState(0)
    const sample = {samplestr:"test"}

    return (
        <TheNumberOfPersonContext.Provider value = {{isNumber,setNumber}}>
            {children}
        </TheNumberOfPersonContext.Provider>
    )
}