import GetCst from "../Time";
import CurrentTemp from "../Temperature";
import LiveStatus from "../LiveStatus";
import audio from "../../images/audio.png";
import Beerlight from "../Beerlight";
import HamburgerMenu from "../HamburgerMenu";
import TriviaPopup from "../TriviaPopup";
import "./headermenu.css";

function Header() {

  return (
    <>
      {window.location.pathname !== "/loadingarea" ? <HamburgerMenu /> : null}

      <div className="livestatus">
        <LiveStatus />
      </div>
      <div className="time-container">
        <Beerlight />
        <GetCst />
        <Beerlight />
      </div>

      {window.location.pathname !== "/loadingarea" ? <TriviaPopup /> : null}

      {window.location.pathname !== "/loadingarea" ? (
        <div className="header-imgs">
          {/*
           ****************  AUDIO FEED REMOVED WHILE REBUILD -- LEAVE DIV FOR SPACING ************************
           */}
          {/* <a
            href="http://audio.skydivecsc.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={audio} alt="audio" />
          </a> */}
        </div>
      ) : null}

      <div className="temp-container">
        <CurrentTemp />
      </div>
    </>
  );
}

export default Header;
