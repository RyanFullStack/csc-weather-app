import { WeatherContext } from "../../context/WeatherContext";
import { useContext } from "react";
import { formatLocalTime, getCurrentLocalTime } from "../utils";

function AloftIsValid() {
  const { received } = useContext(WeatherContext);
  const localReceived = formatLocalTime(received);
  const current = getCurrentLocalTime();

  return (
    <div className="aloft-title">
      Winds Aloft Received at {localReceived}
      {localReceived === current ? ", valid now" : null}
    </div>
  );
}

export default AloftIsValid;
