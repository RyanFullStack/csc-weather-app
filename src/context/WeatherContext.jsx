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
  const [webcamDirection, setWebcamDirection] = useState('west')

  let weatherData = []
  let windData = []

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

        windData = []
        windData.push(res.payload)

        const wind = windData[0].data.wind

        setVariableDirection(wind.variableDirection);
        if (wind.speed) {
          setSpeed(wind.speed);
        }
        setGustSpeed(wind.gustSpeed);
        if (wind.direction) {
          setDirection(wind.direction);
        }
      }
    };
  }, [windData]);

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

        weatherData = []
        weatherData.push(res.payload)

        const weather = weatherData[0].data.weather

        if (weather.altimeterSetting) {
          setPressure(weather.altimeterSetting);
        }
        if (weather.densityAltitude) {
          setDensityAlt(weather.densityAltitude);
        }
        if (weather.visibility) {
          setVisibility(weather.visibility);
        }
        if (weather.dewPoint) {
          setDewPoint(weather.dewPoint);
        }

        const metArr = weather.metar.split(" ");
        metArr.pop();
        metArr.pop();
        metArr.pop();
        metArr.shift();

        const metArr2 = metArr.join(" ");
        setMetar(metArr2)

        if (weather.temperature) {
          setTemp(weather.temperature);
          setTempC(
            ((weather.temperature - 32) / 1.8).toFixed(1)
          );
        }

        if (weather.skyCondition[0].altitude) {
          if (unitSetting === "true") {
            setCloudCeiling1(
              `${weather.skyCondition[0].altitude}'`
            );
          } else {
            setCloudCeiling1(
              `${(
                weather.skyCondition[0].altitude / 3.28
              ).toFixed(0)}M`
            );
          }
        }

        if (weather.skyCondition[0].altitude === null) {
          setSkyCondition1("Clear Sky");
          setCloudCeiling1("");
        }

        if (weather.skyCondition[1]) {
          if (unitSetting === "true") {
            setCloudCeiling2(
              `${weather.skyCondition[1].altitude}'`
            );
          } else {
            setCloudCeiling2(
              `${(
                weather.skyCondition[1].altitude / 3.28
              ).toFixed(0)}M`
            );
          }
        }

        if (weather.skyCondition[1] === undefined) {
          setCloudCeiling2("");
          setSkyCondition2("");
        }

        if (weather.skyCondition[2]) {
          if (unitSetting === "true") {
            setCloudCeiling3(
              `${weather.skyCondition[2].altitude}'`
            );
          } else {
            setCloudCeiling3(
              `${(
                weather.skyCondition[2].altitude / 3.28
              ).toFixed(0)}M`
            );
          }
        }

        if (weather.skyCondition[2] === undefined) {
          setCloudCeiling3("");
          setSkyCondition3("");
        }

        if (!weather.presentWeather) {
          setMetarAbbr("");
          setMetarDesc("");
        }

        if (weather.presentWeather) {
          if (weather.presentWeather.includes("-")) {
            setMetarDesc("Light");
          }
          if (weather.presentWeather.includes("+")) {
            setMetarDesc("Heavy");
          }
          if (weather.presentWeather.includes("VC")) {
            setMetarDesc("Vicinity");
          }
          if (weather.presentWeather.includes("MI")) {
            setMetarDesc("Shallow");
          }
          if (weather.presentWeather.includes("PR")) {
            setMetarDesc("Partial");
          }
          if (weather.presentWeather.includes("BC")) {
            setMetarDesc("Patches");
          }
          if (weather.presentWeather.includes("DR")) {
            setMetarDesc("Low Drifting");
          }
          if (weather.presentWeather.includes("BL")) {
            setMetarDesc("Blowing");
          }
          if (weather.presentWeather.includes("FZ")) {
            setMetarDesc("Freezing");
          }

          if (weather.presentWeather.includes("BR")) {
            setMetarAbbr("Mist");
          }
          if (weather.presentWeather.includes("TS")) {
            setMetarAbbr("Thunderstorms");
          }
          if (weather.presentWeather.includes("SH")) {
            setMetarAbbr("Shower");
          }
          if (weather.presentWeather.includes("DZ")) {
            setMetarAbbr("Drizzle");
          }
          if (weather.presentWeather.includes("RA")) {
            setMetarAbbr("Rain");
          }
          if (weather.presentWeather.includes("UP")) {
            setMetarAbbr("Precipitation");
          }
          if (weather.presentWeather.includes("SN")) {
            setMetarAbbr("Snow");
          }
          if (weather.presentWeather.includes("PO")) {
            setMetarAbbr("DUST DEVILS");
          }
          if (weather.presentWeather.includes("SS")) {
            setMetarAbbr("Sand Storm");
          }
          if (weather.presentWeather.includes("GR")) {
            setMetarAbbr("Hail");
          }
          if (weather.presentWeather.includes("FG")) {
            setMetarAbbr("Fog");
          }
          if (weather.presentWeather.includes("FU")) {
            setMetarAbbr("Smoke");
          }
          if (weather.presentWeather.includes("HZ")) {
            setMetarAbbr("Haze");
          }
          if (weather.presentWeather.includes("FC")) {
            setMetarAbbr("Tornado");
          }
        }

        if (weather.skyCondition[0].cloudCover) {
          if (weather.skyCondition[0].cloudCover === "CLR") {
            setSkyCondition1("Clear Sky");
            setCloudCeiling1("");
          }
          if (weather.skyCondition[0].cloudCover === "SCT") {
            setSkyCondition1("Scattered");
          }
          if (weather.skyCondition[0].cloudCover === "BKN") {
            setSkyCondition1("Broken");
          }
          if (weather.skyCondition[0].cloudCover === "OVC") {
            setSkyCondition1("Overcast");
          }
        }

        if (weather.skyCondition[1]) {
          if (weather.skyCondition[1].cloudCover === "CLR") {
            setSkyCondition2("Clear Sky");
          }
          if (weather.skyCondition[1].cloudCover === "SCT") {
            setSkyCondition2("Scattered");
          }
          if (weather.skyCondition[1].cloudCover === "BKN") {
            setSkyCondition2("Broken");
          }
          if (weather.skyCondition[1].cloudCover === "OVC") {
            setSkyCondition2("Overcast");
          }
        }

        if (weather.skyCondition[2]) {
          if (weather.skyCondition[2].cloudCover === "CLR") {
            setSkyCondition3("Clear Sky");
          }
          if (weather.skyCondition[2].cloudCover === "SCT") {
            setSkyCondition3("Scattered");
          }
          if (weather.skyCondition[2].cloudCover === "BKN") {
            setSkyCondition3("Broken");
          }
          if (weather.skyCondition[2].cloudCover === "OVC") {
            setSkyCondition3("Overcast");
          }
        }
        if (
          weather.skyCondition[0]?.cloudCover === "CLR" &&
          (!weather.skyCondition[1] ||
            !weather.skyCondition[1].cloudCover) &&
          (!weather.skyCondition[2] ||
            !weather.skyCondition[2].cloudCover)
        ) {
          setSkyCondition1("Clear Sky");
          setCloudCeiling1("");
          setSkyCondition2("");
          setCloudCeiling2("");
          setSkyCondition3("");
          setCloudCeiling3("");
        }
      }
    }
  }, [weatherData, unitSetting]);

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

  useEffect(() => {
    if (!localStorage.getItem("userWebcam")) {
      localStorage.setItem("userWebcam", "west");
    } else {
      setUnitSetting(localStorage.getItem("userWebcam"));
    }
  }, [webcamDirection, setWebcamDirection]);

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
        webcamDirection,
        setWebcamDirection
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WindSpeedProvider;
