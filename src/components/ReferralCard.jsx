import React from 'react';
import '../styles/ReferralCard.css';

const ReferralCard = () => {
  return (
    <div className="referral-card">
      <div className="referral-content">
        <p className="referral-title">
          Want Some <b>Extra</b> Money?
        </p>
        <button className="referral-button">Referral Program</button>
      </div>
      <div className="referral-image">
        <img src="" alt="Dashboard illustration" />
      </div>
    </div>
  );
};

export default ReferralCard;