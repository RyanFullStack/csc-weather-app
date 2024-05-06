import { useContext } from "react";
import { LoadContext } from "../../context/LoadContext";
import { WeatherContext } from "../../context/WeatherContext";
import "./manifest.css";

function Manifest() {
  const { loads } = useContext(LoadContext);
  const { darkTheme } = useContext(WeatherContext);

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
              <div
                className={
                  darkTheme === "true" ? "single-load" : "single-load loadlight"
                }
                key={index}
              >
                <div className="single-load-header">
                  <div className="load-header-item">
                    {load.max_slots - load.total_slots}
                    <span id="small">Slots</span>
                  </div>
                  <div className="load-header-item">
                    {number ? (
                      <>
                        {number} <span id="small">{text}</span>
                      </>
                    ) : (
                      text
                    )}
                  </div>
                  <div className="load-header-item">
                    {load.status === "On Call" ? (
                      <>
                        {load.time_left} <span id="small">Mins</span>
                      </>
                    ) : (
                      <span id="small">{load.status}</span>
                    )}
                  </div>
                </div>
                <div className="single-load-jumpers">
                  {load.groups.map((group) => {
                    return group.map((person, index) => {
                      return (
                        <div
                          className={
                            darkTheme === "true"
                              ? "single-jumper"
                              : "single-jumper jumperlight"
                          }
                          key={index}
                        >
                          <div>{person.name}</div>
                          <div>{person.jump}</div>
                        </div>
                      );
                    });
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
