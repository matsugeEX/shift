import { useState } from "react";
  
const [date,setDate] = useState("")

const getWeekDay = (dateString: string) => {
if (!dateString) return "";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const date = new Date(dateString);

return days[date.getDay()];
};

const Day = () => {
    return(
        <div>
        <input type="date" value = {date} onChange={(e) => setDate(e.target.value)} className="bg-white w-full text-black"></input>
        <p className="bg-white w-full text-black">{getWeekDay(date)}曜日</p>
        </div>
    )
}

export default Day();