import { useEffect, useState, createContext } from "react";

export const LoadContext = createContext();

const LoadProvider = (props) => {
    const [loads, setLoads] = useState([])
    const [displaySport, setDisplaySport] = useState(localStorage.getItem('displaySport') || true)
    const [displayStudent, setDisplayStudent] = useState(localStorage.getItem('displayStudent') || true)
    const [displayTandem, setDisplayTandem] = useState(localStorage.getItem('displayTandem') || true)

    const getLoads = async () => {
        const res = await fetch("https://csc-login.onrender.com/api/loads/")
        const data = await res.json()
        if (data.loads) {
            setLoads(data.loads)
        } else {
            setLoads({error: "Can't fetch loads"})
        }
    }

    useEffect(() => {
        getLoads();

        const fiveSecondInterval = setInterval(() => {
            getLoads();
        }, 5000)

        return () => {
            clearInterval(fiveSecondInterval)
        }
    }, [])


    return (
        <LoadContext.Provider value={{loads, displaySport, displayStudent, displayTandem, setDisplaySport, setDisplayStudent, setDisplayTandem}}>
            {props.children}
        </LoadContext.Provider>
    )
}

export default LoadProvider
