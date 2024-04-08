// Header.js
import React from 'react';

function Header() {
  return (
    <div className="Header" style={{ flexDirection: "row", backgroundColor: 'white', padding: '20px' }}>
      <h1 style={{ flex: 1, color: 'black', fontSize: '32px', letterSpacing: '6px', fontFamily: 'sans-serif' }}>Federated Learning - DeepFedHC</h1>
    </div>
  );
}

export default Header;
