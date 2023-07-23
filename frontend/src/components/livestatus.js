import live from "../images/live.png";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./livestatus.css";

function LiveStatus() {
  const [liveStatus, setLiveStatus] = useState(true);

  const location = useLocation();

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
      {liveStatus ? (
        <div>
          LIVE <img src={live} alt="livestatus" />
        </div>
      ) : (
        <div>FORECAST</div>
      )}
    </div>
  )
}

export default LiveStatus;
