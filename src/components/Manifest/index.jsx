import { useContext } from "react";
import { LoadContext } from "../../context/LoadContext";
import "./manifest.css";

function Manifest() {
  const { loads } = useContext(LoadContext);

  if (loads.error) {
    return <div>Can't connect to burble :(</div>;
  }

  return (
    <div className="manifest-content">
      {loads.every((load) => !load.length) ? (
        <div className="single-load">No Loads</div>
      ) : (
        loads.map(
          (load, index) =>
            load.length > 0 && (
              <div className="single-load" key={index}>
                Load has info
              </div>
            )
        )
      )}
    </div>
  );
}

export default Manifest;
