import { useEffect, useState, createContext } from "react";

export const LoadContext = createContext();

const LoadProvider = (props) => {
    const [loads, setLoads] = useState([])


    return (
        <LoadContext.Provider value={{}}>
            {props.children}
        </LoadContext.Provider>
    )
}

export default LoadProvider
