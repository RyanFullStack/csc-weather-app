import { useEffect, useState, createContext } from "react";

export const LoadContext = createContext();

const LoadProvider = (props) => {
    const [loads, setLoads] = useState([])

    const getLoads = async () => {
        const res = await fetch("https://csc-login.onrender.com/api/loads/")
        const data = await res.json()
        if (data.loads) {
            setLoads(data.loads)
        } else {
            setLoads({error: "Can't connect to burble!"})
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
        <LoadContext.Provider value={{loads}}>
            {props.children}
        </LoadContext.Provider>
    )
}

export default LoadProvider
