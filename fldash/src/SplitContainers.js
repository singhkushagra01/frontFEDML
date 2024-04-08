// SplitContainers.js
import React from 'react';

function SplitContainers() {
  return (
    <div className="SplitContainers" style={{ display: 'flex', flex: 1, height: '100vh', width: '100vw'}}>
      <div className="LeftContainer" style={{ borderRadius:30 ,flex: 1, backgroundColor: '#FFC374', height: '100vh',  width: '100vw',marginRight: "10px"}}>
        {/* Content for the left container */}
        Left Container
      </div>
      <div className="RightContainer" style={{ borderRadius:30 ,flex: 1, backgroundColor: 'white', height: '100vh', width: '100vw', marginLeft: "10px" }}>
        {/* Content for the right container */}
        Right Container
      </div>
    </div>
  );
}

export default SplitContainers;
