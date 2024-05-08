import { useContext, useState } from "react";
import { LoadContext } from "../../context/LoadContext";
import { WeatherContext } from "../../context/WeatherContext";
import { multiData } from "./testdata";
import "./manifest.css";

function Manifest() {
  let {
    loads,
    displaySport,
    displayStudent,
    displayTandem,
    setDisplaySport,
    setDisplayStudent,
    setDisplayTandem,
  } = useContext(LoadContext);
  const { darkTheme } = useContext(WeatherContext);

  const [searchValue, setSearchValue] = useState("");
  const [showFilter, setShowFilter] = useState(false);

  if (loads.error) {
    return <div>Can't connect to burble :(</div>;
  }
  loads = multiData;
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
    setShowFilter(false);
    setDisplaySport('true');
    setDisplayStudent('true');
    setDisplayTandem('true');
    localStorage.setItem("displaySport", 'true');
    localStorage.setItem("displayStudent", 'true');
    localStorage.setItem("displayTandem", 'true');
  };

  const handleShowFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleShowSport = () => {
    if (displaySport === 'true') {
      setDisplaySport('false');
      localStorage.setItem("displaySport", 'false');
    } else {
      setDisplaySport('true');
      localStorage.setItem("displaySport", 'true');
    }
  };

  const handleShowStudent = () => {
    if (displayStudent === 'true') {
      setDisplayStudent('false');
      localStorage.setItem("displayStudent", 'false');
    } else {
      setDisplayStudent('true');
      localStorage.setItem("displayStudent", 'true');
    }
  };

  const handleShowTandem = () => {
    if (displayTandem === 'true') {
      setDisplayTandem('false');
      localStorage.setItem("displayTandem", 'false');
    } else {
      setDisplayTandem('true');
      localStorage.setItem("displayTandem", 'true');
    }
  };

  return (
    <>
      {!loads.every((load) => !load.name) ? (
        <div className="jumper-search">
          <input
            onChange={handleSearch}
            value={searchValue}
            id="jumper-search-input"
            placeholder="Search for a name..."
          ></input>
          <button className="search-button" onClick={handleClear}>
            CLEAR
          </button>
          <button
            className={
              showFilter && darkTheme === "true"
                ? "search-button filterdark"
                : showFilter && darkTheme === "false"
                ? "search-button filterlight"
                : "search-button"
            }
            onClick={handleShowFilter}
          >
            FILTER
          </button>
        </div>
      ) : null}

      {showFilter ? (
        <div className="jumper-filter">
          <div
            className={
              displaySport === 'true' && darkTheme === "true"
                ? "filter-item filterdark"
                : displaySport === 'true' && darkTheme === "false"
                ? "filter-item filterlight"
                : "filter-item"
            }
            onClick={handleShowSport}
          >
            Show Sport
          </div>
          <div
            className={
              displayTandem === 'true' && darkTheme === "true"
                ? "filter-item filterdark"
                : displayTandem === 'true' && darkTheme === "false"
                ? "filter-item filterlight"
                : "filter-item"
            }
            onClick={handleShowTandem}
          >
            Show Tandem
          </div>
          <div
            className={
              displayStudent === 'true' && darkTheme === "true"
                ? "filter-item filterdark"
                : displayStudent === 'true' && darkTheme === "false"
                ? "filter-item filterlight"
                : "filter-item"
            }
            onClick={handleShowStudent}
          >
            Show Student
          </div>
        </div>
      ) : null}

      <div className="manifest-content">
        {loads.every((load) => !load.name) ? (
          <div
            className={
              darkTheme === "true" ? "single-load" : "single-load loadlight"
            }
          >
            No Loads
          </div>
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

              const slotsRemaining =
                load.max_slots - load.public_slots - load.reserve_slots;
              return (
                <div
                  className={
                    darkTheme === "true"
                      ? "single-load"
                      : "single-load loadlight"
                  }
                  key={index}
                >
                  <div className="single-load-header">
                    <div className="load-header-item first">
                      <span id="slot-count">
                        {slotsRemaining}
                        <span id="small">
                          {slotsRemaining === 1 || slotsRemaining === -1
                            ? "Slot"
                            : "Slots"}
                        </span>
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
                              : "load-time green"
                          }
                        >
                          {load.time_left}{" "}
                          <span id="small">
                            {load.time_left === 1 || load.time_left === -1
                              ? "Min"
                              : "Mins"}
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
                        return (person.name
                          .toLowerCase()
                          .includes(searchValue.toLowerCase()) ||
                          person.team_name
                            .toLowerCase()
                            .includes(searchValue.toLowerCase())) &&
                          ((displayTandem === 'true' && person.type === "Tandem") ||
                            (displayStudent === 'true' && person.type === "Student") ||
                            (displaySport === 'true' && person.type !== "Student" &&
                            person.type !== "Tandem")) ? (
                          <div
                            className={
                              person.type === "Student" && firstIndex % 2 === 0
                                ? "single-jumper student"
                                : person.type === "Student" &&
                                  firstIndex % 2 !== 0
                                ? "single-jumper student studentodd"
                                : person.type === "Tandem" &&
                                  firstIndex % 2 === 0
                                ? "single-jumper tandem"
                                : person.type === "Tandem" &&
                                  firstIndex % 2 !== 0
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
                        ) : null;
                      });
                    })}
                  </div>
                </div>
              );
            }
          })
        )}
      </div>
    </>
  );
}

export default Manifest;
