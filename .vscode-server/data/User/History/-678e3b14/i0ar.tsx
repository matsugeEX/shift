import { useState} from "react";

type ButtonUI = {
    className:string
}

const AddMember = ({className}:ButtonUI) => {

    const onclick = () => alert()

    return (
        <td>
            <div  className="w-full flex justify-end">
                <button className = "justify-end" onClick={onclick}>
                    人数を追加する
                </button>
            </div>
        </td>
    )
}

export default AddMember;