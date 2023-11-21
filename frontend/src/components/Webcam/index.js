import { useEffect } from 'react';

function WebCam() {
  useEffect(() => {
    const interval = setInterval(() => {

      const timestamp = Date.now();
      const imgElement = document.getElementById('cam');
      imgElement.src = `http://webcam.skydivecsc.com/hangar_nw?${timestamp}`;
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div className='hangar-cam'>
      <img src={`http://webcam.skydivecsc.com/hangar_nw?${Date.now()}`} id='cam' alt='Hangar camera feed not found, This is a problem with the source and not this app. Visit skydivecsc.com/skydiving-webcams to confirm.'/>
    </div>
  );
}

export default WebCam;
