import { useContext, useState} from "react";
import { TheNumberOfPersonContext } from "./GlobalStates/TheNumberOfPerson";

type ButtonUI = {
    className:string
    count:number
}

export const AddMember = ({className,count}:ButtonUI) => {


    const {isNumber} = useContext(TheNumberOfPersonContext)
    const contextvalue = useContext(TheNumberOfPersonContext)

    const onclick = () => {
        console.log(contextvalue)
    }

    return (
        <button className = {className} onClick={onclick} disabled = {isNumber}>
            人数を追加する
        </button>
        
    )
}

export const DeleteMember = ({className,count}:ButtonUI) => {

    const [Person,setCount] = useState(count)

    const onclick = () => {
        console.log(Person)
    }

    return (
        <button className = {className} onClick={onclick}>
            人数を削除する
        </button>
    )
}