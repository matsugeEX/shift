import { createContext} from "react";

export const TheNumberOfPersonContext = createContext({})

export const TheNumberOfPersonProvider = props => {
    const {children} = props
    const [isNumber,setNumber] = UseState(0)
    const sample = {samplestr:"test"}

    return (
        <TheNumberOfPersonContext.Provider value = {sample}>
            {children}
        </TheNumberOfPersonContext.Provider>
    )
}