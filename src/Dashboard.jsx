import React from 'react';
import './Dashboard.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ReferralCard from './components/ReferralCard';
import TotalProductsCard from './components/TotalProductsCard';
import TotalEarningsCard from './components/TotalEarningsCard';
import DownloadsChart from './components/DownloadsChart';
import TopUsers from './components/TopUsers';
import BalancesCard from './components/BalancesCard';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="left-section">
            <Header userName="James Bond" />
            <div className="cards-grid">
              <ReferralCard />
              <TotalProductsCard />
              <TotalEarningsCard />
              <DownloadsChart />
            </div>
          </div>
          <div className="right-section">
            <TopUsers />
            <BalancesCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;