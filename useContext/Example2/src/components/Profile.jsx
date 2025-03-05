import React from 'react';
import { useUser } from '../contexts/UserContext';

const Profile = () => {
  const { user } = useUser();

  return (
    <div>
      <h2>Profile Example</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Profile;
