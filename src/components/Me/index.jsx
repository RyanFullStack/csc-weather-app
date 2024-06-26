import { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import './mycsc.css'

function Me() {
  const { speed, gustSpeed, maxSpeed, maxGust, isAwosLive, darkTheme } =
    useContext(WeatherContext);
  const [userMaxSpeed, setUserMaxSpeed] = useState(
    localStorage.getItem("userMaxSpeed") || ""
  );
  const [userMaxGust, setUserMaxGust] = useState(
    localStorage.getItem("userMaxGust") || ""
  );
  const [userDif, setUserDif] = useState(localStorage.getItem("userDif") || "");
  const [userLicense, setUserLicense] = useState(
    localStorage.getItem("userLicense") || ""
  );
  const [isSafe, setIsSafe] = useState(
    !(speed > 25 || gustSpeed > 25 || maxSpeed > 25 || maxGust > 25)
  );

  const handleLicense = (e) => {
    setUserLicense(e.target.value);
    localStorage.setItem("userLicense", e.target.value);
  };

  const handleSpeed = (e) => {
    setUserMaxSpeed(e.target.value);
    localStorage.setItem("userMaxSpeed", e.target.value);
  };

  const handleGust = (e) => {
    setUserMaxGust(e.target.value);
    localStorage.setItem("userMaxGust", e.target.value);
  };

  const handleDif = (e) => {
    setUserDif(e.target.value);
    localStorage.setItem("userDif", e.target.value);
  };

  const handleClear = () => {
    setUserMaxGust("");
    setUserMaxSpeed("");
    setUserDif("");
    setUserLicense("");
    setIsSafe(!(speed > 25 || gustSpeed > 25 || maxSpeed > 25 || maxGust > 25));
    localStorage.removeItem("userLicense");
    localStorage.removeItem("userMaxSpeed");
    localStorage.removeItem("userMaxGust");
    localStorage.removeItem("userDif");
  };

  useEffect(() => {
    if (
      (userLicense || userMaxSpeed || userMaxGust || userDif) &&
      (speed > 25 || gustSpeed > 25 || maxSpeed > 25 || maxGust > 25)
    ) {
      setIsSafe(false);
    }

    if (
      (userLicense === "A" &&
        speed !== null &&
        (speed > 17 || gustSpeed > 17 || maxSpeed > 17 || maxGust > 17)) ||
      (userLicense === "B" &&
        speed !== null &&
        (speed > 19 || gustSpeed > 19 || maxSpeed > 19 || maxGust > 19)) ||
      (userLicense === "C" &&
        speed !== null &&
        (speed > 21 || gustSpeed > 21 || maxSpeed > 21 || maxGust > 21)) ||
      (userLicense === "D" &&
        speed !== null &&
        (speed > 25 || gustSpeed > 25 || maxSpeed > 25 || maxGust > 25))
    ) {
      setIsSafe(false);
    }
    if (
      (speed !== null && userMaxSpeed !== "" && userMaxSpeed < speed) ||
      (maxSpeed !== null && userMaxSpeed !== "" && userMaxSpeed < maxSpeed)
    ) {
      setIsSafe(false);
    }
    if (
      (gustSpeed !== null && userMaxGust !== "" && userMaxGust < gustSpeed) ||
      (maxGust !== null && userMaxGust !== "" && userMaxGust < maxGust)
    ) {
      setIsSafe(false);
    }
    if (
      speed !== null &&
      userDif !== "" &&
      (userDif < gustSpeed - speed ||
        userDif < maxGust - maxSpeed ||
        userDif < maxGust - speed)
    ) {
      setIsSafe(false);
    }

    return function () {
      setIsSafe(true);
    };
  }, [
    speed,
    gustSpeed,
    maxGust,
    maxSpeed,
    userMaxSpeed,
    userMaxGust,
    userDif,
    userLicense,
  ]);

  return (
    <div className={darkTheme === 'true' ? 'my-csc' : 'my-csc mylight'}>
      <div className="my-small">
        {!userLicense && !userMaxSpeed && !userMaxGust && !userDif ? (
          <div className="me-title">
            <span className="yellow">Select one or more options...</span>
            <span id="me-help">
              <a
                href="https://github.com/RyanFullStack/csc-weather-app#Me"
                target="_blank"
                rel="noreferrer"
              >
                Help me with these options!
              </a>
            </span>
          </div>
        ) :
        !isAwosLive ? (
          <div><span className="red"><small><b>NO AWOS CONNECTION</b></small></span></div>
        ) :
        isSafe ? (
          <b>
            <span className="green">CONDITIONS ARE OK!</span>
          </b>
        ) : (
          <b>
            <span className="red">CSC RECOMMENDS STAND DOWN</span>
          </b>
        )}
      </div>
      <div className="my-csc-content">
        <span className="me-label">My License:</span>
        <select onChange={handleLicense} value={userLicense}>
          <option disabled value="">
            Choose a License
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
        <span className="me-label">My Max Speed:</span>
        <select onChange={handleSpeed} value={userMaxSpeed}>
          <option disabled value="">
            Choose a Max Speed
          </option>
          {[...Array(16).keys()].map((value) => (
            <option key={value} value={value + 10}>
              {value + 10} kts
            </option>
          ))}
        </select>
        <span className="me-label">My Max Gust:</span>
        <select onChange={handleGust} value={userMaxGust}>
          <option disabled value="">
            Choose a Max Gust
          </option>
          {[...Array(11).keys()].map((value) => (
            <option key={value} value={value + 15}>
              {value + 15} kts
            </option>
          ))}
        </select>
        <span className="me-label">My Max Differential:</span>
        <select onChange={handleDif} value={userDif}>
          <option disabled value="">
            Choose a Max Differential
          </option>
          {[...Array(11).keys()].map((value) => (
            <option key={value} value={value + 5}>
              {value + 5} kts
            </option>
          ))}
        </select>
        <button onClick={handleClear} id='clear-me-form'>CLEAR</button>
      </div>
      <div className="me-details">
        <small className="red">This is a recommendation.</small>
        <br />
        <small className="red">As a licensed skydiver,</small>
        <br />
        <small className="red">you are responsible for yourself.</small>
      </div>
    </div>
  );
}

export default Me;
