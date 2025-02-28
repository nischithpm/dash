import React from 'react';
import './Header.css';

const Header = () => {
  const handleUploadClick = () => {
    alert('Upload product functionality initiated');
  };

  return (
    <div className="header">
      <div className="welcome-section">
        <p className="welcome-text">Welcome Back,</p>
        <h1 className="user-name">James Bond</h1>
      </div>
      <button className="upload-button" onClick={handleUploadClick}>
        Upload Product
      </button>
    </div>
  );
};

export default Header;