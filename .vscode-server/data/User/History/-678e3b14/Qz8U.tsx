import { useContext, useState} from "react";
import { TheNumberOfPersonContext } from "./GlobalStates/TheNumberOfPerson";

type ButtonUI = {
    className:string
}

export const AddMember = ({className}:ButtonUI) => {


    const {PersonNumber,setNumber} = useContext(TheNumberOfPersonContext)

    const onclick = () => {
        setNumber((PersonNumber:number) => PersonNumber + 1)
        console.log(PersonNumber)
    }

    return (
        <button className = {className} onClick={onclick}>
            人数を追加する
        </button>
        
    )
}

export const DeleteMember = ({className}:ButtonUI) => {

    const {PersonNumber,setNumber} = useContext(TheNumberOfPersonContext)

    const onclick = () => {
        setNumber((PersonNumber:number) => PersonNumber - 1)
        console.log(PersonNumber)
    }

    return (
        <button className = {className} onClick={onclick}>
            人数を削除する
        </button>
    )
}