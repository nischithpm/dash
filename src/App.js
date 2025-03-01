import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ReferralCard from './components/ReferralCard';
import StatCard from './components/StatCard';
import DownloadChart from './components/DownloadsChart';
import TopUsers from './components/TopUsers';
import BalanceCard from './components/BalanceCard';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <div className="middle-section">
          <div class="container">
            <div class="text-content">
              <p>Welcome Back,</p>
              <h1>User</h1>
            </div>
            <div>
              <button class="upload-product">
                <b>Upload Product</b>
              </button>
            </div>
          </div>
          <div className="cards-container">
            <ReferralCard />
          </div>
            <div className="stats-row">
              <StatCard
                title="TOTAL PRODUCT"
                value="11,300"
                subValue="Items"
                change="+10% this week"
                positive={true}
              />
              <StatCard
                title="TOTAL EARNING"
                value="40,230"
                subValue="Rupee"
                change="-20% this week"
                positive={false}
              />
            </div>
            <DownloadChart />
          
        </div>
        <div className="right-section">
          <div className="search-notification">
            <div className="search-bar">
              <input type="text" placeholder="Search" />
              <i className="search-icon">🔍</i>
            </div>
            <div className="notification">
              <i className="notification-icon">🔔</i>
              <span className="notification-badge">2</span>
            </div>
          </div>
          <TopUsers />
          <BalanceCard />
        </div>
      </div>
    </div>
  );
}

export default App;