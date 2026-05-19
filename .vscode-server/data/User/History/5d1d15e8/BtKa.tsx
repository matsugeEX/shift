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

    const cells2 = [];

  for (let i = 140; i < 280; i++) {
    cells2.push(
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







  const [TimeState,setTimeState] = useState(
    Array(140).fill(false)
  )

  const ChangeCells = (index:number) => {
  const newState = [...TimeState];
  newState[index] = !TimeState[index];
  setTimeState(newState);
  };

  const arrays = []
  for(let i = 0; i < 8; i++){
    arrays[i] = [];
    arrays.push(
      <td key = {i}
          onClick={() => ChangeCells(i)}
          className={`border w-4 h-16 ${TimeState[i] ? "bg-red-400" : "bg-blue-400"}`}>
      </td>
    )
  }


















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
      <table className="border-2 border-collapse table-fixed">
        <tbody>
          <tr>
            <td className = "border bg-gray-400 w-32 h-16">
              <input type ="text" placeholder="名前を入力" className="bg-white text-black focus:outline-none placeholder:text-black-800"></input>
            </td>
            {cells}
          </tr>
          <tr>
            <td className = "border bg-gray-400 w-32 h-16">
              <input type ="text" placeholder="名前を入力" className="bg-white text-black focus:outline-none placeholder:text-black-800"></input>
            </td>
            {cells2}
          </tr>
          <tr>
            <td className = "border bg-gray-400 w-32 h-16">
              <input type ="text" placeholder="名前を入力" className="bg-white text-black focus:outline-none placeholder:text-black-800"></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default table;