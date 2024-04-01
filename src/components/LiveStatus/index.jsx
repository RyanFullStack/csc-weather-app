import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import live from "../../images/live.png";
import "./livestatus.css";

function LiveStatus() {
  const [liveStatus, setLiveStatus] = useState(true);

  const location = useLocation();

  const { isLive } = useContext(WeatherContext);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/aloft") {
      setLiveStatus(false);
    } else {
      setLiveStatus(true);
    }
  }, [location]);

  return (
    <div className="livecomponent">
      {!liveStatus ? (
        <div>FORECAST</div>
      ) :
      !isLive ? (
        <div>AWOS DOWN</div>
      ) : (
        <div>
          LIVE <img src={live} alt="livestatus" />
        </div>
      )}
    </div>
  );
}

export default LiveStatus;
