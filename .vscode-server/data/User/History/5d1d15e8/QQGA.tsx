import ReactDOM from "react-dom";

function AttendanceTable() {
  return (
    <>
    <table style={{color:"red", border:"1px solid red"}}>
      <tr>
        <th style ={{color:"grey",fontSize:"30px"}}>なめこ</th>
        <th>えのき</th>
      </tr>
      <tr>
        <th>なめこ</th>
        <th>えのき</th>
      </tr>
    </table>
    </>
  )
}

///export default AttendanceTable;

function tailwind(){
  return (
    <div className="border border-red-300 rounded-2xl p-2 m-2 flex justify-around items-center">
      <p className="m-0 text-white-400">Tailwindcss</p>
      <button className="bg-blue-300 border-1 p-2 rounded-md hover:bg-red-400 hover:text-white">BUTTON</button>
      <div className="border border-red-300 rounded-2xl p-2 m-2 flex justify-around items-center">
        <p>dfefs</p>
      </div>
    </div>
  )
}

export default tailwind;