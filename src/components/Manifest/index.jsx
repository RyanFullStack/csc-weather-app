import { useContext } from "react";
import { LoadContext } from "../../context/LoadContext";
import './manifest.css'

function Manifest() {
    const { loads } = useContext(LoadContext)

    console.log(loads)

    return (
        <div className="manifest-content">
            MANIFEST SCREEN
        </div>
    )
}

export default Manifest;
