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