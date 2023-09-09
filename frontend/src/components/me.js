import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Me() {
  const { speed, gustSpeed, maxSpeed, maxGust } = useContext(WeatherContext);
  const [userMaxSpeed, setUserMaxSpeed] = useState(localStorage.getItem('userMaxSpeed') || '');
  const [userMaxGust, setUserMaxGust] = useState(localStorage.getItem('userMaxGust') || '');
  const [userDif, setUserDif] = useState(localStorage.getItem('userDif') || '');
  const [userLicense, setUserLicense] = useState(localStorage.getItem('userLicense') || '');
  const [isSafe, setIsSafe] = useState(true);

  const handleLicense = (e) => {
    setUserLicense(e.target.value);
    localStorage.setItem('userLicense', e.target.value);
  };

  const handleSpeed = (e) => {
    setUserMaxSpeed(e.target.value);
    localStorage.setItem('userMaxSpeed', e.target.value);
  };

  const handleGust = (e) => {
    setUserMaxGust(e.target.value);
    localStorage.setItem('userMaxGust', e.target.value);
  };

  const handleDif = (e) => {
    setUserDif(e.target.value);
    localStorage.setItem('userDif', e.target.value);
  };

  const handleClear = () => {
    setUserMaxGust('');
    setUserMaxSpeed('');
    setUserDif('');
    setUserLicense('');
    setIsSafe(true);
    localStorage.removeItem('userLicense');
    localStorage.removeItem('userMaxSpeed');
    localStorage.removeItem('userMaxGust');
    localStorage.removeItem('userDif');
  };

  useEffect(() => {
    if (
      (userLicense === 'A' && (speed !== null && speed > 17)) ||
      (userLicense === 'B' && (speed !== null && speed > 19)) ||
      (userLicense === 'C' && (speed !== null && speed > 21)) ||
      (userLicense === 'D' && (speed !== null && speed > 24))
    ) {
      setIsSafe(false);
    }
    if (
      (speed !== null && userMaxSpeed !== '' && userMaxSpeed < speed) ||
      (maxSpeed !== null && userMaxSpeed !== '' && userMaxSpeed < maxSpeed)
    ) {
      setIsSafe(false);
    }
    if (
      (gustSpeed !== null && userMaxGust !== '' && userMaxGust < gustSpeed) ||
      (maxGust !== null && userMaxGust !== '' && userMaxGust < maxGust)
    ) {
      setIsSafe(false);
    }
    if (
      (speed !== null && userDif !== '' && userDif < gustSpeed - speed)
    ) {
      setIsSafe(false);
    }

    return function () {
      setIsSafe(true);
    };
  }, [speed, gustSpeed, maxGust, maxSpeed, userMaxSpeed, userMaxGust, userDif, userLicense]);

  return (
    <div className="my-csc">
      <p>
        {!userLicense && !userMaxSpeed && !userMaxGust && !userDif ? (
          <small>Select one or more options...</small>
        ) : isSafe ? (
          <span className="green">Conditions are OK</span>
        ) : (
          <span className="red">CSC Recommends Stand Down</span>
        )}
      </p>
      <div className="my-csc-content">
        <span>My License:</span>
        <select onChange={handleLicense} value={userLicense}>
          <option disabled value=''>Choose a License</option>
          <option value='A'>A</option>
          <option value='B'>B</option>
          <option value='C'>C</option>
          <option value='D'>D</option>
        </select>
        <span>My Max Speed:</span>
        <select onChange={handleSpeed} value={userMaxSpeed}>
          <option disabled value=''>Choose a Max Speed</option>
          {[...Array(16).keys()].map((value) => (
            <option key={value} value={value + 10}>
              {value + 10}
            </option>
          ))}
        </select>
        <span>My Max Gust:</span>
        <select onChange={handleGust} value={userMaxGust}>
          <option disabled value=''>Choose a Max Gust</option>
          {[...Array(11).keys()].map((value) => (
            <option key={value} value={value + 15}>
              {value + 15}
            </option>
          ))}
        </select>
        <span>My Max Differential:</span>
        <select onChange={handleDif} value={userDif}>
          <option disabled value=''>Choose a Max Differential</option>
          {[...Array(11).keys()].map((value) => (
            <option key={value} value={value + 5}>
              {value + 5}
            </option>
          ))}
        </select>
        <button onClick={handleClear}>CLEAR</button>
        <small>This is a recommendation.</small>
        <small>As a licensed skydiver,</small>
        <small>you are responsible for yourself.</small>
      </div>
    </div>
  );
}

export default Me;
