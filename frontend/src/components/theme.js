import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

function Theme() {
    const {darkTheme, setDarkTheme} = useContext(WeatherContext)

    const handleClick = () => {
        setDarkTheme(!darkTheme)
    }

    return (
        <div className="theme-content" onClick={handleClick}>
           <i className="fa-solid fa-sun"></i>
           <i className="fa-solid fa-moon"></i>
        </div>
    )
}

export default Theme;
