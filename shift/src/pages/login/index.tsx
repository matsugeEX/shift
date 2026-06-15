"use client"
import ReactDOM, { useFormState } from "react-dom";
import React,{ useState,useEffect } from "react";
import Day from "../../Components/Weekday";
import ShiftRows from "@/Components/ShiftRows";
import { AddMember,DeleteMember } from "@/Components/Button";
import { TheNumberOfPersonProvider } from "@/Components/GlobalStates/TheNumberOfPerson";
import { useRouter } from "next/router";
import axios_instance from "@/../plugins/axios";
import { redirect } from "next/dist/server/api-utils";

type Worker = {
  name: string;
  start: string;
  end: string;
  leader: boolean;
};

function ShiftTable(){

  const [shiftResult, setShiftResult] = useState([]);

  const [workers, setWorkers] = useState<Worker[]>([
    { name: "", start: "10:00", end: "21:00", leader: false },
    ]);

  const addWorker = () => {
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
    setWorkers([
      ...workers,
      {
        name: "",
        start: "10:00",
        end: "21:00",
        leader: false,
      },
    ]);
  };

  const deleteWorker = () => {
    setWorkers(workers.slice(0, -1));
  };

  useEffect (()=>{
    axios_instance.get("/api/people/person")
                  .then(()=>{
                    console.log("ok")
                  })
  },[])

  //デバッグ


  
  const createShift = () => {
     console.log(workers);

    axios_instance
        .post("/api/people/allocation/", { workers })
        .then((response) => {
          console.log(response.data);
          setShiftResult(response.data.result);
        });
  };
  

  /*useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/hello_db/backend/") ////api/hello/backendのみでは404が返ってくる。なぜ。
    .then((res) => res.data)
    .then((data) => {
      setData(data)
    })
  },[])*/
  
  return (
    <TheNumberOfPersonProvider>
      <div>
        <Day />
        <div>
          <h1 className="bg-white w-full h-16 text-black text-left text-3xl">シフト表</h1>
        </div>
        <div className="flex justify-end gap-2">
        <button
          onClick={addWorker}
          className="bg-blue-400 text-white px-4 py-2"
        >
          人数を追加
        </button>

        <button
          onClick={deleteWorker}
          className="bg-red-400 text-white px-4 py-2"
        >
          人数を削除
        </button>
          <button
            onClick={createShift}
            className="bg-green-500 text-white px-4 py-2"
          >
            シフト作成
          </button>
        </div>
        <table className="border-2 border-collapse table-fixed">
          <tbody>
            <ShiftRows workers={workers} setWorkers={setWorkers} shiftResult={shiftResult} />
          </tbody>
        </table>
      </div>
    </TheNumberOfPersonProvider>
  )
}

export default ShiftTable;