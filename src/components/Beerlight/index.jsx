import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";
import redLight from "../../images/redlight.png";
import yellowLight from "../../images/yellowlight.png";
import greenLight from "../../images/greenlight.png";

function Beerlight() {
  const { jumpruns } = useContext(WeatherContext);

  return (
    <>
      {jumpruns[0] ? (
        <img
          src={
            jumpruns[0]?.beerLight
              ? yellowLight
              : jumpruns[0]?.weatherHold
              ? redLight
              : jumpruns[0]?.heading
              ? greenLight
              : null
          }
          alt="beerlight"
        />
      ) : null}
    </>
  );
}

export default Beerlight;
