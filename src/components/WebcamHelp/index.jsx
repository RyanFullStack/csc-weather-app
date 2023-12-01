import { NavLink } from "react-router-dom";
import "./webcamhelp.css";

function WebcamHelp() {
  return (
    <div className="webcam-help">
      <h3>Steps to fix Webcam:</h3>
      <ol className="help-list">
        <li><a href='https://webcam.skydivecsc.com/hangar_nw?1701396834238' target="_blank" rel="noreferrer">Click here to open webcam in new tab.</a></li>
        <li>Edit webcam address and add https:// before the site. </li>
        <li>If prompted about security click advanced and then proceed.</li>
        <li><NavLink exact to='/webcams'>Navigate back to the app and it should be working!</NavLink></li>
      </ol>
    </div>
  );
}

export default WebcamHelp;
