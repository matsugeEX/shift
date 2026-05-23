import { useState} from "react";

type ButtonUI = {
    className:string
}

const AddMember = ({className}:ButtonUI) => {

    const onclick = () => alert();

    return (
        <td>
            <button className = {className} onClick={onclick}>
                人数を追加する
            </button>
        </td>
    )
}

<AddMember className="bg-red-600 text-white h-16"/>

export default AddMember;