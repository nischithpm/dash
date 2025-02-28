import React from 'react';
import '../styles/ReferralCard.css';

const ReferralCard = () => {
  return (
    <div className="referral-card">
      <div className="referral-content">
        <h2 className="referral-title">
          Want Some <span className="highlight">Extra</span> Money?
        </h2>
        <button className="referral-button">Referral Program</button>
      </div>
      <div className="referral-image">
        <img src="" alt="Dashboard illustration" />
      </div>
    </div>
  );
};

export default ReferralCard;