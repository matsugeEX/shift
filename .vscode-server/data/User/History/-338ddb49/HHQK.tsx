import { useState } from "react";

/*
  const [cellsState,setCellsState] = useState(
    Array(140).fill(false)
  )

  const toggleCell = (index:number) => {
  const newState = [...cellsState];
  newState[index] = !newState[index];
  setCellsState(newState);
};

  const cells = [];

  for (let i = 0; i < 140; i++) {
    cells.push(
      <td key={i}
          onClick={() => toggleCell(i)} 
          className={`border w-4 h-16 ${cellsState[i] ? "bg-red-400" : "bg-blue-400"}`}></td>
    );
  }

    const cells2 = [];

  for (let i = 140; i < 280; i++) {
    cells2.push(
      <td key={i}
          onClick={() => toggleCell(i)} 
          className={`border w-4 h-16 ${cellsState[i] ? "bg-red-400" : "bg-blue-400"}`}></td>
    );
  } */

const ShiftRows = () => {

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
}

export default ShiftRows;