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
    <div>
      <div className="border border-red-300 rounded-2xl p-2 m-2 flex justify-around items-center">
        <p className="m-0 text-white-400">Tailwindcss</p>
        <button className="bg-blue-300 border-1 p-2 rounded-md hover:bg-red-400 hover:text-white">BUTTON</button>
      </div>
      <div className="border border-red-300 rounded-2xl p-2 m-2 flex justify-around items-center">
        <p>dwd</p>
      </div>
    </div>
  )
}

///export default tailwind;

function ShiftTable(){
  return (
    <div className="border border-red-300 rounded-2xl p-2 m-2 flex justify-around items-center">
      <table className="w-full table-fixed border-collapse">
        <tr>
          <th>項目1</th>
          <th>項目2</th>
          <th>項目3</th>
          <th>項目4</th>
        </tr>
        <tr>
          <td className="p-2 text-center">feef</td>
          <td className="p-2 text-center">hyrt</td>
          <td className="p-2 text-center">jred</td>
          <td className="p-2 text-center">greg dwa</td>
        </tr>
      </table>
    </div>
  )
}

export default ShiftTable;