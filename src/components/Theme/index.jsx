import { useContext, useEffect } from "react";
import { WeatherContext } from "../../context/WeatherContext";

function Theme() {
    const {darkTheme, setDarkTheme} = useContext(WeatherContext)

    useEffect(() => {
        if (!localStorage.getItem('darktheme')) {
            localStorage.setItem('darktheme', 'true')
        } else {
            setDarkTheme(localStorage.getItem('darktheme'))
        }
    }, [darkTheme, setDarkTheme])


    const handleClick = () => {
        if(darkTheme === 'true') {
            setDarkTheme('false')
            localStorage.setItem('darktheme', 'false')
        } else {
            setDarkTheme('true')
            localStorage.setItem('darktheme', 'true')
        }
    }

    return (
        <div className="theme-content" onClick={handleClick}>
           {darkTheme === 'true' ? <i className="fas fa-sun"/> : <i className="fas fa-moon"/>}
        </div>
    )
}

export default Theme;
