import React from 'react';
import '../styles/TopUsers.css';

const TopUsers = () => {
  const users = [
    { id: 1, name: 'Mahesh', color: '#53dbf0' },
    { id: 2, name: 'Suresh', color: '#53dbf0' },
    { id: 3, name: 'Yogesh', color: '#53dbf0' },
    { id: 4, name: 'Sarvesh', color: '#53dbf0' },
    { id: 5, name: 'Rahul', color: '#53dbf0' },
    { id: 6, name: 'Dhanu', color: '#53dbf0' },
    { id: 7, name: 'Vignesh', color: '#53dbf0' },
    { id: 8, name: 'Karthi', color: '#53dbf0' }
  ];

  return (
    <div className="top-users-card">
      <div className="top-users-header">
        <span className="top-users-icon">👤</span>
        <span className="top-users-title">TOP USERS</span>
      </div>
      <div className="users-list-container">
        <div className="users-list">
          {users.map(user => (
            <div key={user.id} className="user-item">
              <div className="user-avatar" style={{ backgroundColor: user.color }}>
                {user.id}
              </div>
              <span className="user-name">{user.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopUsers;