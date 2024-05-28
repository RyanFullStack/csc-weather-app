import { WeatherContext } from "../../context/WeatherContext";
import { useContext } from "react";
import { formatLocalTime, formatLocalTime24, getCurrentLocalTime } from "../utils";

function AloftIsValid() {
  const { received, timeFormat } = useContext(WeatherContext);
  const localReceived = formatLocalTime(received);
  const localReceived24 = formatLocalTime24(received);
  const current = getCurrentLocalTime();

  return (
    <div className="aloft-title">
      Winds Aloft Received at {timeFormat === 'true' ? localReceived : localReceived24}
      {localReceived === current ? ", valid now" : null}
    </div>
  );
}

export default AloftIsValid;
