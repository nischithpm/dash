import React from 'react';
import '../styles/BalanceCard.css';

const BalanceCard = () => {
  const handleWithdrawClick = () => {
    alert('Withdraw money functionality initiated');
  };

  return (
    <div className="balance-card">
      <div className="balance-header">
        <span className="balance-icon">💰</span>
        <span className="balance-title">BALANCES</span>
      </div>
      <div className="balances-container">
        <div className="balance-item">
          <h2 className="balance-value">$535</h2>
        </div>
        <div className="balance-divider"></div>
        <div className="balance-item">
          <h2 className="balance-value">$335</h2>
        </div>
      </div>
      <button className="withdraw-button" onClick={handleWithdrawClick}>
        Withdraw Money
      </button>
    </div>
  );
};

export default BalanceCard;