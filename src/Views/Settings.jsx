import React from 'react';
import './views.css';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SideBar from '../Components/SideBar/SideBar';

function Settings() {
  const navigate = useNavigate();
  return (
    <SideBar>
      <h1>Settings</h1>
      <div className="nameContainer">
        <Avatar
          sx={{
            marginRight: '20px',
          }}
          src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        />
        <p>Ahsan Iqbal</p>
      </div>
      <button onClick={() => navigate('/edit-profile')} className="nameContainer settingContainer"><p>Edit Profile</p></button>
      <button onClick={() => navigate('/change-password')} className="nameContainer settingContainer"><p>Change Password</p></button>
    </SideBar>
  );
}

export default Settings;
