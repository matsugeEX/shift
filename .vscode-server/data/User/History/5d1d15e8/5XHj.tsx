import ReactDOM from "react-dom";
import React,{ useState,useEffect } from "react";
import Day from "../Components/Weekday";
import ShiftRows from "@/Components/ShiftRows";
import AddMember from "@/Components/AddMemberButton";

function ShiftTable(){

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter"){
      console.log("Enterが押されました")
    }
  };

  return (
    <div tabIndex={0} onKeyDown={handleKeyDown}>
      <Day />
      <button className="border bg-red-400 text-right ">人数を追加</button>
      <table className="border-2 border-collapse table-fixed">
        <caption className="bg-white w-full h-16 text-black text-left text-3xl">シフト表</caption>
        <tbody>
          <ShiftRows />
        </tbody>
      </table>
    </div>
  )
}

export default ShiftTable;