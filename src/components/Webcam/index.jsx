import { useEffect, useState, useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

function WebCam() {

  const { webcamDirection, setWebcamDirection } = useContext(WeatherContext)

  useEffect(() => {
    const interval = setInterval(() => {

      const timestamp = Date.now();
      const imgElement = document.getElementById('cam');
      imgElement.src = `https://webcam.skydivecsc.com/hangar_ne?${timestamp}`;
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hangar-cam'>
      <img src={`https://webcam.skydivecsc.com/hangar_ne?${Date.now()}`} id='cam' alt='Hangar camera feed not found, This is a problem with the source and not this app. Visit skydivecsc.com/skydiving-webcams to confirm.'/>
    </div>
  );
}

export default WebCam;
