import { useState} from "react";

type ButtonUI = {
    className:string
    count:number
}

export const AddMember = ({className}:ButtonUI,{count}:ButtonUI) => {

    const [Person,setCount] = useState(count)

    const onclick = () => {
        setCount((count) => count + 1)
    }

    return (
        <button className = {className} onClick={onclick}>
            人数を追加する
        </button>
    )
}

export const DeleteMember = ({className}:ButtonUI,{count}:ButtonUI) => {

    const [Person,setCount] = useState(count)

    const onclick = () => {
        setCount((count) => count - 1)
    }

    return (
        <button className = {className} onClick={onclick}>
            人数を削除する
        </button>
    )
}