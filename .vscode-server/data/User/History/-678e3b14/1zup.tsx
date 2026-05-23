import { useContext, useState} from "react";
import { TheNumberOfPersonContext } from "./GlobalStates/TheNumberOfPerson";

type ButtonUI = {
    className:string
    count:number
}

export const AddMember = ({className,count}:ButtonUI) => {


    const {isNumber,setNumber} = useContext(TheNumberOfPersonContext)
    const contextvalue = useContext(TheNumberOfPersonContext)

    const onclick = () => {
        setNumber((isNumber) => isNumber + 1)
        console.log(isNumber)
    }

    return (
        <button className = {className} onClick={onclick}>
            人数を追加する
        </button>
        
    )
}

export const DeleteMember = ({className,count}:ButtonUI) => {

    const {isNumber,setNumber} = useContext(TheNumberOfPersonContext)

    const onclick = () => {
        setNumber((isNumber) => isNumber - 1)
        console.log(isNumber)
    }

    return (
        <button className = {className} onClick={onclick}>
            人数を削除する
        </button>
    )
}