import React from 'react';
import '../styles/Profile.css';

const Profile = ({ name, age, score }) => {
  return (
    <div className="profile">
      <img src="/images/avatar.avif" alt="Profile" className="avatar" />
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default Profile;

