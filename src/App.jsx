import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WeatherContext } from "./context/WeatherContext";
import { useContext } from "react";
import Footer from "./components/Footer";
import FooterLoadingArea from "./components/FooterLoadingArea";
import Header from "./components/Header";
import Wind from "./components/Wind";
import WebCam from "./components/Webcam";
import GustChart from "./components/Gusts";
import NavBar from "./components/Navigation";
import WindsAloft from "./components/Aloft";
import CscRadar from "./components/Radar";
import DetailedPage from "./components/Detailed";
import LoadingArea from "./components/LoadingArea";
import Me from "./components/Me";
import Aircraft from "./components/Aircraft";
import WebcamHelp from "./components/WebcamHelp";
import Safety from "./components/Safety";
import LoginRedirect from "./components/LoginRedirect";
import "./App.css";
import Manifest from "./components/Manifest";

function App() {
  const { darkTheme } = useContext(WeatherContext);

  return (
    <Router>
      <div className={darkTheme === "true" ? "App" : "Applight"}>
        <div
          className={
            window.location.pathname !== "/loadingarea"
              ? "header-container"
              : "header-container-loadingarea"
          }
        >
          <Header />
        </div>

        {window.location.pathname !== "/loadingarea" && (
          <div className="nav-container">
            <NavBar />
          </div>
        )}

        <Switch>
          <Route exact path="/loadingarea">
            <div className="loadingarea-container">
              <LoadingArea />
            </div>
          </Route>

          <Route exact path="/webcams">
            <div className="hangar-cam-container">
              <WebCam />
            </div>
          </Route>

          <Route exact path="/gusts">
            <div className="gusts-container">
              <GustChart />
            </div>
          </Route>

          <Route exact path="/aloft">
            <div className="aloft-container">
              <WindsAloft />
            </div>
          </Route>

          <Route exact path="/radar">
            <div className="radar-container">
              <CscRadar />
            </div>
          </Route>

          <Route exact path="/aircraft">
            <div className="radar-container">
              <Aircraft />
            </div>
          </Route>

          <Route exact path="/detailed">
            <div className="detailed-container">
              <DetailedPage />
            </div>
          </Route>

          <Route exact path="/me">
            <div className="my-container">
              <Me />
            </div>
          </Route>

          <Route exact path="/webcamhelp">
            <div className="chart-container">
              <WebcamHelp />
            </div>
          </Route>

          <Route exact path="/safety">
            <div className="chart-container">
              <Safety />
            </div>
          </Route>

          <Route exact path="/manifest">
            <div className="manifest-container">
              <Manifest />
            </div>
          </Route>

          <Route exact path="/login">
            <div className="chart-container">
              <LoginRedirect />
            </div>
          </Route>

          <Route path="/">
            <div className="chart-container">
              <Wind />
            </div>
          </Route>
        </Switch>

        <div className="footer-container">
          {window.location.pathname !== "/loadingarea" ? (
            <Footer />
          ) : (
            <FooterLoadingArea />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
