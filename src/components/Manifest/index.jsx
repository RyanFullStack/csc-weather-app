import { useContext } from "react";
import { LoadContext } from "../../context/LoadContext";
import { WeatherContext } from "../../context/WeatherContext";
import "./manifest.css";

function Manifest() {
  let { loads } = useContext(LoadContext);
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
                  <div className="load-header-item first">
                    <span id="slot-count">
                      {load.max_slots - load.public_slots - load.reserve_slots}
                      <span id="small">Slots</span>
                    </span>
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
                  <div className="load-header-item end">
                    {load.status === "On Call" ? (
                      <span
                        className={
                          load.time_left < 6
                            ? "load-time red"
                            : load.time_left < 11
                            ? "load-time yellow"
                            : "load-time"
                        }
                      >
                        {load.time_left}{" "}
                        <span id="small">
                          {load.time_left === 1 ? "Min" : "Mins"}
                        </span>
                      </span>
                    ) : (
                      <span id="small">{load.status}</span>
                    )}
                  </div>
                </div>
                <div className="single-load-jumpers">
                  {load.groups.map((group, firstIndex) => {
                    return group.map((person, index) => {
                      return (
                        <div
                          className={
                            person.type === "Student" && firstIndex % 2 === 0
                              ? "single-jumper student"
                              : person.type === "Student" &&
                                firstIndex % 2 !== 0
                              ? "single-jumper student studentodd"
                              : person.type === "Tandem" && firstIndex % 2 === 0
                              ? "single-jumper tandem"
                              : person.type === "Tandem" && firstIndex % 2 !== 0
                              ? "single-jumper tandem tandemodd"
                              : darkTheme === "true"
                              ? "single-jumper"
                              : "single-jumper jumperlight"
                          }
                          key={index}
                        >
                          <div id="jumper-name">{person.name}</div>
                          <div id="jumper-team">
                            <span id="small">
                              {person.team_name
                                ? person.team_name
                                : person.group_number}
                            </span>
                          </div>
                          <div id="jumper-jump">
                            {person.jump} <br />
                            <span id="small">
                              {person.option_name} {person.handycam_jump}
                            </span>
                          </div>
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
