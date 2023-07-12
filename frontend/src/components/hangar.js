import React, { useEffect } from 'react';

function HangarCam() {
  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a unique query parameter to force image reload
      const timestamp = Date.now();
      const imgElement = document.getElementById('cam');
      imgElement.src = `http://webcam.skydivecsc.com/hangar_nw?1688604278611&_=${timestamp}`;
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <div className='hangar-cam'>
      <img src='https://webcam.skydivecsc.com/hangar_nw?1688604278611' id='cam' alt='Hangar camera feed not found, This is a problem with the source and not this app. Visit skydivecsc.com/skydiving-webcams to confirm.'/>
    </div>
  );
}

export default HangarCam;
