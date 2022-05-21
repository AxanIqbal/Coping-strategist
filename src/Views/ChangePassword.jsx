import React from 'react';
import { useNavigate } from 'react-router-dom';
import './views.css';
import Box from '../Components/Box';

function ChangePassword() {
  const navigate = useNavigate();
  return (
    <div>
      <Box showBack={false} showHeading heading="Change Password">
        <div className="container">
          <p className="heading">Current Password</p>
          <input type="password" className="inputContainer" />
        </div>
        <div className="container">
          <p className="heading">New Password</p>
          <input type="password" className="inputContainer" />
        </div>
        <div className="container">
          <p className="heading">Confirm Password</p>
          <input type="password" className="inputContainer" />
        </div>
        <button onClick={() => navigate('/')} className="signinButton" style={{ marginTop: '25px' }}>
          Save Changes
        </button>
      </Box>
    </div>
  );
}

export default ChangePassword;
