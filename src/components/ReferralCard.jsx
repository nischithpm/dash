import React from 'react';
import '../styles/ReferralCard.css';

const ReferralCard = () => {
  return (
    <div className="referral-card">
      <div className="referral-content">
        <p className="referral-title">
          Want Some <span className="highlight">EXTRA Money?</span> 
        </p>
        <button className="referral-button">Referral Program</button>
      </div>
    </div>
  );
};

export default ReferralCard;