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
  const [cloudCeilingM1, setCloudCeilingM1] = useState("");
  const [cloudCeilingM2, setCloudCeilingM2] = useState("");
  const [cloudCeilingM3, setCloudCeilingM3] = useState("");
  const [metarAbbr, setMetarAbbr] = useState("");
  const [metarDesc, setMetarDesc] = useState("");
  const [gustData, setGustData] = useState([]);
  const [isAwosLive, setIsAwosLive] = useState(true)
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("darkTheme") || "true"
  );
  const [tempSetting, setTempSetting] = useState(
    localStorage.getItem("tempSetting") || "true"
  );
  const [unitSetting, setUnitSetting] = useState(
    localStorage.getItem("unitSetting") || "true"
  );
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
  const [maxGust, setMaxGust] = useState(null);
  const [maxSpeed, setMaxSpeed] = useState(null);
  const [variableDirection1, setVariableDirection1] = useState("");
  const [variableDirection2, setVariableDirection2] = useState("");
  const [jumpruns, setJumpruns] = useState([]);
  const [newSpot, setNewSpot] = useState("");
  const [newOffset, setNewOffset] = useState("");

  // Changed to yard while security feed down
  const [webcamDirection, setWebcamDirection] = useState(
    localStorage.getItem("webcamDirection") || "yard"
  );

  const [speedUnit, setSpeedUnit] = useState(
    localStorage.getItem("speedUnit") || "true"
  );

  //necessary for websocket to function correctly and stay alive, don't use state
  let weatherData = [];
  let windData = [];

  const getWind = async () => {
    const res = await fetch("https://csc-login.onrender.com/api/weather/gusts");
    const resArr = await res.json();
    if (!resArr.length) {
      setGustData([{ error: "no gust data found" }]);
    } else {
      setGustData([...resArr]);
    }
  };

  const getAloft = async () => {
    const res = await fetch("https://csc-login.onrender.com/api/weather/aloft");
    let winds = await res.json();

    if (!winds.direction) {
      winds = { error: "no wind aloft info found!" };
    }

    if (winds.error) {
      setDirections(winds);
      setTemps({});
      setSpeeds({});
      setReceived(null);
    } else {
      setDirections(winds.direction);
      setTemps(winds.temp);
      setSpeeds(winds.speed);
      setReceived(winds.validtime);
    }
  };

  const getJumprun = async () => {
    const res = await fetch("https://csc-login.onrender.com/api/jumpruns/");
    const data = await res.json();

    if (data.jumpruns) {
      setJumpruns(data.jumpruns);

      if (data.jumpruns[0].spot > 0 && data.jumpruns[0].spot < 10) {
        setNewSpot(`.${data.jumpruns[0].spot}`);
      }
      if (data.jumpruns[0].spot >= 10) {
        setNewSpot(`${(data.jumpruns[0].spot * 0.1).toFixed(1)}`);
      }
      if (data.jumpruns[0].offset > 0 && data.jumpruns[0].offset < 10) {
        setNewOffset(`.${data.jumpruns[0].offset}`);
      }
      if (data.jumpruns[0].offset >= 10) {
        setNewOffset(`${(data.jumpruns[0].offset * 0.1).toFixed(1)}`);
      }
    } else {
      setJumpruns([]);
    }
  };

  const getAstronomy = async () => {
    const res = await fetch(
      "https://csc-login.onrender.com/api/weather/astronomy"
    );
    const data = await res.json();
    if (data.results) {
      const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "America/Chicago",
      };

      const sunsetFormat = new Date(data.results.sunset).toLocaleTimeString(
        "en-US",
        options
      );
      const sunriseFormat = new Date(data.results.sunrise).toLocaleTimeString(
        "en-US",
        options
      );
      const twilightFormat = new Date(
        data.results.civil_twilight_end
      ).toLocaleTimeString("en-US", options);

      setSunset(sunsetFormat);
      setSunrise(sunriseFormat);
      setTwilight(twilightFormat);
    }
  };

  useEffect(() => {
    getJumprun();
    getWind();
    getAloft();
    getAstronomy();

    const thirtySecondInterval = setInterval(() => {
      getJumprun();
      getWind();
    }, 30000);

    const threeMinuteInterval = setInterval(() => {
      getAloft();
    }, 180000)

    const tenMinuteInterval = setInterval(() => {
      getAstronomy();
    }, 600000)

    return () => {
      clearInterval(thirtySecondInterval);
      clearInterval(threeMinuteInterval);
      clearInterval(tenMinuteInterval);
    };
  }, []);

  useEffect(() => {
    let maxGust, maxSpeed;

    if (gustData[0]?.error) {
      maxGust = 0;
      maxSpeed = 0;
    } else {
      const maxGustArr = gustData.map((gust) => gust.gust_speed);
      const maxSpeedArr = gustData.map((gust) => gust.wind_speed);
      maxGust = Math.max(...maxGustArr);
      maxSpeed = Math.max(...maxSpeedArr);
    }

    if (maxGust < gustSpeed) {
      setMaxGust(gustSpeed);
    } else {
      setMaxGust(maxGust);
    }
    if (maxSpeed < speed) {
      setMaxSpeed(speed);
    } else {
      setMaxSpeed(maxSpeed);
    }
  }, [gustData, speed, gustSpeed]);

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
          id: "weather",
          payload: { query: weatherQuery, variables: null },
        })
      );

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

      if (!res.id) {
        setIsAwosLive(false)
      } else {
        setIsAwosLive(true)
      }

      if (res.id === "wind" && res.payload) {
        windData = [];
        windData.push(res.payload);

        const wind = windData[0].data.wind;

        setVariableDirection1(wind?.variableDirection?.[0] || "");
        setVariableDirection2(wind?.variableDirection?.[1] || "");
        setSpeed(wind?.speed || 0);
        setGustSpeed(wind?.gustSpeed || null);
        setDirection(wind?.direction || 0);
      }

      if (res.id === "weather" && res.payload) {
        weatherData = [];
        weatherData.push(res.payload);

        const weather = weatherData[0].data.weather;

        setPressure(weather?.altimeterSetting || null);
        setDensityAlt(weather?.densityAltitude || null);
        setVisibility(weather?.visibility || null);
        setDewPoint(weather?.dewPoint || null);

        const metArr = weather.metar.split(" ");
        metArr.pop();
        metArr.pop();
        metArr.pop();
        metArr.shift();
        const formattedMetar = metArr.join(" ");
        setMetar(formattedMetar);

        setTemp(weather?.temperature);
        setTempC(((weather?.temperature - 32) / 1.8).toFixed(1));

        setCloudCeiling1(`${weather?.skyCondition[0]?.altitude}'`);
        setCloudCeilingM1(
          `${(weather?.skyCondition[0]?.altitude / 3.28).toFixed(0)}M`
        );

        if (weather.skyCondition[0].altitude === null) {
          setCloudCeiling1("");
          setCloudCeilingM1("");
        }

        setCloudCeiling2(`${weather?.skyCondition[1]?.altitude}'`);
        setCloudCeilingM2(
          `${(weather?.skyCondition[1]?.altitude / 3.28).toFixed(0)}M`
        );

        if (!weather.skyCondition[1]) {
          setCloudCeiling2("");
          setCloudCeilingM2("");
          setSkyCondition2("");
        }

        setCloudCeiling3(`${weather?.skyCondition[2]?.altitude}'`);
        setCloudCeilingM3(
          `${(weather?.skyCondition[2]?.altitude / 3.28).toFixed(0)}M`
        );

        if (!weather.skyCondition[2]) {
          setCloudCeiling3("");
          setCloudCeilingM3("");
          setSkyCondition3("");
        }

        if (!weather.presentWeather) {
          setMetarAbbr("");
          setMetarDesc("");
        }

        const metarDescriptors = {
          "-": "Light",
          "+": "Heavy",
          VC: "Vicinity",
          MI: "Shallow",
          PR: "Partial",
          BC: "Patches",
          DR: "Low Drifting",
          BL: "Blowing",
          FZ: "Freezing",
        };

        const metarAbbreviators = {
          BR: "Mist",
          TS: "Thunderstorms",
          SH: "Shower",
          DZ: "Drizzle",
          RA: "Rain",
          UP: "Precipitation",
          SN: "Snow",
          PO: "DUST DEVILS",
          SS: "Sand Storm",
          GR: "Hail",
          FG: "Fog",
          FU: "Smoke",
          HZ: "Haze",
          FC: "Tornado",
        };

        if (weather.presentWeather) {
          for (const condition of Object.keys(metarDescriptors)) {
            if (weather.presentWeather.includes(condition)) {
              setMetarDesc(metarDescriptors[condition]);
            }
          }

          for (const condition of Object.keys(metarAbbreviators)) {
            if (weather.presentWeather.includes(condition)) {
              setMetarAbbr(metarAbbreviators[condition]);
            }
          }
        }

        const skyConditions = {
          CLR: "Clear Sky",
          SCT: "Scattered",
          BKN: "Broken",
          OVC: "Overcast",
        };

        setSkyCondition1(
          skyConditions[weather?.skyCondition[0]?.cloudCover] || ""
        );
        setSkyCondition2(
          skyConditions[weather?.skyCondition[1]?.cloudCover] || ""
        );
        setSkyCondition3(
          skyConditions[weather?.skyCondition[2]?.cloudCover] || ""
        );

        if (
          (weather.skyCondition[0]?.cloudCover === "CLR" ||
            weather.skyCondition[0]?.altitude === null) &&
          (!weather.skyCondition[1] || !weather.skyCondition[1].cloudCover) &&
          (!weather.skyCondition[2] || !weather.skyCondition[2].cloudCover)
        ) {
          setSkyCondition1("Clear Sky");
          setCloudCeiling1("");
          setCloudCeilingM1("");
          setSkyCondition2("");
          setCloudCeiling2("");
          setCloudCeilingM2("");
          setSkyCondition3("");
          setCloudCeiling3("");
          setCloudCeilingM3("");
        }
      }
    };
  }, [unitSetting]);

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
        cloudCeilingM1,
        cloudCeilingM2,
        cloudCeilingM3,
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
        maxGust,
        variableDirection1,
        variableDirection2,
        maxSpeed,
        webcamDirection,
        setWebcamDirection,
        speedUnit,
        setSpeedUnit,
        isAwosLive
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WindSpeedProvider;
