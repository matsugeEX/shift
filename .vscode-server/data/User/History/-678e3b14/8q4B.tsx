import { useState} from "react";

type ButtonUI = {
    className:string
}

const AddMember = ({className}:ButtonUI) => {

    const onclick = () => alert();

    return (
        <button className = {className} onClick={onclick}>
            人数を追加する
        </button>
    )
}

const DeleteMember = ({className}:ButtonUI) => {

    const onclick = () => alert();

    return (
        <button className = {className} onClick={onclick}>
            人数を削除する
        </button>
    )
}

export default AddMember;