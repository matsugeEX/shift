import { useState,useContext } from "react";
import { TheNumberOfPersonContext } from "./GlobalStates/TheNumberOfPerson";

type Worker = {
  name: string;
  start: string;
  end: string;
  leader: boolean;
};

type ScheduleSlot = {
  time: string;
  task: "leader" | "register" | "break" | "other";
};

type ShiftResult = {
  name: string;
  schedule: ScheduleSlot[];
};

type Props = {
  workers: Worker[];
  setWorkers: React.Dispatch<React.SetStateAction<Worker[]>>;
  shiftResult: ShiftResult[];
};

/*const ShiftRows = () => {

  const {PersonNumber} = useContext(TheNumberOfPersonContext)

  const [TimeState,setTimeState] = useState(
    Array(140).fill(false)
  )

  const ChangeCells = (index:number) => {
  const newState = [...TimeState];
  newState[index] = !TimeState[index];
  setTimeState(newState);
  };

  const arrays:JSX.Element[] = []
  for(let i = 0; i < PersonNumber; i++){
      arrays[i] = [];
      for(let j = 0; j < 140;j++){
          arrays[i].push(
          <td key = {j}
              onClick={() => ChangeCells(i+j*140)}
              className={`border w-4 h-16 ${TimeState[i+j*140] ? "bg-red-400" : "bg-blue-400"}`}>
          </td>
      )
      }
  }

  const rows = []
  for(let i = 0; i < PersonNumber;i++){
  rows.push(
  <tr key = {i}>
      <td className = "border bg-gray-400 w-32 h-16">
          <input type ="text" placeholder="名前を入力" className="bg-white text-black focus:outline-none placeholder:text-black-800"></input>
      </td>
      {arrays[i]}
  </tr>        
  )
  }
  return rows
}*/

const ShiftRows = ({ workers, setWorkers, shiftResult = [] }: Props) =>{

  const updateWorker = (
    index: number,
    key: keyof Worker,
    value: string | boolean
  ) => {
    const newWorkers = [...workers];

    newWorkers[index] = {
      ...newWorkers[index],
      [key]: value,
    };

    setWorkers(newWorkers);
  };

  return (
    <>
      {workers.map((worker, index) => (
        <tr key={index}>
          <td className="border bg-gray-400 w-32 h-16">
            <input
              type="text"
              value={worker.name}
              onChange={(e) =>
                updateWorker(index, "name", e.target.value)
              }
              placeholder="名前"
              className="bg-white text-black focus:outline-none"
            />
          </td>

          <td className="border bg-gray-200">
            <input
              type="time"
              value={worker.start}
              onChange={(e) =>
                updateWorker(index, "start", e.target.value)
              }
            />
          </td>

          <td className="border bg-gray-200">
            <input
              type="time"
              value={worker.end}
              onChange={(e) =>
                updateWorker(index, "end", e.target.value)
              }
            />
          </td>

          <td className="border bg-gray-200 text-black">
            <label>
                <input
                type="checkbox"
                checked={worker.leader}
                onChange={(e) =>
                    updateWorker(index, "leader", e.target.checked)
                }
                />
                リーダー可
            </label>
          </td>

        {shiftResult
            .find((result) => result.name === worker.name)
            ?.schedule.map((slot) => (
                <td
                key={slot.time}
                title={`${slot.time} ${slot.task}`}
                className="border w-4 h-16"
                style={{
                    backgroundColor:
                    slot.task === "leader"
                        ? "#f472b6"
                        : slot.task === "register"
                        ? "#9ca3af"
                        : slot.task === "break"
                        ? "#4ade80"
                        : "#60a5fa",
                }}
                />
            ))}
        </tr>
      ))}
    </>
  );
};

export default ShiftRows;