import { useEffect, useState, createContext } from "react";
import { w3cwebsocket as WebSocket } from "websocket";

export const WeatherContext = createContext();

const WindSpeedProvider = (props) => {
  const [speed, setSpeed] = useState(0);
  const [gustSpeed, setGustSpeed] = useState(null);
  const [direction, setDirection] = useState(0);
  const [metar, setMetar] = useState(null);
  const [temp, setTemp] = useState(null);
  const [tempC, setTempC] = useState(null);
  const [skyCondition1, setSkyCondition1] = useState("");
  const [skyCondition2, setSkyCondition2] = useState("");
  const [skyCondition3, setSkyCondition3] = useState("");
  const [cloudCeiling1, setCloudCeiling1] = useState("");
  const [cloudCeiling2, setCloudCeiling2] = useState("");
  const [cloudCeiling3, setCloudCeiling3] = useState("");
  const [metarAbbr, setMetarAbbr] = useState("");
  const [metarDesc, setMetarDesc] = useState("");
  const [gustData, setGustData] = useState([]);
  const [darkTheme, setDarkTheme] = useState("true");
  const [tempSetting, setTempSetting] = useState("true");
  const [unitSetting, setUnitSetting] = useState("true");
  const [directions, setDirections] = useState({});
  const [temps, setTemps] = useState({});
  const [speeds, setSpeeds] = useState({});
  const [received, setReceived] = useState(null);
  const [dewPoint, setDewPoint] = useState(null);
  const [pressure, setPressure] = useState(null);
  const [densityAlt, setDensityAlt] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [twilight, setTwilight] = useState(null);
  const [noon, setNoon] = useState(null);
  const [maxGust, setMaxGust] = useState(null);
  const [maxSpeed, setMaxSpeed] = useState(null);
  const [variableDirection, setVariableDirection] = useState([]);
  const [jumpruns, setJumpruns] = useState([]);
  const [newSpot, setNewSpot] = useState("");
  const [newOffset, setNewOffset] = useState("");

  useEffect(() => {
    const data = async () => {
      const res = await fetch(
        "https://corsproxy.io/?https://windsaloft.us/winds.php?lat=41.8930014&lon=-89.07829&hourOffset=0&referrer=MSWA"
      );
      const winds = await res.json();
      setDirections(winds.direction);
      setTemps(winds.temp);
      setSpeeds(winds.speed);
      setReceived(winds.validtime);
    };
    data();
    const interval = setInterval(() => {
      data();
    }, 200000);

    return function () {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const windQuery = `
        subscription {
          wind: windReported {
            receivedAt
            speed
            gustSpeed
            direction
            variableDirection
          }
        }
        `;

    const websocket = new WebSocket("wss://api.skydivecsc.com/graphql", [
      "graphql-ws",
    ]);
    websocket.onopen = function () {
      websocket.send(JSON.stringify({ type: "connection_init", payload: {} }));
      websocket.send(
        JSON.stringify({
          type: "start",
          id: "wind",
          payload: { query: windQuery, variables: null },
        })
      );
    };
    websocket.onmessage = function (event) {
      const res = JSON.parse(event.data);

      if (res.payload) {
        setVariableDirection(res.payload.data.wind.variableDirection);
        if (res.payload.data.wind.speed) {
          setSpeed(res.payload.data.wind.speed);
        }
        setGustSpeed(res.payload.data.wind.gustSpeed);
        if (res.payload.data.wind.direction) {
          setDirection(res.payload.data.wind.direction);
        }
      }
    };
  }, []);

  useEffect(() => {
    const weatherQuery = `
        subscription {
          weather: weatherReported {
            receivedAt
            metar
            presentWeather
            temperature
            dewPoint
            visibility
            altimeterSetting
            densityAltitude
            skyCondition {
              cloudCover
              altitude
            }
          }
        }
        `;

    const websocket = new WebSocket("wss://api.skydivecsc.com/graphql", [
      "graphql-ws",
    ]);
    websocket.onopen = function () {
      websocket.send(JSON.stringify({ type: "connection_init", payload: {} }));
      websocket.send(
        JSON.stringify({
          type: "start",
          id: "weather",
          payload: { query: weatherQuery, variables: null },
        })
      );
    };
    websocket.onmessage = function (event) {
      const res = JSON.parse(event.data);

      if (res.payload) {
        if (res.payload.data.weather.altimeterSetting) {
          setPressure(res.payload.data.weather.altimeterSetting);
        }
        if (res.payload.data.weather.densityAltitude) {
          setDensityAlt(res.payload.data.weather.densityAltitude);
        }
        if (res.payload.data.weather.visibility) {
          setVisibility(res.payload.data.weather.visibility);
        }
        if (res.payload.data.weather.dewPoint) {
          setDewPoint(res.payload.data.weather.dewPoint);
        }

        const metArr = res.payload.data.weather.metar.split(" ");
        metArr.pop();
        metArr.pop();
        metArr.pop();
        metArr.shift();

        const metArr2 = metArr.join(" ");
        setMetar(metArr2)

        if (res.payload.data.weather.temperature) {
          setTemp(res.payload.data.weather.temperature);
          setTempC(
            ((res.payload.data.weather.temperature - 32) / 1.8).toFixed(1)
          );
        }

        if (res.payload.data.weather.skyCondition[0].altitude) {
          if (unitSetting === "true") {
            setCloudCeiling1(
              `${res.payload.data.weather.skyCondition[0].altitude}'`
            );
          } else {
            setCloudCeiling1(
              `${(
                res.payload.data.weather.skyCondition[0].altitude / 3.28
              ).toFixed(0)}M`
            );
          }
        }

        if (res.payload.data.weather.skyCondition[0].altitude === null) {
          setSkyCondition1("Clear Sky");
          setCloudCeiling1("");
        }

        if (res.payload.data.weather.skyCondition[1]) {
          if (unitSetting === "true") {
            setCloudCeiling2(
              `${res.payload.data.weather.skyCondition[1].altitude}'`
            );
          } else {
            setCloudCeiling2(
              `${(
                res.payload.data.weather.skyCondition[1].altitude / 3.28
              ).toFixed(0)}M`
            );
          }
        }

        if (res.payload.data.weather.skyCondition[1] === undefined) {
          setCloudCeiling2("");
          setSkyCondition2("");
        }

        if (res.payload.data.weather.skyCondition[2]) {
          if (unitSetting === "true") {
            setCloudCeiling3(
              `${res.payload.data.weather.skyCondition[2].altitude}'`
            );
          } else {
            setCloudCeiling3(
              `${(
                res.payload.data.weather.skyCondition[2].altitude / 3.28
              ).toFixed(0)}M`
            );
          }
        }

        if (res.payload.data.weather.skyCondition[2] === undefined) {
          setCloudCeiling3("");
          setSkyCondition3("");
        }

        if (!res.payload.data.weather.presentWeather) {
          setMetarAbbr("");
          setMetarDesc("");
        }

        if (res.payload.data.weather.presentWeather) {
          if (res.payload.data.weather.presentWeather.includes("-")) {
            setMetarDesc("Light");
          }
          if (res.payload.data.weather.presentWeather.includes("+")) {
            setMetarDesc("Heavy");
          }
          if (res.payload.data.weather.presentWeather.includes("VC")) {
            setMetarDesc("Vicinity");
          }
          if (res.payload.data.weather.presentWeather.includes("MI")) {
            setMetarDesc("Shallow");
          }
          if (res.payload.data.weather.presentWeather.includes("PR")) {
            setMetarDesc("Partial");
          }
          if (res.payload.data.weather.presentWeather.includes("BC")) {
            setMetarDesc("Patches");
          }
          if (res.payload.data.weather.presentWeather.includes("DR")) {
            setMetarDesc("Low Drifting");
          }
          if (res.payload.data.weather.presentWeather.includes("BL")) {
            setMetarDesc("Blowing");
          }
          if (res.payload.data.weather.presentWeather.includes("FZ")) {
            setMetarDesc("Freezing");
          }

          if (res.payload.data.weather.presentWeather.includes("BR")) {
            setMetarAbbr("Mist");
          }
          if (res.payload.data.weather.presentWeather.includes("TS")) {
            setMetarAbbr("Thunderstorms");
          }
          if (res.payload.data.weather.presentWeather.includes("SH")) {
            setMetarAbbr("Shower");
          }
          if (res.payload.data.weather.presentWeather.includes("DZ")) {
            setMetarAbbr("Drizzle");
          }
          if (res.payload.data.weather.presentWeather.includes("RA")) {
            setMetarAbbr("Rain");
          }
          if (res.payload.data.weather.presentWeather.includes("UP")) {
            setMetarAbbr("Unknown Precipitation");
          }
          if (res.payload.data.weather.presentWeather.includes("SN")) {
            setMetarAbbr("Snow");
          }
          if (res.payload.data.weather.presentWeather.includes("PO")) {
            setMetarAbbr("DUST DEVILS");
          }
          if (res.payload.data.weather.presentWeather.includes("SS")) {
            setMetarAbbr("Sand Storm");
          }
          if (res.payload.data.weather.presentWeather.includes("GR")) {
            setMetarAbbr("Hail");
          }
          if (res.payload.data.weather.presentWeather.includes("FG")) {
            setMetarAbbr("Fog");
          }
          if (res.payload.data.weather.presentWeather.includes("FU")) {
            setMetarAbbr("Smoke");
          }
          if (res.payload.data.weather.presentWeather.includes("HZ")) {
            setMetarAbbr("Haze");
          }
          if (res.payload.data.weather.presentWeather.includes("FC")) {
            setMetarAbbr("Tornado");
          }
        }

        if (res.payload.data.weather.skyCondition[0].cloudCover) {
          if (res.payload.data.weather.skyCondition[0].cloudCover === "CLR") {
            setSkyCondition1("Clear Sky");
            setCloudCeiling1("");
          }
          if (res.payload.data.weather.skyCondition[0].cloudCover === "SCT") {
            setSkyCondition1("Scattered");
          }
          if (res.payload.data.weather.skyCondition[0].cloudCover === "BKN") {
            setSkyCondition1("Broken");
          }
          if (res.payload.data.weather.skyCondition[0].cloudCover === "OVC") {
            setSkyCondition1("Overcast");
          }
        }

        if (res.payload.data.weather.skyCondition[1]) {
          if (res.payload.data.weather.skyCondition[1].cloudCover === "CLR") {
            setSkyCondition2("Clear Sky");
          }
          if (res.payload.data.weather.skyCondition[1].cloudCover === "SCT") {
            setSkyCondition2("Scattered");
          }
          if (res.payload.data.weather.skyCondition[1].cloudCover === "BKN") {
            setSkyCondition2("Broken");
          }
          if (res.payload.data.weather.skyCondition[1].cloudCover === "OVC") {
            setSkyCondition2("Overcast");
          }
        }

        if (res.payload.data.weather.skyCondition[2]) {
          if (res.payload.data.weather.skyCondition[2].cloudCover === "CLR") {
            setSkyCondition3("Clear Sky");
          }
          if (res.payload.data.weather.skyCondition[2].cloudCover === "SCT") {
            setSkyCondition3("Scattered");
          }
          if (res.payload.data.weather.skyCondition[2].cloudCover === "BKN") {
            setSkyCondition3("Broken");
          }
          if (res.payload.data.weather.skyCondition[2].cloudCover === "OVC") {
            setSkyCondition3("Overcast");
          }
        }
        if (
          res.payload.data.weather.skyCondition[0]?.cloudCover === "CLR" &&
          (!res.payload.data.weather.skyCondition[1] ||
            !res.payload.data.weather.skyCondition[1].cloudCover) &&
          (!res.payload.data.weather.skyCondition[2] ||
            !res.payload.data.weather.skyCondition[2].cloudCover)
        ) {
          setSkyCondition1("Clear Sky");
          setCloudCeiling1("");
          setSkyCondition2("");
          setCloudCeiling2("");
          setSkyCondition3("");
          setCloudCeiling3("");
        }
      }
    };
  }, [unitSetting]);

  useEffect(() => {
    const getWind = async () => {
      const res = await fetch(
        "https://corsproxy.io/?https://lifeatterminalvelocity.com/csc_awos/data.php"
      );
      const resArr = await res.json();

      if (!gustData.length || gustData[0].receivedAt !== resArr[0].receivedAt) {
        setGustData([...resArr]);
      }
    };
    getWind();
    const interval = setInterval(() => {
      getWind();
    }, 20000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const maxGust = gustData.map((gust) => gust.gust_speed);
    const max = Math.max(...maxGust);
    if (max < gustSpeed) {
      setMaxGust(gustSpeed);
    } else {
      setMaxGust(max);
    }
  }, [gustData, gustSpeed]);

  useEffect(() => {
    const maxSpeed = gustData.map((gust) => gust.wind_speed);
    const max = Math.max(...maxSpeed);
    if (max < speed) {
      setMaxSpeed(speed);
    } else {
      setMaxSpeed(max);
    }
  }, [gustData, speed]);

  useEffect(() => {
    const getAstornomy = async () => {
      const res = await fetch(
        "https://api.sunrise-sunset.org/json?lat=41.892&lng=-89.071&date=today&formatted=0"
      );
      const data = await res.json();
      if (data.results) {
        const sunsetFormat = new Date(data.results.sunset).toLocaleTimeString(
          "en-US",
          { timeZone: "America/Chicago" }
        );
        const sunriseFormat = new Date(data.results.sunrise).toLocaleTimeString(
          "en-US",
          { timeZone: "America/Chicago" }
        );
        const twilightFormat = new Date(
          data.results.civil_twilight_end
        ).toLocaleTimeString("en-US", { timeZone: "America/Chicago" });
        const noonFormat = new Date(data.results.solar_noon).toLocaleTimeString(
          "en-US",
          { timeZone: "America/Chicago" }
        );

        setSunset(sunsetFormat);
        setSunrise(sunriseFormat);
        setTwilight(twilightFormat);
        setNoon(noonFormat);
      }
    };
    getAstornomy();
  }, []);

  useEffect(() => {
    const getJumprun = async () => {
      const res = await fetch("https://csc-login.onrender.com/api/jumpruns/");
      const data = await res.json();

      if (data.jumpruns) {
        setJumpruns(data.jumpruns);
      } else {
        setJumpruns([]);
      }
    };
    getJumprun();

    const intervalId = setInterval(() => {
      getJumprun();
    }, 30000);

    return function () {
      setJumpruns([]);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (jumpruns[0]) {
      if (jumpruns[0].spot > 0 && jumpruns[0].spot < 10) {
        setNewSpot(`.${jumpruns[0].spot}`);
      }
      if (jumpruns[0].spot >= 10) {
        setNewSpot(`${(jumpruns[0].spot * 0.1).toFixed(1)}`);
      }
      if (jumpruns[0].offset > 0 && jumpruns[0].offset < 10) {
        setNewOffset(`.${jumpruns[0].offset}`);
      }
      if (jumpruns[0].offset >= 10) {
        setNewOffset(`${(jumpruns[0].offset * 0.1).toFixed(1)}`);
      }
    }
  }, [jumpruns]);

  useEffect(() => {
    if (!localStorage.getItem("darktheme")) {
      localStorage.setItem("darktheme", "true");
    } else {
      setDarkTheme(localStorage.getItem("darktheme"));
    }
  }, [darkTheme, setDarkTheme]);

  useEffect(() => {
    if (!localStorage.getItem("tempSetting")) {
      localStorage.setItem("tempSetting", "true");
    } else {
      setTempSetting(localStorage.getItem("tempSetting"));
    }
  }, [tempSetting, setTempSetting]);

  useEffect(() => {
    if (!localStorage.getItem("unitSetting")) {
      localStorage.setItem("unitSetting", "true");
    } else {
      setUnitSetting(localStorage.getItem("unitSetting"));
    }
  }, [unitSetting, setUnitSetting]);

  return (
    <WeatherContext.Provider
      value={{
        jumpruns,
        newSpot,
        newOffset,
        speed,
        gustSpeed,
        direction,
        metar,
        temp,
        tempC,
        tempSetting,
        setTempSetting,
        skyCondition1,
        skyCondition2,
        skyCondition3,
        cloudCeiling1,
        cloudCeiling2,
        cloudCeiling3,
        metarAbbr,
        metarDesc,
        gustData,
        darkTheme,
        setDarkTheme,
        unitSetting,
        setUnitSetting,
        directions,
        speeds,
        temps,
        received,
        pressure,
        visibility,
        densityAlt,
        dewPoint,
        sunset,
        sunrise,
        twilight,
        noon,
        maxGust,
        variableDirection,
        maxSpeed,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WindSpeedProvider;
