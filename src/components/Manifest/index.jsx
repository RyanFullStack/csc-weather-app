import { useContext } from "react";
import { LoadContext } from "../../context/LoadContext";
import "./manifest.css";

function Manifest() {
  const { loads } = useContext(LoadContext);

  if (loads.error) {
    return <div>Can't connect to burble :(</div>;
  }

  console.log(loads);

  return (
    <div className="manifest-content">
      {loads.every((load) => !load.name) ? (
        <div className="single-load">No Loads</div>
      ) : (
        loads.map((load, index) => {

          if (load.name) {
            const pattern = /([a-zA-Z\s]+)(\d+)/;
            const match = load.name.match(pattern);
            let text, number;
            if (match) {
              text = match[1].trim();
              number = parseInt(match[2]);
            } else {
              text = load.name;
              number = null;
            }

            return (
              <div className="single-load" key={index}>
                <div className="single-load-header">
                  <div className="load-header-item">
                    {load.max_slots - load.total_slots}{" "}
                    <span id="small">Slots</span>
                  </div>
                  <div className="load-header-item">{number} <span id="small">{text}</span></div>
                  <div className="load-header-item">
                    {load.time_left} <span id="small">Mins</span>
                  </div>
                </div>
                <div className="single-load-jumpers">
                  {load.groups.map((group) => {
                    console.log(group);
                  })}
                </div>
              </div>
            );
          }
        })
      )}
    </div>
  );
}

export default Manifest;
