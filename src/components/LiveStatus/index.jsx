import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import live from "../../images/live.png";
import "./livestatus.css";

function LiveStatus() {
  const [liveStatusText, setLiveStatusText] = useState("LIVE");

  const location = useLocation();

  const { isAwosLive } = useContext(WeatherContext);

  useEffect(() => {
    const path = location.pathname;
    if (!isAwosLive) {
      setLiveStatusText("AWOS DOWN");
    }
    if (path === "/aloft") {
      setLiveStatusText("FORECAST");
    } else if (
      path === "/webcams" ||
      path === "/aircraft" ||
      path === "/radar"
    ) {
      setLiveStatusText("LIVE");
    }
  }, [location]);

  return (
    <div className="livecomponent">
      {liveStatusText} {liveStatusText === "LIVE" ? <img src={live} /> : null}
    </div>
  );
}

export default LiveStatus;
