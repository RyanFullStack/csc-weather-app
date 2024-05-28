import { useState, useRef, useEffect, useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import "./hamburger.css";

function HamburgerMenu() {
  const {
    darkTheme,
    setDarkTheme,
    tempSetting,
    setTempSetting,
    unitSetting,
    setUnitSetting,
    speedUnit,
    setSpeedUnit,
    timeFormat,
    setTimeFormat
  } = useContext(WeatherContext);

  const [menu, setMenu] = useState("hidden");

  const menuRef = useRef(null);

  const handleMenu = (e) => {
    e.stopPropagation();
    if (menu === "hidden") {
      setMenu("");
    } else {
      setMenu("hidden");
    }
  };

  const handleTheme = () => {
    if (darkTheme === "true") {
      setDarkTheme("false");
      localStorage.setItem("darkTheme", "false");
    } else {
      setDarkTheme("true");
      localStorage.setItem("darkTheme", "true");
    }
  };

  const handleTemp = () => {
    if (tempSetting === "true") {
      setTempSetting("false");
      localStorage.setItem("tempSetting", "false");
    } else {
      setTempSetting("true");
      localStorage.setItem("tempSetting", "true");
    }
  };

  const handleUnit = () => {
    if (unitSetting === "true") {
      setUnitSetting("false");
      localStorage.setItem("unitSetting", "false");
    } else {
      setUnitSetting("true");
      localStorage.setItem("unitSetting", "true");
    }
  };

  const handleSpeedUnit = () => {
    if (speedUnit === "true") {
      setSpeedUnit("false");
      localStorage.setItem("speedUnit", "false");
    } else {
      setSpeedUnit("true");
      localStorage.setItem("speedUnit", "true");
    }
  };

  const handleTime = () => {
    if (timeFormat === "true") {
      setTimeFormat("false");
      localStorage.setItem("timeFormat", "false");
    } else {
      setTimeFormat("true");
      localStorage.setItem("timeFormat", "true");
    }
  };

  const handleLogin = () => {
    window.open('https://csc-login.onrender.com/', '_blank', 'noreferrer')
  }

  const handleHelp = () => {
    window.open('https://github.com/RyanFullStack/csc-weather-app#Features', '_blank', 'noreferrer')
  }

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu("hidden");
      }
    };

    document.body.addEventListener("click", handleBodyClick);

    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, []);

  return (
    <div className="themecontainer">
      <i
        className={
          menu === "hidden" ? "fas fa-bars" : "fas fa-angle-double-left"
        }
        onClick={handleMenu}
      />
      <div
        ref={menuRef}
        className={`menu ${menu}`}
        id={darkTheme === "false" ? "menu-light" : ""}
      >
        Menu
        <div
          className={
            darkTheme === "true"
              ? "menu-button-container"
              : "menu-button-container-light"
          }
        >
          <button
            className={
              tempSetting === "true" && darkTheme === "true"
                ? "disabled-button"
                : tempSetting === "false" && darkTheme === "false"
                ? "disabled-button-light"
                : "active-button-light"
            }
            disabled={tempSetting === "true"}
            onClick={handleTemp}
          >
            ºF
          </button>
          <button
            className={
              tempSetting === "false" && darkTheme === "true"
                ? "disabled-button"
                : tempSetting === "true" && darkTheme === "false"
                ? "disabled-button-light"
                : "active-button-light"
            }
            disabled={tempSetting === "false"}
            onClick={handleTemp}
          >
            ºC
          </button>
        </div>
        <div
          className={
            darkTheme === "true"
              ? "menu-button-container"
              : "menu-button-container-light"
          }
        >
          <button
            className={
              speedUnit === "true" && darkTheme === "true"
                ? "disabled-button"
                : speedUnit === "false" && darkTheme === "false"
                ? "disabled-button-light"
                : "active-button-light"
            }
            disabled={speedUnit === "true"}
            onClick={handleSpeedUnit}
          >
            KTS
          </button>
          <button
            className={
              speedUnit === "false" && darkTheme === "true"
                ? "disabled-button"
                : speedUnit === "true" && darkTheme === "false"
                ? "disabled-button-light"
                : "active-button-light"
            }
            disabled={speedUnit === "false"}
            onClick={handleSpeedUnit}
          >
            MPH
          </button>
        </div>
        <div
          className={
            darkTheme === "true"
              ? "menu-button-container"
              : "menu-button-container-light"
          }
        >
          <button
            className={
              unitSetting === "true" && darkTheme === "true"
                ? "disabled-button"
                : unitSetting === "false" && darkTheme === "false"
                ? "disabled-button-light"
                : "active-button-light"
            }
            disabled={unitSetting === "true"}
            onClick={handleUnit}
          >
            FEET
          </button>
          <button
            className={
              unitSetting === "false" && darkTheme === "true"
                ? "disabled-button"
                : unitSetting === "true" && darkTheme === "false"
                ? "disabled-button-light"
                : "active-button-light"
            }
            disabled={unitSetting === "false"}
            onClick={handleUnit}
          >
            METERS
          </button>
        </div>
        <div
          className={
            darkTheme === "true"
              ? "menu-button-container"
              : "menu-button-container-light"
          }
        >
          <button
            className={
              timeFormat === "true" && darkTheme === "true"
                ? "disabled-button"
                : timeFormat === "false" && darkTheme === "false"
                ? "disabled-button-light"
                : "active-button-light"
            }
            disabled={timeFormat === "true"}
            onClick={handleTime}
          >
            12 HR
          </button>
          <button
            className={
              timeFormat === "false" && darkTheme === "true"
                ? "disabled-button"
                : timeFormat === "true" && darkTheme === "false"
                ? "disabled-button-light"
                : "active-button-light"
            }
            disabled={timeFormat === "false"}
            onClick={handleTime}
          >
            24 HR
          </button>
        </div>
        <div
          className={
            darkTheme === "true"
              ? "menu-button-container"
              : "menu-button-container-light"
          }
        >
          <button
            className={
              darkTheme === "true"
                ? "disabled-button"
                : darkTheme === "false"
                ? "disabled-button-light"
                : "active-button-light"
            }
            disabled={darkTheme === "true"}
            onClick={handleTheme}
          >
            DARK
          </button>
          <button
            className={"active-button-light"}
            disabled={darkTheme === "false"}
            onClick={handleTheme}
          >
            LIGHT
          </button>
        </div>
        <div
          className={
            darkTheme === "true"
              ? "menu-button-container"
              : "menu-button-container-light"
          }
          id='help-login-div'
        >
          <button onClick={handleHelp} id='help-button'>HELP</button>
        </div>
        <div
          className={
            darkTheme === "true"
              ? "menu-button-container"
              : "menu-button-container-light"
          }
          id='help-login-div'
        >
          <button onClick={handleLogin} id='login-button'>LOGIN</button>
        </div>
      </div>
    </div>
  );
}

export default HamburgerMenu;
