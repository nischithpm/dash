import React from 'react';
import '../styles/TopUsers.css';

const TopUsers = () => {
  const users = [
    { id: 1, name: 'James Bond', color: '#53dbf0' },
    { id: 2, name: 'Jonyy Dep', color: '#53dbf0' },
    { id: 3, name: 'James Cameron', color: '#53dbf0' },
    { id: 4, name: 'Diny Delems', color: '#53dbf0' },
    { id: 5, name: 'Brad Pit', color: '#53dbf0' },
    { id: 6, name: 'Anjelina Jolly', color: '#53dbf0' },
    { id: 7, name: 'Tom Cruise', color: '#53dbf0' },
    { id: 8, name: 'Leonardo DiCaprio', color: '#53dbf0' }
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