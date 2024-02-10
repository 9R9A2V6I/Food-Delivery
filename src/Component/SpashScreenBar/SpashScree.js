import React, { useState, useEffect } from 'react';
import './SplashScree.css'; // Import your CSS file for styling
import CompassImg from "../../Assets/7-2-1-300x300 (1).gif";

const SpashScreen = () => {
  const [visible, setVisible] = useState(true);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation((prevRotation) => (prevRotation + 1) % 360);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Set a timeout to hide the splash screen after a certain duration
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 3000); // Adjust the duration as needed

    // Cleanup the timeout on component unmount to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  const [isSliced, setIsSliced] = useState(false);

  const handleSliceClick = () => {
    setIsSliced(!isSliced);
  };

  return (
    <div className={`splash-screen ${visible ? 'visible' : 'hidden'}`}>
      {/* Your splash screen content goes here */}
      <div className="splash-content">
        <img
          src={CompassImg}
          alt=""
          // style={{ transform: rotate(${rotation}deg) }}
          className={`rotateCompass ${visible ? 'visible' : 'hidden'}`}
        />
      </div>
    </div>
  );
};

export default SpashScreen;

