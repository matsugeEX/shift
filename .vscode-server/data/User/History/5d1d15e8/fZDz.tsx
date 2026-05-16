import ReactDOM from "react-dom";
import { useState } from "react";

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

  const tableclassname = "w-full table-fixed border-collapse border border-white-300 rounded-2xl p-2 m-2 justify-around"
  const tablecell = "table-cell border px-4 py-2 text-black"

  return (
    <div>
      <table className={tableclassname}>
        <tbody>
          <tr>
            <th>項目1</th>
            <th>項目2</th>
            <th>項目3</th>
            <th>項目4</th>
          </tr>
          <tr>
            <td className="p-2 text-center">赤</td>
            <td className="p-2 text-center">緑</td>
            <td className="p-2 text-center">青</td>
            <td className="p-2 text-center">クリスタル</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full table-fixed border-collapse rounded-2xl p-2 m-2 justify-around">
        <tbody>
          <tr className="table-row bg-gray-100 font-bold">
            <th className={tablecell}>商品名</th>
            <th className={tablecell}>価格</th>
            <th className={tablecell}>在庫状況</th>
          </tr>
        </tbody>
      </table>
      <table className="flex-wrap h-64">
        <tbody>
          <tr>
            <th className="border bg-blue-200 text-black w-128 h-64">dwa</th>
            <th className="border bg-blue-200 text-black w-128">dwa</th>
            <th className="border bg-blue-200 text-black w-128">dwa</th>
            <th className="border bg-blue-200 text-black w-128">dwa</th>
            <th className="border bg-blue-200 text-black w-128">dwa</th>
            <th className="border bg-blue-200 text-black w-128">dwa</th>
            <th className="border bg-blue-200 text-black w-128">dwa</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

///export default ShiftTable;

function table(){

  const [isFlase,setboolen] = useState(false);

  return (
    <div>
      <table className="border-2 ">
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
      <table className="border-2">
        <tbody>
          <tr>
            <th className="border-3 border-dashed border-red-400 bg-blue-200 text-black w-32 h-16">fewf</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default table;