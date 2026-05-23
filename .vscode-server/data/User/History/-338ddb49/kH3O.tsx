import { useState,useContext } from "react";
import { TheNumberOfPersonContext } from "./GlobalStates/TheNumberOfPerson";

const ShiftRows = () => {

  const {PersonNumber} = useContext(TheNumberOfPersonContext)

  const [TimeState,setTimeState] = useState(
    Array(140).fill(false)
  )

  const ChangeCells = (index:number) => {
  const newState = [...TimeState];
  newState[index] = !TimeState[index];
  setTimeState(newState);
  };

  const arrays:JSX.Element[] = []
  for(let i = PersonNumber; i < 10; i++){
      arrays[i] = [];
      for(let j = 0; j < 140;j++){
          arrays[i].push(
          <td key = {j}
              onClick={() => ChangeCells(i+j*140)}
              className={`border w-4 h-16 ${TimeState[i+j*140] ? "bg-red-400" : "bg-blue-400"}`}>
          </td>
      )
      }
  }

  const rows = []
  for(let i = PersonNumber; i < 10;i++){
  rows.push(
  <tr key = {i}>
      <td className = "border bg-gray-400 w-32 h-16">
          <input type ="text" placeholder="名前を入力" className="bg-white text-black focus:outline-none placeholder:text-black-800"></input>
      </td>
      {arrays[i]}
      {console.log(PersonNumber)}
  </tr>        
  )
  }
  return rows
}

export default ShiftRows;