import { useContext } from "react";
import { LoadContext } from "../../context/LoadContext";
import "./manifest.css";

function Manifest() {
  const { loads } = useContext(LoadContext);

  return (
    <div className="manifest-content">
      {loads.map((load, index) => {
        if (!load.length) {
          return (
            <div className="single-load" key={index}>
              No Load
            </div>
          );
        } else {
          return (
            <div className="single-load" key={index}>
              Load has info
            </div>
          );
        }
      })}
    </div>
  );
}

export default Manifest;
