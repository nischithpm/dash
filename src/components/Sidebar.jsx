import React, { useState } from 'react';
import '../styles/Sidebar.css';
import { FaHome, FaBoxOpen, FaChartLine, FaCalendarAlt, FaMoneyBillWave, FaFileAlt, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('overview');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleContactClick = () => {
    alert('Contact support initiated');
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <div className="logo">
          <span className="logo-icon">S</span>
        </div>
        <h2 className="brand-name">Squeez.</h2>
      </div>

      <div className="sidebar-section">
        <ul className="sidebar-menu">
          <li 
            className={`sidebar-item ${activeItem === 'overview' ? 'active' : ''}`}
            onClick={() => handleItemClick('overview')}
          >
            <FaHome className="sidebar-icon" />
            <span>Overview</span>
          </li>
          <li 
            className={`sidebar-item ${activeItem === 'products' ? 'active' : ''}`}
            onClick={() => handleItemClick('products')}
          >
            <FaBoxOpen className="sidebar-icon" />
            <span>Products</span>
          </li>
          <li 
            className={`sidebar-item ${activeItem === 'campaigns' ? 'active' : ''}`}
            onClick={() => handleItemClick('campaigns')}
          >
            <FaChartLine className="sidebar-icon" />
            <span>Campaigns</span>
          </li>
          <li 
            className={`sidebar-item ${activeItem === 'schedules' ? 'active' : ''}`}
            onClick={() => handleItemClick('schedules')}
          >
            <FaCalendarAlt className="sidebar-icon" />
            <span>Schedules</span>
          </li>
          <li 
            className={`sidebar-item ${activeItem === 'payouts' ? 'active' : ''}`}
            onClick={() => handleItemClick('payouts')}
          >
            <FaMoneyBillWave className="sidebar-icon" />
            <span>Payouts</span>
          </li>
          <li 
            className={`sidebar-item ${activeItem === 'statements' ? 'active' : ''}`}
            onClick={() => handleItemClick('statements')}
          >
            <FaFileAlt className="sidebar-icon" />
            <span>Statements</span>
          </li>
          <li 
            className={`sidebar-item ${activeItem === 'settings' ? 'active' : ''}`}
            onClick={() => handleItemClick('settings')}
          >
            <FaCog className="sidebar-icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>

      <div className="contact-container">
        <p>Have any problems with manage your dashboard?</p>
        <button className="contact-button" onClick={handleContactClick}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Sidebar;