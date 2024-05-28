import { useEffect, useState } from "react";
import './time.css'

function GetCst() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [time, setTime] = useState("");

  function updateDateTime() {
    const now = new Date().toLocaleString("en-US", { timeZone: "America/Chicago", hour12: false });
    const [date, newTime] = now.split(",");
    setTime(newTime);

    const newDate = date.split("/");
    newDate.pop();
    const today = newDate.join("/");
    setCurrentDate(today);

    const getDay = new Date();
    setCurrentDay(getDay.toString().split(" ")[0]);


    return
  }

  useEffect(() => {
    updateDateTime();

    const timeInt = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(timeInt);
    };
  }, []);

  return (
    <div className="time-component">
      <div>{currentDay} {currentDate} {time}</div>
    </div>
  );
}

export default GetCst;
