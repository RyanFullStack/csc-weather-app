import { useContext } from "react";
import { LoadContext } from "../../context/LoadContext";

function Manifest() {
    const { loads } = useContext(LoadContext)

    console.log(loads)

    return (
        <div>
            MANIFEST SCREEN
        </div>
    )
}

export default Manifest;
