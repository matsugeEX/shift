import ReactDOM from "react-dom";
import React,{ useState,useEffect } from "react";
import Day from "../Components/Weekday";

function table(){

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter"){
      console.log("Enterが押されました")
    }
  };


  const [TimeState,setTimeState] = useState(
    Array(140).fill(false)
  )

  const ChangeCells = (index:number) => {
  const newState = [...TimeState];
  newState[index] = !TimeState[index];
  setTimeState(newState);
  };

  const arrays:JSX.Element[]= []
  for(let i = 0; i < 10; i++){
    arrays[i] = [];
    for(let j = 0; j < 140;j++){
      arrays[i].push(
        <td onClick={() => ChangeCells(i+j*140)}
            className={`border w-4 h-16 ${TimeState[i+j*140] ? "bg-red-400" : "bg-blue-400"}`}>
        </td>
      )
    }
  }

  const rowShiftTable = (Table) => {
    const rows = []
    for(let i = 0; i < 10;i++){
      rows.push(
        <tr>
          <td className = "border bg-gray-400 w-32 h-16">
            <input type ="text" placeholder="名前を入力" className="bg-white text-black focus:outline-none placeholder:text-black-800"></input>
          </td>
          {Table[i]}
        </tr>        
      )
    }
    return rows
  }

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <Day />
      <table className="border-2 border-collapse table-fixed">
        <caption className="bg-white w-full h-16 text-black text-left text-3xl">シフト表</caption>
        <tbody>
          {rowShiftTable(arrays)}
        </tbody>
      </table>
    </div>
  )
}

export default table;