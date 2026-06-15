import { createContext, useState } from "react";

type TheNumberOfPersonContextType = {
    PersonNumber: number;
    setNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const TheNumberOfPersonContext =
    createContext<TheNumberOfPersonContextType>({
        PersonNumber: 10,
        setNumber: () => {},
    });

export const TheNumberOfPersonProvider = (
    props: { children: React.ReactNode }
) => {
    const { children } = props;

    const [PersonNumber, setNumber] = useState(10);

    return (
        <TheNumberOfPersonContext.Provider
            value={{ PersonNumber, setNumber }}
        >
            {children}
        </TheNumberOfPersonContext.Provider>
    );
};