import React from 'react';
import '../styles/BalanceCard.css';

const BalanceCard = () => {
  const handleWithdrawClick = () => {
    alert('Withdraw money functionality initiated');
  };

  return (
    <div className="balance-card">
        <span style={{fontSize:18}}>BALANCE</span>
      <div className="balances-container">
        <div className="balance-item">
          <h2>₹53540</h2>
        </div>
        <div className="balance-divider"></div>
        <div className="balance-item">
          <h2>₹33590</h2>
        </div>
      </div>
      <button className="withdraw-button" onClick={handleWithdrawClick}>
        Withdraw Money
      </button>
    </div>
  );
};

export default BalanceCard;