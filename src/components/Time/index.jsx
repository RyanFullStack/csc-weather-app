import { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import "./time.css";

function GetCst() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [time, setTime] = useState("");

  const { timeFormat } = useContext(WeatherContext);

  let options;

  useEffect(() => {
    if (timeFormat === "true") {
      options = { timeZone: "America/Chicago", hour12: true };
    } else {
      options = { timeZone: "America/Chicago", hour12: false };
    }
    updateDateTime();

    const timeInt = setInterval(updateDateTime, 1000);

    return () => {
      clearInterval(timeInt);
    };
  }, [timeFormat]);

  function updateDateTime() {
    const now = new Date().toLocaleString("en-US", options);
    const [date, newTime] = now.split(",");
    setTime(newTime);

    const newDate = date.split("/");
    newDate.pop();
    const today = newDate.join("/");
    setCurrentDate(today);

    const getDay = new Date();
    setCurrentDay(getDay.toString().split(" ")[0]);

    return;
  }

  return (
    <div className="time-component">
      <div>
        {currentDay} {currentDate} {time}
      </div>
    </div>
  );
}

export default GetCst;
