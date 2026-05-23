import { createContext} from "react";

export const TheNumberOfPersonContext = createContext({})

export const TheNumberOfPersonProvider = props => {
    const {children} = props
    const sample = {samplestr:"test"}

    return (
        <TheNumberOfPersonContext.Provider value = {sample}>
            {children}
        </TheNumberOfPersonContext.Provider>
    )
}