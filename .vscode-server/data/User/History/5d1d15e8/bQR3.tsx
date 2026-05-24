import ReactDOM from "react-dom";
import React,{ useState,useEffect } from "react";
import axios from "axios"
import Day from "../Components/Weekday";
import ShiftRows from "@/Components/ShiftRows";
import { AddMember,DeleteMember } from "@/Components/Button";
import { TheNumberOfPersonProvider } from "@/Components/GlobalStates/TheNumberOfPerson";

function ShiftTable(){

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter"){
      console.log("Enterが押されました")
    }
  };

  const [data,setData] = useState({message:""})

  useEffect(() => {
    axios.get("/api/hello/backend/")
    .then((res) => res.data)
    .then((data) => {
      setData(data)
    })
  },[])


  return (
    <TheNumberOfPersonProvider>
      <div tabIndex={0} onKeyDown={handleKeyDown}>
        <Day />
        <div>
          <h1 className="bg-white w-full h-16 text-black text-left text-3xl">シフト表</h1>
        </div>
        <div className="flex justify-end gap-2">
          <AddMember className="bg-blue-400 text-white px-4 py-2" />
          <DeleteMember className="bg-red-400 text-white px-4 py-2" />
        </div>
        <table className="border-2 border-collapse table-fixed">
          <tbody>
            <ShiftRows />
          </tbody>
        </table>
      <div>{data.message}</div> ///api
      </div>
    </TheNumberOfPersonProvider>
  )
}

export default ShiftTable;