import ReactDOM from "react-dom";
import React,{ useState,useEffect } from "react";

function table(){

  const [isFlase,setboolen] = useState(false);
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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter"){
      console.log("Enterが押されました")
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <table className="border-2">
        <tbody className="">
          <tr>
            <th className="border-s-2 border-red-400 bg-blue-200 text-black hover:bg-red-700 w-16 h-16">dwa</th>
            <th tabIndex={0} className="border-s-2 border-red-400 bg-blue-200 text-black w-1 h-16 focus:bg-red-400">ddwadwd</th>
            <th className="border-s-2 border-red-400 bg-blue-200 text-black w-1 h-16 active:bg-red-400">dwa</th>
            <th onClick={() => setboolen(!isFlase)} 
                className={`border border-red-400 text-black bg-blue-200 ${isFlase ? "bg-red-400" : "bg-blue-400"}`}>htjrt</th>
          </tr>
          <tr>
            <th className="border-s-2 border-red-400 bg-blue-200 text-black h-16">fewf</th>
            <th className="border-2 border-red-400 bg-blue-200 text-black h-16">fewf</th>
          </tr>
        </tbody>
      </table>
      <table className="border-2 flex ">
        <tbody>
          <tr>
            <th>dwad</th>
            <th>gregdg</th>
          </tr>
          <tr>
            {cells}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default table;